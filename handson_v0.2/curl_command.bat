curl -i -X POST -H "'Content-type':'application/json', 'Accept': 'application/json', 'e_DISiAJEY4IdwopGOjmDg':'SXuVEJtkqDqWL_DnPHOx0Q'" -d "json_data={'field_9':'6XoW','field_10':'DZog','field_11':'User comments.'}" https://jinshuju.net/api/v1/forms/jfRMgA
>>>Handshake done, header format not parsable

#trial2
curl -i -X POST -H "Content-type:application/json, Accept: application/json, e_DISiAJEY4IdwopGOjmDg:SXuVEJtkqDqWL_DnPHOx0Q" -d "{'field_9':'6XoW','field_10':'DZog','field_11':'User comments.'}" https://jinshuju.net/api/v1/forms/jfRMgA -v
>>>header setting correct, data (64) sent, response bad request 400

#try to isolation user part
curl -i -X POST -H "Content-type:application/json, Accept: application/json" -u e_DISiAJEY4IdwopGOjmDg:SXuVEJtkqDqWL_DnPHOx0Q -d "{'field_9':'6XoW','field_10':'DZog','field_11':'User comments.'}" https://jinshuju.net/api/v1/forms/jfRMgA -v
>>user auth, but still 400

#add json_data to data
curl -i -X POST -H "Content-type:application/json, Accept: application/json" -u e_DISiAJEY4IdwopGOjmDg:SXuVEJtkqDqWL_DnPHOx0Q -d "json_data={'field_9':'6XoW','field_10':'DZog','field_11':'User comments.'}" https://jinshuju.net/api/v1/forms/jfRMgA -v
>>same as before, response but 400

#try to verbose a successful get request
curl -i -X GET -u e_DISiAJEY4IdwopGOjmDg:SXuVEJtkqDqWL_DnPHOx0Q https://jinshuju.net/api/v1/forms/jfRMgA -v
>>>success, handshake and header are same but the response differs
>>>search for reason of nginx 400 status, it follows w3c description that http header doesnt contain valid host 
>>10.4.1 400 Bad Request:
>>The request could not be understood by the server due to malformed syntax. The client SHOULD NOT repeat the request without modifications.

#adjust json data with list and add charset
curl -i -X POST -H "Content-type:application/json, Accept: application/json, charset:utf-8" -u e_DISiAJEY4IdwopGOjmDg:SXuVEJtkqDqWL_DnPHOx0Q -d "json_data={'field_9':'6XoW','field_10':['DZog'],'field_11':'User comments.'}" https://jinshuju.net/api/v1/forms/jfRMgA -v
>>>same, 400, cannot get response from jin(even the json error response)

=============IMPORTANT MARK!==================
#try to empty the json data to get jin's json error response
curl -i -X POST -H "Content-type:application/json, Accept: application/json, charset:utf-8" -u e_DISiAJEY4IdwopGOjmDg:SXuVEJtkqDqWL_DnPHOx0Q  https://jinshuju.net/api/v1/forms/jfRMgA -v
>>>successfully get 201, the response will contain a json msg saying the create form json format

#try to add the field_11 values
curl -i -X POST -H "Content-type:application/json, Accept: application/json, charset:utf-8" -u e_DISiAJEY4IdwopGOjmDg:SXuVEJtkqDqWL_DnPHOx0Q -d "{\"field_11\":\"User comments.\"}" https://jinshuju.net/api/v1/forms/jfRMgA -v
>>>success! 201, the reason cannot submit is the \" character

#try to add all 3 field values
curl -i -X POST -H "Content-type:application/json, Accept: application/json, charset:utf-8" -u e_DISiAJEY4IdwopGOjmDg:SXuVEJtkqDqWL_DnPHOx0Q -d "{\"field_9\":\"6XoW\",\"field_10\":[\"DZog\"], \"field_11\":\"User comments.\"}" https://jinshuju.net/api/v1/forms/jfRMgA -v
>>>201;)









