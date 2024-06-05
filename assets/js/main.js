

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
    breakpoints: {
      640: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1199: {
        slidesPerView: 3,
        
      },
    },
    navigation: {
      nextEl: document.querySelector('.corporate-swiper .swiper-button-next'),
      prevEl: document.querySelector('.corporate-swiper .swiper-button-prev'),
    },
  });

  const latestSwiper = new Swiper('.latest-news-swiper', {
    slidesPerView: 2,
    loop: true,
    autoplay: true,
    pagination: {
      el: document.querySelector('.latest-news-swiper .swiper-pagination'),
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1199: {
        slidesPerView: 3,
        
      },
    },
    
    navigation: {
      nextEl: document.querySelector('.latest-news-swiper.swiper-button-next'),
      prevEl: document.querySelector('.latest-news-swiper .swiper-button-prev'),
    },
  });
  const testimonialSwiper = new Swiper('.testimonial-swiper', {
    effect: "fade",
    loop: true,
    autoplay: true,
    pagination: {
      el: document.querySelector('.testimonial-swiper .swiper-pagination'),
    },
  });

  lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgZoom],
    speed: 500,
});

new countUp.CountUp('yearOfExperience', 2500).start();
new countUp.CountUp('ExperienceWorker', 2000).start();
new countUp.CountUp('HappyCoustomer', 500).start();
new countUp.CountUp('Branches', 8000).start();


  
      