
app.controller('SearchController', ['$http', 'Spotify', function($http, Spotify) {
  const self = this;
  console.log("Search Controller Running");

  self.artists = {};
  let artistId = {};
  let urls = [];

  self.clickMe = function () {
  Spotify.search('Nirvana', 'artist').then(function (data) {
  self.artists = data.artists.items;
  console.log('artists: ', self.artists);
      artistId.id = self.artists[0].id;
      console.log( artistId.id);
      self.secondFunction();


    });
  }

    // console.log('outside test', artistId.id);

self.secondFunction = function (){
  Spotify.getRelatedArtists(artistId.id).then(function (data) {
    console.log(data);
  });
}

}]);
