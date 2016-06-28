angular.module('app.services', [])

// Syntax for service
.service('ServiceName',function(){
	return {
		name : function() {

		}
	}
})

// Authentication Service
.service('AuthService', function($localStorage, $http) {
	return {
		login : function(email, password) {
			
		},
		logout : function() {

		},
		register : function() {

		}
	}
})

// Claim Service
.service('ClaimService',function($localStorage, $ionicPopup, $state){
	return {
		initialize : function() {
			if($localStorage.senarai == undefined) {
				$localStorage.senarai = [];	
			}
		},
		getClaims : function() {
			return $localStorage.senarai;
		},
		getClaimById : function(id) {
			return $localStorage.senarai.reduce(function(carry, tuntutan){
		        if(tuntutan.id == id)
		            carry = tuntutan;
		        return carry;
		    }, {});
		},
		add : function(tuntutan) {
			$localStorage.senarai.unshift(tuntutan);

			var index = $localStorage.senarai.indexOf(tuntutan);

			// need better way to generate id
			var id = $localStorage.senarai.length;

			if(index != -1) {
				tuntutan.id = id; // generate id
				$localStorage.senarai[index] = tuntutan;
			}

			delete tuntutan;
		},
		update : function(ori, tuntutan) {
			var index = $localStorage.senarai.indexOf(ori);

	    	if(index != -1) {
	    		$localStorage.senarai[index] = tuntutan;
	    	}
		},
		delete : function(tuntutan) {

			var confirmPopup = $ionicPopup.confirm({
		     title: 'Delete Claim',
		     template: 'Are you sure you want to delete this claim?'
		   	});

		   	confirmPopup.then(function(res) {
			    if(res) {
			       	var index = $localStorage.senarai.indexOf(tuntutan);

			    	if(index != -1) {
			    		$localStorage.senarai.splice(index, 1);
			    		$state.go('tuntutan');
			    	}
			     }
			});
		}
	}
})

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);

