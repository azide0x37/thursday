import json
import requests
import traceback
from requests.adapters import HTTPAdapter

from requests.packages.urllib3.util.retry import Retry
import xml.etree.ElementTree as ET


BASE_URL = "https://boardgamegeek.com/xmlapi2"


def requests_retry_session(
    retries=3,
    backoff_factor=0.3,
    status_forcelist=(400, 500, 502, 504),
    session=None,
):
    '''Implements Exponential Backoff for failed requests due to ratelimit or other failures'''
    session = session or requests.Session()
    retry = Retry(
        total=retries,
        read=retries,
        connect=retries,
        backoff_factor=backoff_factor,
        status_forcelist=status_forcelist,
    )
    adapter = HTTPAdapter(max_retries=retry)
    session.mount('http://', adapter)
    session.mount('https://', adapter)
    return session


def GameDetailsById(id):
    '''Takes bgg ID and returns boardgame image (and other details in future)

    This also exists as a separate API endpoint in the Amplify functions. Merge in future.
    '''

    try:
        response = requests_retry_session().get(
            BASE_URL+"/thing?id="+str(id), timeout=1)
        tree2 = ET.fromstring(response.content)

        x = '{"boardgame":"'+str(id)+'"}'

        jsonreply = json.loads(x)

        for child in tree2[0]:
            if child.tag == 'thumbnail':
                childresponse = {child.tag: child.text}
                jsonreply.update(childresponse)
            elif child.tag == 'image':
                childresponse = {child.tag: child.text}
                jsonreply.update(childresponse)

        return jsonreply
    except Exception as e:
        print(e)
        return None, {'error': traceback.format_exc(), 'func': 'GameDetailsById'}


def GameListGen(partialname):
    '''Generates a shortlist of games from a partial name of a board game.

    This appears to fail when  'partialname' is <~6 characters.
    Also, there appears to be a max of around 32 entries returned.
    ¯\_(ツ)_/¯ 
    '''

    try:
        responsename = requests_retry_session().get(
            BASE_URL+"/search?query="+partialname+"&type=boardgame",
            timeout=1)
        tree = ET.fromstring(responsename.content)

        gamelist = []

        # Due to convertion from XML iteration through nested valued is required.
        # First level has the ID, second level has the name.
        for child in tree:
            for item in child:
                if item.tag == 'name':
                    # get the name from XML and transform into Json
                    gamename = json.dumps(item.attrib)
                    gamevalue = json.loads(gamename)

                    # get the ID from previous level and format into Json
                    gameid = json.dumps(child.attrib)
                    gameidvalue = json.loads(gameid)

                    thumb = json.dumps(GameDetailsById(gameidvalue['id']))
                    thumbvalue = json.loads(thumb)

                    formatted_game = {
                        'name': str(gamevalue['value']),
                        'id': str(gameidvalue['id']),
                    }

                    # Sometimes thumbvalue['image'] key doesn't exist
                    try:
                        formatted_game['image'] = str(thumbvalue['image'])
                    except:
                        pass

                    gamelist.append(formatted_game)

        return gamelist, None
    except Exception as e:
        print(e)
        return None, {'error': traceback.format_exc(), 'func': 'GameListGen'}


def handler(event, context):
    print('received event:')
    print(event)

    game_list, err = GameListGen(partialname=event['board_game_name'])
    if err:
        return {
            'statusCode': 500,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': err
        }
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': {'games': game_list}
    }
