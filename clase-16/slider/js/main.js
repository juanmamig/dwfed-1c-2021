$(document).ready(function(){
  $('.your-class').slick(
    {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true
    }
  );
});

$('.miniatura-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.miniatura-slider-nav'
});
$('.miniatura-slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.miniatura-slider',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});