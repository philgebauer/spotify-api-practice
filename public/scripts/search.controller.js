app.controller('SearchController', ['$http', function($http) {
  const self = this;
  console.log("Admin Controller Running");

  self.query = '';

self.submit = function (){
  console.log('query is' + self.query);

}

}]);
