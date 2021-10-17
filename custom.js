$(window).scroll(function () {
  let len = $(window).scrollTop();
  //console.log(len);
  //let dimension = $(".image").width();
  //console.log(dimension);
  //console.log(dimension);
  let dimension = $(".image").outerHeight();
  //console.log(dimension);
  if (len >= dimension) {
    $(".menu").addClass("fixed").slideDown(1000);
  } else {
    $(".menu").removeClass("fixed");
    $(".menu").removeAttr("style");
  }
});
