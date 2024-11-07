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
    
    select.addEventListener('focus', () => {
      citySwitcher.classList.add('open');
    });
  
    select.addEventListener('blur', () => {
      citySwitcher.classList.remove('open');
    });
  
    select.addEventListener('change', () => {
      citySwitcher.classList.remove('open');
    });
  });

  const cartBtn = document.querySelector('.cart-btn');
const cartNotify = document.querySelector('.notify-block');

// Добавляем обработчик события на кнопку
cartBtn.addEventListener('click', () => {
  // Переключаем класс 'visible'
  cartNotify.classList.toggle('visible');
});

const openReg = document.querySelector('.open-reg');
const openPass = document.querySelector('.open-pass');
const openLog = document.querySelector('.open-log');
const blocks = document.querySelectorAll('.block'); // Находим все элементы с классом 'block'
const blockReg = document.querySelector('.block-reg');
const blockPass = document.querySelector('.block-pass');
const blockLog = document.querySelector('.block-log');

// Функция для удаления класса 'active' со всех блоков и добавления к новому
function switchActiveClass(newActiveBlock) {
  // Удаляем класс 'active' у всех блоков
  blocks.forEach(block => block.classList.remove('active'));
  
  // Добавляем класс 'active' к новому блоку
  newActiveBlock.classList.add('active');
}

// Обработчики событий для кнопок
openReg.addEventListener('click', () => switchActiveClass(blockReg));
openPass.addEventListener('click', () => switchActiveClass(blockPass));
openLog.addEventListener('click', () => switchActiveClass(blockLog));

const searchBtn = document.querySelector('.search-btn');
const searchClose = document.querySelector('.search-close');
const search = document.querySelector('.search');

// Функция для установки max-height элемента search
function setSearchMaxHeight() {
  search.style.maxHeight = `${search.scrollHeight}px`;
}

// Добавляем класс 'visible' и вычисляем max-height при нажатии на search-btn
searchBtn.addEventListener('click', () => {
  search.classList.add('visible');
  setSearchMaxHeight();
});

// Удаляем класс 'visible' и сбрасываем max-height при нажатии на search-close
searchClose.addEventListener('click', () => {
  search.classList.remove('visible');
  search.style.maxHeight = null; // Сброс max-height
});

document.addEventListener('DOMContentLoaded', () => {
  const catalogSort = document.querySelector('.catalog__sort');
  const selectElement = catalogSort?.querySelector('select');
  const svgIcon = catalogSort?.querySelector('.catalog__sort-icon');

  if (catalogSort && selectElement && svgIcon) {
      // Добавляем/удаляем класс open при фокусе и потере фокуса на select
      selectElement.addEventListener('focus', () => {
          svgIcon.classList.add('open');
      });

      selectElement.addEventListener('blur', () => {
          svgIcon.classList.remove('open');
      });

      // Клик по контейнеру для фокуса на select
      catalogSort.addEventListener('click', () => {
          selectElement.focus();
      });
  }
});

const rangevalue = 
    document.querySelector(".slider-container .price-slider");
const rangeInputvalue = 
    document.querySelectorAll(".range-input input");

// Set the price gap
let priceGap = 500;

// Adding event listners to price input elements
const priceInputvalue = 
    document.querySelectorAll(".price-input input");
for (let i = 0; i < priceInputvalue.length; i++) {
    priceInputvalue[i].addEventListener("input", e => {

        // Parse min and max values of the range input
        let minp = parseInt(priceInputvalue[0].value);
        let maxp = parseInt(priceInputvalue[1].value);
        let diff = maxp - minp

        if (minp < 0) {
            alert("minimum price cannot be less than 0");
            priceInputvalue[0].value = 0;
            minp = 0;
        }

        // Validate the input values
        if (maxp > 10000) {
            alert("maximum price cannot be greater than 10000");
            priceInputvalue[1].value = 10000;
            maxp = 10000;
        }

        if (minp > maxp - priceGap) {
            priceInputvalue[0].value = maxp - priceGap;
            minp = maxp - priceGap;

            if (minp < 0) {
                priceInputvalue[0].value = 0;
                minp = 0;
            }
        }

        // Check if the price gap is met 
        // and max price is within the range
        if (diff >= priceGap && maxp <= rangeInputvalue[1].max) {
            if (e.target.className === "min-input") {
                rangeInputvalue[0].value = minp;
                let value1 = rangeInputvalue[0].max;
                rangevalue.style.left = `${(minp / value1) * 100}%`;
            }
            else {
                rangeInputvalue[1].value = maxp;
                let value2 = rangeInputvalue[1].max;
                rangevalue.style.right = 
                    `${100 - (maxp / value2) * 100}%`;
            }
        }
    });

    // Add event listeners to range input elements
    for (let i = 0; i < rangeInputvalue.length; i++) {
        rangeInputvalue[i].addEventListener("input", e => {
            let minVal = 
                parseInt(rangeInputvalue[0].value);
            let maxVal = 
                parseInt(rangeInputvalue[1].value);

            let diff = maxVal - minVal
            
            // Check if the price gap is exceeded
            if (diff < priceGap) {
            
                // Check if the input is the min range input
                if (e.target.className === "min-range") {
                    rangeInputvalue[0].value = maxVal - priceGap;
                }
                else {
                    rangeInputvalue[1].value = minVal + priceGap;
                }
            }
            else {
            
                // Update price inputs and range progress
                priceInputvalue[0].value = minVal;
                priceInputvalue[1].value = maxVal;
                rangevalue.style.left =
                    `${(minVal / rangeInputvalue[0].max) * 100}%`;
                rangevalue.style.right =
                    `${100 - (maxVal / rangeInputvalue[1].max) * 100}%`;
            }
        });
    }
}

document.querySelector('.file').addEventListener('click', function(event) {
  event.preventDefault(); // предотвращаем перезагрузку страницы
  document.querySelector('.input-file').click();
});