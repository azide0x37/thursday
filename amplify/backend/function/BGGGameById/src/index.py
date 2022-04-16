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
 #                   print(gameidvalue)
                    thumb = json.dumps(GameDetailsById(gameidvalue['id']))
                    thumbvalue = json.loads(thumb)
                    formated = {"game"+str(y):{'name':str(gamevalue['value']), 'id':str(gameidvalue['id']), 'image': str(thumbvalue['image'])}}
                    namejson.update(formated)                    
                    y = y+1
        return namejson
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
      'body': GameDetailsById(id=event['board_game_title'])
  }


###########Comment OUT when merging###################
# if __name__ == '__main__':
#    print(GameListGen('Terraforming Mars: ares'))