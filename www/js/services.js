angular.module('app.services', [])


.service('AuthService', function($localStorage, $http) {
	return {
		login : function(email, password) {
			$http.post('http:/api.dev/login',{email:email,password:password})
				.then(function(){
					// on success
				})
				.then(function(){
					// on fail login
				})
		},
		logout : function() {

		},
		register : function() {

		}
	}
})

.service('BuffetRamadhanService', function(){
	return {
		today : function() {
			// return buffet promotion for today
			$http.get('http://api.buffetramadhan.com/today');
		},
		thisWeek : function() {
			// return all available buffet for current week
		}
	}
})

// Syntax for service
.service('ServiceName',function(){
	return {
		name : function() {

		}
	}
})


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
			console.log(tuntutan);
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
		delete : function(id) {

			var confirmPopup = $ionicPopup.confirm({
		     title: 'Delete Claim',
		     template: 'Are you sure you want to delete this claim?'
		   	});

		   	confirmPopup.then(function(res) {
			    if(res) {
			       	var index = $localStorage.senarai.indexOf(id);
			       	
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

