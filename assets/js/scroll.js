$(function () { // wait for document ready
  // init controller
  var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

  // build scenes
  new ScrollMagic.Scene({triggerElement: "#parallax1"})
          .setTween("#parallax1 > div", {y: "60%", ease: Linear.easeNone})
          .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#parallax2"})
          .setTween("#parallax2 > div", {y: "15%", ease: Linear.easeNone})
          .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#parallax3"})
          .setTween("#parallax3 > div", {y: "80%", ease: Linear.easeNone})
          .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#parallax4"})
          .setTween("#parallax4 > div", {y: "80%", ease: Linear.easeNone})
          .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#parallax5"})
          .setTween("#parallax5 > div", {y: "80%", ease: Linear.easeNone})
          .addTo(controller);
});