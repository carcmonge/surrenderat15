var app = angular.module('gg', []);

app.controller('champsCtrl', function($scope, $http) {
	$http.get("https://global.api.riotgames.com/api/lol/static-data/LAN/v1.2/champion?champData=image&dataById=true&api_key=5c22ff03-1a51-4b08-a947-25112c1f8eb5")
	.then(function(response) {
		$scope.champs = response.data;
	});
});