	var express = require('express');
	var router = express.Router();
	var moment = require('moment');
	var user= require('../data/user.json');
	var todos = require('../data/todos.json');

	/* GET users listing. */
	router.get('/', function(req, res, next) {
	  res.send('should return all users but not added. ');
	});


router.get('/:user_id',function(req,res){
	var user_array=user.user;
	var todos_array = todos.todos;
	var selected_user;
	var selected_todos=[];
	for(var i=0; i<user_array.length ; i++){
		if(user_array[i].id === req.params.user_id){
			selected_user = user_array[i];
			break;
		}
	}
	if(typeof selected_user !== 'undefined'){
		for(var i=0; i < todos_array.length ; i++){
		if(todos_array[i].user_id === selected_user.id && todos_array[i].done === false){
			selected_todos.push(todos_array[i]);
			}
		}
	}
	var response={};
	response.user= selected_user;
	response.todos= selected_todos;
	res.send(JSON.stringify(response));
	});

	router.get('/active',function(req,res){
		var user_array=user.user;
		var todos_array = todos.todos;
		var response={};
		var active_users=[];
		for(var i=0; i<user_array.length ; i++){
			if(user_array[i].isActive){
				active_users.push(user_array[i]);
			}
		}
		response.active_users=active_users;
		for(var i=0;i < active_users.length; i++){
			var user_todos=[];
			for(var j=0; j < todos_array.length ; j++){
				if(active_users[i].id == todos_array[j].user_id){
					user_todos.push(todos_array[j]);
				}
			}
			response.active_users[i].user_todos = user_todos;
		}
		res.send(JSON.stringify(response));
	});
	
module.exports = router;
