import json
import requests
import xml.etree.ElementTree as ET
import time


BASE_URL = "https://boardgamegeek.com/xmlapi2"

def GameDetailsById(id):
    try:

        response = requests.get(BASE_URL+"/thing?id="+str(id))
        tree2 = ET.fromstring(response.content)
        
        x = '{"boardgame":"'+str(id)+'"}'
        jsonreply = json.loads(x)


        for child in tree2[0]:
            if child.tag == 'thumbnail':
                childresponse = {child.tag:child.text}
                jsonreply.update(childresponse) 
            elif child.tag == 'image':
                childresponse = {child.tag:child.text}
                jsonreply.update(childresponse) 
        return jsonreply
    except:
        return "error, could not find the game details"


def GameListGen(partialname):
    try:
        responsename = requests.get(BASE_URL+"/search?query="+partialname+"&type=boardgame")
        tree = ET.fromstring(responsename.content)
        x = '{}'
        y = 0
        namejson = json.loads(x)
        # Due to convertion from XML iteration through nested valued is required. First level has the ID, second level has the name.
        for child in tree:
            for item in child:
                if item.tag == 'name':
                    # get the name from XML and transform into Json
                    gamename = json.dumps(item.attrib)
                    gamevalue = json.loads(gamename)
                    # get the ID from previos level and format into Json
                    gameid = json.dumps(child.attrib)
                    gameidvalue = json.loads(gameid)
                    thumb = json.dumps(GameDetailsById(gameidvalue['id']))
                    thumbvalue = json.loads(thumb)
                    formated = {"game"+str(y):{'name':str(gamevalue['value']), 'id':str(gameidvalue['id']), 'image': str(thumbvalue['image'])}}
            namejson.update(formated)                    
            y = y+1
        return json.dumps(namejson)
    except:
        return "error, could not populate the list"

def ColectionByUser(bgguser, max_tries=5):
    try:    
        # BGG API has doesn't directly give you the collection, it will accept the request and make it ready on a second attempt.
        for i in range(max_tries):
            response = requests.get(BASE_URL+"/collection?username="+str(bgguser))
            if response.status_code == 202:
                time.sleep(1.0)
                continue
            else:
                tree = ET.fromstring(response.content)
                break
        #Begin looking into the xml
        x = '{}'
        y = 0
        jsonite = json.loads(x)
        for child in tree:
            for item in child:
                if item.tag == 'name':
                    gamename = json.dumps(item.text)
                    gametext = json.loads(gamename)

                    gameid = json.dumps(child.attrib)
                    gameidvalue = json.loads(gameid)
                elif item.tag == 'image':
                    gameimage = json.dumps(item.text)
                    gameimageurl = json.loads(gameimage)
            formated = {"game"+str(y):{"name":str(gametext), "id":str(gameidvalue['objectid']), "image":str(gameimageurl)}}
            jsonite.update(formated)
            y = y+1
        return json.dumps(jsonite)

    except:
        return "error retrieving the collection"


            




def handler(event, context):
  print('received event:')
  print(event)
  
  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': GameListGen(partialname=event['board_game_name'])
  }

if __name__ == '__main__':
#    print(GameListGen('Terraforming'))
#    print(GameDetailsById('307807'))
    print(ColectionByUser(''))