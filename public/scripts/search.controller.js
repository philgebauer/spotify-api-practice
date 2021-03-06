
app.controller('SearchController', ['$http', 'Spotify', function($http, Spotify) {
  const self = this;
  console.log("Search Controller Running");

  self.artists = {};
  let artistId = {};
  let urls = [];
  var related = {}
  var relatedInfo = {};
  self.relatedArtists = [];

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
      self.relatedArtists.push({
      'id' : info.id,
      'name' : info.name,
      'href' : info.href,
      'followers' : info.followers.total,
      'image' : info.images[1].url,
      'uri' : info.uri
    });
    console.table(self.relatedArtists);

    })
  });

} 

}]);
