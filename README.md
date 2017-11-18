# intellect_node_app
# Autho - Khajaamin Attar

INTALL and start with below commands 

 git clone https://github.com/khajaamin/intellect_node_app.git 
 
 npm install 
 
 
 npm start   // this will create server and execute express app
 
 
 npm test  //  to test api   (added test for only 2 api ) 
 
 
 
 API DOC 
 
 
 REQUEST AND RESPONSE AS BELOW 
 
 * Get Userdetails (for a given userid)  and related active todos
 http://localhost:3000/api/users/2
 
 {"user":{"id":"2","first_name":"khajaamin","last_name":"attar","email":"khajaamin@gmail.com","pinCode":411041,"birthdate":"02-DEC-1988","is_active":true},"todos":[{"id":"2","user_id":"2","text":"Convert into HTML","done":false,"target_date":"17-NOV-2017"},{"id":"3","user_id":"2","text":"Add angular and events","done":false,"target_date":"20-NOV-2017"},{"id":"4","user_id":"2","text":"Api Integrations","done":false,"target_date":"19-NOV-2017"},{"id":"5","user_id":"2","text":"Api testing","done":false,"target_date":"19-NOV-2017"},{"id":"6","user_id":"2","text":"Api Integrations","done":false,"target_date":"19-NOV-2017"},{"id":"7","user_id":"2","text":"Api Integrations","done":false,"target_date":"19-NOV-2017"},{"id":"10","user_id":"2","text":"Api Integrations","done":false,"target_date":"19-NOV-2017"}]}
 
 
 
 * for specified user (for a given user id ) get active todos which has targetdate as today or tommorow 
 http://localhost:3000/api/todos/hot/2 
 
 {"user_id":"2","hot_items":[{"id":"3","user_id":"2","text":"Add angular and events","done":false,"target_date":"20-NOV-2017"},{"id":"4","user_id":"2","text":"Api  Integrations","done":false,"target_date":"19-NOV-2017"},{"id":"5","user_id":"2","text":"Api  testing","done":false,"target_date":"19-NOV-2017"},{"id":"6","user_id":"2","text":"Api  Integrations","done":false,"target_date":"19-NOV-2017"},{"id":"7","user_id":"2","text":"Api  Integrations","done":false,"target_date":"19-NOV-2017"},{"id":"10","user_id":"2","text":"Api  Integrations","done":false,"target_date":"19-NOV-2017"}]}
 
 
 
 * get a todo item bases on  its id 
 http://localhost:3000/api/todos/2
 
 {"id":"2","user_id":"2","text":"Convert into HTML","done":false,"target_date":"17-NOV-2017"}
 
 
 * get all active user and related todo itmes 
 http://localhost:3000/api/users/active
 
{"todos":[]} 

JFI -  this is not complted and this will be fail in our automated test result. 


Thank you




 
 
 
 
 
 
 
 
 
