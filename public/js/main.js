$(function(){
    let menubtn = $('#open-menu'),
    responsivemenu = $('#responsive-menu');

    let logo = $('.header .logo'), nav =$('.header .nav');

    let responsivemenuHtml = `<a href="#" id="close-menu" class="close-menu-btn"><i id="menuclose2" class="fa fa-times"></i></a>
    <div class='logo'>${logo.html()}</div>
    <div class='menu'>${nav.html()}</div>
    `;

    let menuclose = $('#close-menu');
    responsivemenu.html(responsivemenuHtml);

    $('#close-menu').on('click', e => {
        responsivemenu.removeClass('active');
        e.preventDefault();
    });
    menubtn.on('click', e => {
        responsivemenu.addClass('active');
        e.preventDefault();
    });

    
}); 

$(document).ready(function () {
    //initialize swiper when document ready
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
        },
      });
  });