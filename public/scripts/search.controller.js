
app.controller('SearchController', ['$http', 'Spotify', function($http, Spotify) {
  const self = this;
  console.log("Search Controller Running");

  self.artists = {};
  let artistId = {};
  let urls = [];
  var related = {}
  var relatedInfo = {};
  var relatedArtists = [];

  self.clickMe = function (search) {
  Spotify.search(search, 'artist').then(function (data) {
  self.artists = data.artists.items;
  console.log('artists: ', self.artists);
      artistId.id = self.artists[0].id;
      console.log( artistId.id);
      self.secondFunction();


    });
  }

    // console.log('outside test', artistId.id);

self.secondFunction = function (){
  relatedArtists = [];
  Spotify.getRelatedArtists(artistId.id).then(function (data) {
    console.log(data);
    related = data.artists;
    console.log('related ', related);
    related.forEach(function(info){
      relatedArtists.push({
      'id' : info.id,
      'name' : info.name,
      'href' : info.href
    });
    console.table(relatedArtists);

    })
  });

} 

}]);
