var swiper = new Swiper('.slide-container', {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});

function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
    document.querySelector('.icon').src = 'img/menu_white_36dp.svg';
  } else {
    menuMobile.classList.add('open');
    document.querySelector('.icon').src = 'img/close_white_36dp.svg';
  }
}
