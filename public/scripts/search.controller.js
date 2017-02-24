
app.controller('SearchController', ['$http', 'Spotify', function($http, Spotify) {
  const self = this;
  console.log("Search Controller Running");

  var finishedQuery;
  var returnedStuff;


// self.call = function () {
//   $http.get(finishedQuery)
//   .then(function(response) {
//       console.log(response.data);
//   });
// }
//
//
//
// fetch(finishedQuery)
// .then((resp) => resp.json())
// .then(function(data) {
//     return returnedStuff = response.data;
//     console.log(returnedStuff);
//     console.log(data);
//     console.log(response.data);
//
//   })
//
// .catch(function(error) {
//   // If there is any error you will catch them here
// });
//
// self.submit = function (query) {
//     finishedQuery = 'https://api.spotify.com/v1/search' + '?q=' + query + '&type=album';
//     console.log('finishedQuery ', finishedQuery);
//     console.log(returnedStuff);
//
//
//
//   };

  Spotify.search('Nirvana', 'artist').then(function (data) {
  console.log(data);
  });



  //
  // self.call = function () {
  //     $http({
  //         method: 'GET',
  //         url: finishedQuery
  //
  //         },
  //         success: function (response) {
  //           console.log(resonse);
  //             let j = resonse.data;
  //             console.log(response);
  //         }
  //     });
  // };
}]);
