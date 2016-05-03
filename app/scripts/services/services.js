'use strict';

angular.module('webyogApp')
    .service('service',function ($http,$q) {

	var URL =  'http://localhost:8088/api';
	var service = this;
	service.taskList = {};

	service.getMessages = function(){
         
		var defer = $q.defer();
    $http({
     method  : 'GET',
     url     : URL+'/message/',
     headers: {
        'Content-Type':'application/json'

    }
    })
    .success(function(response){
        defer.resolve(response);
    })
    .error(function(error){
      defer.reject(error);
    });

   return defer.promise;
	};

    service.getMessage = function(x){
         
        var deferl = $q.defer();
    $http({
     method  : 'GET',
     url     : URL+'/message/'+x.id,
     headers: {
        'Accept': 'application/json, text/plain, */*',

    }
    })
    .success(function(response){
        deferl.resolve(response);
    })
    .error(function(error){
      deferl.reject(error);
    });

   return deferl.promise;
    };

    service.delete = function(x){
         
        var deferdl = $q.defer();
    $http({
     method  : 'DELETE',
     url     : URL+'/message/'+x,
     headers: {
        'Accept': 'application/json, text/plain, */*',

    }
    })
    .success(function(response){
        deferdl.resolve(response);
    })
    .error(function(error){
      deferdl.reject(error);
    });

   return deferdl.promise;
    };


   
});