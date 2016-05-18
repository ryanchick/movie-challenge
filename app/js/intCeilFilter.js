(function(){
	angular
		.module('coderMdb')
		.filter('intCeilFilter', intCeilFilter);
		
	function intCeilFilter() {
	   return function(num) {
	   		//write your filter here
	        return Math.ceil(num)
	    };
	};
})();
