const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
  const menuBody = document.querySelector('.menu__body');
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('lock')
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
  });
}

$(document).ready(function(){
   $('.main__slider-wrap').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:  '<img class="catalog__arrows-left" src="/images/prev-arr.svg">',
    nextArrow:  '<img class="catalog__arrows-right" src="/images/next-arr.svg">',
  });

$(document).scroll(function(e) {
   $(window).scrollTop() > 100 ? $('.header').addClass('nav__color') : $('.header').removeClass('nav__color');
});

/*
  $('.cifr__item-title').spincrement({
    thousandSeparator: "",
    duration: 1200
});*/
  
  var show = true;
    var countbox = ".cifr__item-title";
    $(window).on("scroll load resize", function () {
        if (!show) return false; 
        var w_top = $(window).scrollTop(); 
        var e_top = $(countbox).offset().top; 
        var w_height = $(window).height(); 
        var d_height = $(document).height();
        var e_height = $(countbox).outerHeight(); 
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.cifr__item-title').css('opacity', '1');
            $('.cifr__item-title').spincrement({
                thousandSeparator: "",
                duration: 2500
            });
             
            show = false;
        }
    });


});