var Profile = require('../models/profile.js');
var Route = require('../models/route.js');

var passenger = {};

passenger.apply = function(req, res){
	var user_id = req.body.user_id 
	var route_id = req.body.route_id 

	var result = { 'success': false, 'msg': ''}

	if ( user_id == undefined || route_id == undefined  ){
		result.msg = 'Debe enviarse un user_id y un route_id'
		res.send(result);
	}

	Route.findById(route_id, function(error, data){
		if(error){
			result.msg = error.message
			res.send(result)
		}else{
			result.msg = "ruta encontrada"
			data.applications.push(user_id)
			data.save(function(error, data){
				if(error){
					result.msg = error.message
					res.send(result)
				}else{
					result.msg = "ok"
					result.success = true
					res.send(result)
				}
			})
			
			
		}

	})
}

passenger.add = function(req, res){
	var user_id = req.body.user_id 
	var route_id = req.body.route_id 

	var result = { 'success': false, 'msg': '', 'data': user_id}

	if ( user_id == undefined || route_id == undefined  ){
		result.msg = 'Debe enviarse un user_id y un route_id'
		res.send(result);
	}

	Route.findById(route_id, function(error, data){
		if(error){
			result.msg = error.message
			res.send(result)
		}else{
			//add to passengers
			data.passengers.push(user_id)
			//del of applications
			idx = data.applications.indexOf(user_id)
			if (idx > -1) data.applications.splice(idx, 1);

			data.save(function(error, data){
				if(error){
					result.msg = error.message
					res.send(result)
				}else{
					result.msg = "ok"
					result.success = true
					res.send(result)
				}
			})
			
			
		}

	})
}

passenger.del = function(req, res){
	var user_id = req.body.user_id 
	var route_id = req.body.route_id 

	var result = { 'success': false, 'msg': '', 'data': user_id}

	if ( user_id == undefined || route_id == undefined  ){
		result.msg = 'Debe enviarse un user_id y un route_id'
		res.send(result);
	}

	Route.findById(route_id, function(error, data){
		if(error){
			result.msg = error.message
			res.send(result)
		}else{
			

			data.save(function(error, data){
				if(error){
					result.msg = error.message
					res.send(result)
				}else{
					result.msg = "ok"
					result.success = true
					res.send(result)
				}
			})
			
			
		}

	})
}

module.exports = passenger;