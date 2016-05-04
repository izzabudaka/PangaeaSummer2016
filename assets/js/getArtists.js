$.ajax({
  url: "/~Home/artists/",
})
  .done(function( data ) {
    if ( console && console.log ) {
      getArtists(data);
    }
});

function getArtists(artistsString){
  var artists = JSON.parse(artistsString);
  var artistsImages = "<div class='artists-images'>";
  var artistsNames = "<div class='artists-names'>"
  for (var i = 0; i < artists.length; i++) {   
    artistsImages += "<div>"+
                   '<img style="display:inline;" src="artistImage?artist='+artists[i]+'" height="400px" weight="400px">'
                   +"</div>";
    artistsNames += "<div>"+artists[i]+"</div>";
  }
  artistsImages += "</div>";
  artistsNames += "</div>";
  $('.lineup').append(artistsImages);
  $('.lineup').append(artistsNames);
  initialiseSlick();
}

function initialiseSlick(){
   $('.artists-images').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.artists-names'
  });
  $('.artists-names').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.artists-images',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
}