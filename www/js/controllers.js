angular.module('app.controllers', [])

.run(function($rootScope, $localStorage, ClaimService){
	ClaimService.initialize();

	$rootScope.$storage = $localStorage;
})

.controller('tuntutanCtrl', function($scope) {

})
   
.controller('tambahTuntutanCtrl', function($scope, $state, ClaimService) {
	$scope.add = function() {
		ClaimService.add($scope.tuntutan);
		$state.go('tuntutan');
	}
})
   
.controller('kemaskiniTuntutanCtrl', function($scope, $stateParams, ClaimService) {
	$scope.tuntutan = ClaimService.getClaimById($stateParams.id);
    $scope.tuntutan_ori = $scope.tuntutan;

    $scope.update = function() {
    	ClaimService.update($scope.tuntutan_ori, $scope.tuntutan);
    }
})
   
.controller('perinciTuntutanCtrl', function($scope, $stateParams, ClaimService) {
	$scope.tuntutan = ClaimService.getClaimById($stateParams.id);
})