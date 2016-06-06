$.ajax({
  url: "students/",
})
  .done(function( data ) {
    if ( console && console.log ) {
      getStudents(data);
    }
});
function getArtistDescription(artistName, bio) {
    var description = '';
    if('' == bio){
      return artistName;
    } else {
      return bio;
    }
}

function getStudents(artistsString) {
  var artistsJson = JSON.parse(artistsString);
  var artistsNames = Object.keys(artistsJson);
  var artists = '<div class="artists-images">';
  for (var i = 0; i < artistsNames.length; i++) {
    artists += '<div class="artist">'+
          '<a href="artistImage?artist='+artistsNames[i]+'" data-lightbox="artists" data-title="'+getArtistDescription(artistsNames[i], artistsJson[artistsNames[i]])+'">'+
          '<img src="artistImage?artist='+artistsNames[i]+'" alt="'+artistsNames[i]+'"/></a>'+
          '<div class="subtitle">'+artistsNames[i]+'</div>'+
          '</div>';
  }
  artists += '</div>';
  $('.student').append(artists);
}