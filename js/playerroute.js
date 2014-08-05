(function(){

	var playerRoute = angular.module('playerRoute',['ngRoute','playersApp']);

	playerRoute.config(['$routeProvider',function($routeProvider){
		$routeProvider.
		when('/players',{
			templateUrl : 'playerview.html',
			controller : 'MyController',
			controllerAs : 'viewP'
		}).
		when('/players/:playerShort_name',{
			templateUrl : 'playerdetail.html',
			controller : 'playerDetail'

		}).
		otherwise({
          redirectTo: '/players'
        });

	}]);

})();
