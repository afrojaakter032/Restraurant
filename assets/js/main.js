

// loader creating
window.addEventListener("load", function () {
    document.querySelector(".pre-loader").style.display = "none"
});

// menubar hide for mobaile device

document.querySelector('.menubar-icon').addEventListener('click', function(){
    document.querySelector('.navbar').classList.add('open');
    

});

document.querySelector('.menu-close-btn').addEventListener('click', function(){
    document.querySelector('.navbar').classList.remove('open');
});
const heroSwiper = new Swiper('.hero-swiper', {

    loop: true,
    autoplay: true,
    pagination: {
      el: document.querySelector('.hero-swiper .swiper-pagination'),
    },
    navigation: {
      nextEl: document.querySelector('.hero-swiper .swiper-button-next'),
      prevEl: document.querySelector('.hero-swiper .swiper-button-prev'),
    }
  });

  const corporateSwiper = new Swiper('.corporate-swiper', {
    slidesPerView: 3,
    loop: true,
    autoplay: true,
    pagination: {
      el: document.querySelector('.corporate-swiper .swiper-pagination'),
    },
    navigation: {
      nextEl: document.querySelector('.corporate-swiper .swiper-button-next'),
      prevEl: document.querySelector('.corporate-swiper .swiper-button-prev'),
    },
  });
      