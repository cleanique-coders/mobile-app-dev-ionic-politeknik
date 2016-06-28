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

	$rootScope.$storage.senarai = [
		{
			id:1,
			name:'Tuntutan Satu',
			description:'Tuntutan berkenaan....',
			amount: 25.50,
			photo: 'receipt-thumbnail.png'
		},
		{
			id:2,
			name:'Tuntutan Dua',
			description:'Tuntutan berkenaan....',
			amount: 3.50,
			photo: 'receipt-thumbnail.png'
		},
		{
			id:3,
			name:'Tuntutan Tiga',
			description:'Tuntutan berkenaan....',
			amount: 3.50,
			photo: 'receipt-thumbnail.png'
		}
	];
	//$localStorage.senarai = $rootScope.senarai;
})

.controller('tuntutanCtrl', function($scope) {

	// $scope.title = 'new title';

	// test change

})
   
.controller('tambahTuntutanCtrl', function($scope) {

})
   
.controller('kemaskiniTuntutanCtrl', function($scope, $stateParams) {
	$scope.tuntutan = $scope.$storage.senarai.reduce(function(carry, tuntutan){
        if(tuntutan.id == $stateParams.id)
            carry = tuntutan;
        return carry;
    }, {});
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
 