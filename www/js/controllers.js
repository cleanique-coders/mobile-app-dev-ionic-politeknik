angular.module('app.controllers', [])

// controller(controller name, closure)
// closure
/*
	function() {
	
	}
*/
// .controller('nameCtrl',function(){

// });
.run(function($rootScope, $localStorage){

	// bind to localStorage to rootScope
	$rootScope.$storage = $localStorage;

	if($rootScope.$storage.senarai == undefined) {
		$rootScope.$storage.senarai = [];	
	}
	
	// $rootScope.$storage.senarai = [
	// 	{
	// 		id:1,
	// 		name:'Tuntutan Satu',
	// 		description:'Tuntutan berkenaan....',
	// 		amount: 25.50,
	// 		photo: 'receipt-thumbnail.png'
	// 	},
	// 	{
	// 		id:2,
	// 		name:'Tuntutan Dua',
	// 		description:'Tuntutan berkenaan....',
	// 		amount: 3.50,
	// 		photo: 'receipt-thumbnail.png'
	// 	},
	// 	{
	// 		id:3,
	// 		name:'Tuntutan Tiga',
	// 		description:'Tuntutan berkenaan....',
	// 		amount: 3.50,
	// 		photo: 'receipt-thumbnail.png'
	// 	}
	// ];
	//$localStorage.senarai = $rootScope.senarai;
})

.controller('tuntutanCtrl', function($scope) {

	// $scope.title = 'new title';

	// test change

})
   
.controller('tambahTuntutanCtrl', function($scope, $state) {

	$scope.add = function() {
		console.log($scope.tuntutan);

		// save the tuntutan at the top of the list
		$scope.$storage.senarai.unshift($scope.tuntutan);

		var index = $scope.$storage.senarai.indexOf($scope.tuntutan);

		if(index != -1) {
			$scope.tuntutan.id = index + 1; // generate id
			$scope.$storage.senarai[index] = $scope.tuntutan;
		}
		
		// navigation to a particular page
		// in this case, we go to tuntutan page
		$state.go('tuntutan');
	}

})
   
.controller('kemaskiniTuntutanCtrl', function($scope, $stateParams) {
	$scope.tuntutan = $scope.$storage.senarai.reduce(function(carry, tuntutan){
        if(tuntutan.id == $stateParams.id)
            carry = tuntutan;
        return carry;
    }, {});

    $scope.tuntutan_ori = $scope.tuntutan;

    $scope.update = function() {
    	var index = $scope.$storage.senarai.indexOf($scope.tuntutan_ori);

    	if(index != -1) {
    		$scope.$storage.senarai[index] = $scope.tuntutan;
    	}
    }
})
   
.controller('perinciTuntutanCtrl', function($scope, $stateParams) {
	// $stateParams
		// access to parameters passed to the controller
		// parameters configured in js/route.js

	// Search function 
		// to search the record based on id given
		// can be replace with calling API
		// to get informations
	$scope.tuntutan = $scope.$storage.senarai.reduce(function(carry, tuntutan){
        if(tuntutan.id == $stateParams.id)
            carry = tuntutan;
        return carry;
    }, {});
})
 