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
		$httpProvider.defaults.timeout = 1000;

		$httpProvider.defaults.headers.put['Content-Type'] = 'application/xml; charset=utf-8';
		$httpProvider.defaults.headers.post['Content-Type'] = 'application/xml; charset=utf-8';
		// $httpProvider.defaults.headers.put['Content-Type'] = 'application/json; charset=utf-8';
		// $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
		$httpProvider.defaults.headers.put['Accept'] = 'application/xml; charset=utf-8';
		$httpProvider.defaults.headers.post['Accept'] = 'application/xml; charset=utf-8';
		// $httpProvider.defaults.headers.options['Content-Type'] = 'application/xml; charset=utf-8';

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
