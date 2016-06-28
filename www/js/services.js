angular.module('app.services', [])

.service('ClaimService',function($localStorage){
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
		delete : function() {
			var index = $localStorage.senarai.indexOf(ori);

	    	if(index != -1) {
	    		$localStorage.senarai.splice(index, 1);
	    	}
		}
	}
})

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);

