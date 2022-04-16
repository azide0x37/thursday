import json
import requests
import xml.etree.ElementTree as ET


BASE_URL = "https://boardgamegeek.com/xmlapi2"

def GameDetailsById(id):
    try:
#        responsename = requests.get(BASE_URL+"/search?query="+name+"&exact=1&type=boardgame")
#        tree = ET.fromstring(responsename.content)
#        id = json.dumps(tree[0].attrib)
#        idjson = json.loads(id)
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
    #      elif "'boardgameexpansion'" in str(child.attrib):
    #          childresponse = {'expansions': str(child.attrib)}
    #          jsonreply.update(childresponse)
    
        return jsonreply
    except:
        return "error"

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
      'body': GameDetailsById(id=event['board_game_id'])
  }

