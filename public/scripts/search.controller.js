
app.controller('SearchController', ['$http', 'Spotify', function($http, Spotify) {
  const self = this;
  console.log("Search Controller Running");

  let artists = {};
  let photos = [];
  let urls = [];

  Spotify.search('Nirvana', 'artist').then(function (data) {
  artists = data.artists.items;
  console.log('artists: ', artists);
      photos = artists[0].images
      photos.forEach(function(url){
        urls.push(url.url);
        console.log('url: ', url);
      })

      // console.log('photos ', photos);

    });
    // photos.forEach(function(link){
    //   urls.push = link.url;
    //   console.log(urls);
    // })
  // photos = data.artists.items.images.url;
// });

// photos.forEach(function(link){
//   urls.push = link.url;
//   console.log(urls);
// })
// });


}]);
