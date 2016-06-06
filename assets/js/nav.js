function adjustNav () {
  if ( $(window).width() < 1024 ) {
    $hoverNav = false;
    $(".hover-hide").show();
  } else {
    $hoverNav = true;
    $(".hover-hide").hide();
  }
}

// Initilize global value, hoverNav
$hoverNav = true;
adjustNav();

$(window).resize(adjustNav);

$(".nav-button").mouseenter( function () {
  if ($hoverNav) {
    $(this).parent().next().next().show();
  }
}).mouseleave( function () {
  if ($hoverNav) {
    $(this).parent().next().next().hide();
  }
});