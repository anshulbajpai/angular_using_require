require.config({
	baseUrl : 'js',
	paths : {
		'angular' : '//ajax.googleapis.com/ajax/libs/angularjs/1.0.8/angular'
	},
	shim : {
		'angular' : {'exports' : 'angular'}
	}
});

require(['angular', 'jQuery', 'routes/appRoutes'], function(angular, $){
	angular.bootstrap(document, ['app']);
});