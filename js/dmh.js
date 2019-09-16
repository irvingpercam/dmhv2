$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: false,
    duration: 500
  });
setInterval(function(){
    $('.carousel').carousel('next');
}, 10000);