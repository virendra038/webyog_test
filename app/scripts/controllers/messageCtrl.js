'use strict';

angular.module('webyogApp')
  .controller('messageCtrl', function ($scope,service,$state,$rootScope) {

  		service.getMessages()
  			.then(function(response){
            $scope.data = response;
  			},function(error){
  				alert("some error occured");
  			})

  			$scope.msg = function(x){
            $scope.x = x;
            $rootScope.id = x.id;
            // console.log($scope.id); 
            service.getMessage($scope.x)
              .then(function(response){
                $scope.msgg1 = response.subject;
                $scope.msgg2 = response.body;
                document.getElementById('q1').innerHTML = $scope.msgg1;
                 document.getElementById('q2').innerHTML = $scope.msgg2;
              },function(error){
                console.log('error2');
              })
        }

        

        $scope.del = function(){
          console.log($scope.id); 
          service.delete($rootScope.id)
        .then(function(response){
            $state.go('messages');
        },function(error){
          alert("some error occured");
        })

        }
  });
