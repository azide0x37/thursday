import json
import requests
import xml.etree.ElementTree as ET

BASE_URL = "https://boardgamegeek.com/xmlapi2"

def gameid(name):
    try:
        responsename = requests.get(BASE_URL+"/search?query="+name+"&exact=1&type=boardgame")
        tree = ET.fromstring(responsename.content)
        id = json.dumps(tree[0].attrib)
        idjson = json.loads(id)
        responsedata = requests.get(BASE_URL+"/thing?id="+idjson['id'])
        tree2 = ET.fromstring(responsedata.content)
        
        x = '{"boardgame":"'+idjson['id']+'"}'
        jsonreply = json.loads(x)


        for child in tree2[0]:
            if child.tag == 'thumbnail':
                childresponse = {child.tag:child.text}
                jsonreply.update(childresponse) 
            elif child.tag == 'image':
                childresponse = {child.tag:child.text}
                jsonreply.update(childresponse) 
    #      elif "'boardgameexpansion'" in str(child.attrib):
    #          childresponse = {'expansions': str(child.attrib)}
    #          jsonreply.update(childresponse)
    
        return jsonreply
    except:
        responsename = requests.get(BASE_URL+"/search?query="+name+"&type=boardgame")
        tree = ET.fromstring(responsename.content)
        x = '{}'
        y = 0
        namejson = json.loads(x)
        for child in tree:
            for item in child:
                if item.tag == 'name':
                    gamename = json.dumps(item.attrib)
                    gamevalue = json.loads(gamename)
                    formated = {"name"+str(y):str(gamevalue['value'])}
                    namejson.update(formated)
                    y = y+1
        return namejson


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
      'body': gameid(name=event['board_game_title'])
  }
