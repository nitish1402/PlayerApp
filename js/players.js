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

	app.config(['$httpProvider', function($httpProvider) {
		$httpProvider.defaults.useXDomain = true;
		$httpProvider.defaults.withCredentials = true;
		delete $httpProvider.defaults.headers.common["X-Requested-With"];
		$httpProvider.defaults.headers.common["Accept"] = "application/json";
		$httpProvider.defaults.headers.common["Content-Type"] = "application/json";

	}]);

	app.controller('playerDetail',['$scope','$routeParams','$http',function($scope,$routeParams,$http){
		$scope.name = $routeParams.player_name;
		console.log($routeParams);

		var url = 'http://en.wikipedia.org/w/api.php?format=json&action=query&titles='+$routeParams.player_name+'&prop=revisions&rvprop=content';
		console.log(url);

		$http.get(url).success(function(data){

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
