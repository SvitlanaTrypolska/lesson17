$(function () {
  //tabs init
  $("#tabs").tabs();

  //slider init
  $('.slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    swipeToSlide: true,
    centerMode: true,
  });

  // Dialog initialization
  const dialog = $("#dialog-form").dialog({
    autoOpen: false,
    height: 400,
    width: 350,
    modal: true,
  });

  // Open modal
  $(".open-modal").click(function () {
    $("#dialog-form").dialog("open");  
  });
});

