	var express = require('express');
	var router = express.Router();
	var moment = require('moment');
	var user= require('../data/user.json');
	var todos = require('../data/todos.json');

	/* GET users listing. */
	router.get('/', function(req, res, next) {
	  res.send('should return all todos but not now.');
	});

	router.get('/:id',function(req,res){
	var todos_array = todos.todos;
	for(var i=0; i < todos_array.length ; i++){
		if(todos_array[i].id === req.params.id){
			console.log('selected_todos11'+JSON.stringify(todos_array[i]));
			break;
		}
	}
	res.send(JSON.stringify(todos_array[i]));
	});
	
	
	router.get('/hot/:user_id',function(req,res){
	
	var user_array=user.user;
	var todos_array = todos.todos;
	var selected_user;
	var response={};
	for(var i=0; i < user_array.length; i++){
		if(user_array[i].id === req.params.user_id){
			selected_user = user_array[i];
			break;
		}
	}
	var hot_items = [];
	if(typeof selected_user !== 'undefined'){
		for(var i=0; i < todos_array.length ; i++){
		if(todos_array[i].user_id === selected_user.id && todos_array[i].done === false){
				var target_date = moment(new Date(todos_array[i].target_date));
				var current_date = moment(new Date());
				if(target_date.diff(current_date) > 0 && target_date.diff(current_date) < 172800000){
					hot_items.push(todos_array[i]);
				}
			}
		}
	}
	response.user_id = selected_user.id;
	response.hot_items = hot_items;
	res.send(response);
});

	
module.exports = router;
