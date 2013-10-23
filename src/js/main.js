require.config({
	baseUrl : 'js',
	paths : {
		'angular' : '//ajax.googleapis.com/ajax/libs/angularjs/1.0.8/angular.min'
	},
	shim : {
		'angular' : {'exports' : 'angular'}
	}
});

require(['angular', 'routes/appRoutes'], function(angular){
	angular.bootstrap(document, ['app']);
});