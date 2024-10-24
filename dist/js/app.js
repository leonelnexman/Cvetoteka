const main = new Swiper('.main-section__slider', {
  slidesPerView: 1,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 5000,
      },
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
  });


  const products = new Swiper('.category-products', {
    slidesPerView: 4,
    speed: 1000,
    spaceBetween: 20,
    navigation: {
      nextEl: '.category-products__next',
      prevEl: '.category-products__prev',
    },
  });


  const reviews = new Swiper('.reviews-slider', {
    slidesPerView: 3,
    speed: 1000,
    spaceBetween: 20,
    navigation: {
      nextEl: '.reviews__next',
      prevEl: '.reviews__prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  const balloons = new Swiper('.balloons__slider', {
    slidesPerView: 2,
    speed: 1000,
    spaceBetween: 20,
    navigation: {
      nextEl: '.balloons__next',
      prevEl: '.balloons__prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  const banners = new Swiper('.banners__slider', {
    slidesPerView: 2,
    speed: 1000,
    spaceBetween: 20,
    navigation: {
      nextEl: '.banners__next',
      prevEl: '.banners__prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  const citySwitchers = document.querySelectorAll('.city-swither');

  citySwitchers.forEach(citySwitcher => {
    const select = citySwitcher.querySelector('select');
    
    // Добавляем класс open при фокусе
    select.addEventListener('focus', () => {
      citySwitcher.classList.add('open');
    });
  
    // Удаляем класс open при потере фокуса
    select.addEventListener('blur', () => {
      citySwitcher.classList.remove('open');
    });
  
    // Удаляем класс open после выбора опции
    select.addEventListener('change', () => {
      citySwitcher.classList.remove('open');
    });
  });