(function(){

	var app = angular.module('playersApp',[]);

	app.controller('MyController',['$http',function($http){
		var store = this;
		this.players = [];

		var promise = $http({
			method : 'GET',
			url : 'js/players.json'
		});

		promise.success(function(data){
			store.players = data;

		});

	}]
	);

	app.controller('playerDetail',['$scope','$routeParams','$http',function($scope,$routeParams,$http){
		$scope.name = $routeParams.playerShort_name;

		$http.get('js/'+$scope.name+'.json').success(function(data){

		$http.get('js/players/'+$scope.name+'.json').success(function(data){

			$scope.player = data;
		});
		//alert($scope.playerLong_name);
	}]);

	app.controller('ImageController',function($scope){
		$scope.current = 0;
		$scope.setCurrent = function(index)
		{
			$scope.current = index;
		}
	})

})();
