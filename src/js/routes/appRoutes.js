define(['modules/app','controllers/appController'], function(app){
	app.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/',{
			templateUrl : 'partials/login.html'	
		}).
		when('/login', {
			controller : 'login',
			templateUrl : 'partials/hello.html'	
		});
	}]);
});