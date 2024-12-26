const mainElement = document.querySelector('.main-section__slider');
if (mainElement) {
  const main = new Swiper(mainElement, {
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
  });
}

const categoryProductsElements = document.querySelectorAll('.category-products');

categoryProductsElements.forEach((categoryProductsElement, index) => {
  // Добавить уникальные классы для навигации и пагинации
  const nextEl = `.category-products__next-${index}`;
  const prevEl = `.category-products__prev-${index}`;
  const paginationEl = `.swiper-pagination-${index}`;

  // Найти элементы навигации и пагинации внутри текущего слайдера
  const nextButton = categoryProductsElement.querySelector('.category-products__next');
  const prevButton = categoryProductsElement.querySelector('.category-products__prev');
  const pagination = categoryProductsElement.querySelector('.swiper-pagination');

  // Добавить уникальные классы
  if (nextButton) nextButton.classList.add(`category-products__next-${index}`);
  if (prevButton) prevButton.classList.add(`category-products__prev-${index}`);
  if (pagination) pagination.classList.add(`swiper-pagination-${index}`);

  // Инициализация Swiper для текущего слайдера
  new Swiper(categoryProductsElement, {
    slidesPerView: 4,
    speed: 1000,
    spaceBetween: 20,
    navigation: {
      nextEl: nextEl, // Уникальный класс для кнопки "вперед"
      prevEl: prevEl, // Уникальный класс для кнопки "назад"
    },
    pagination: {
      el: paginationEl, // Уникальный класс для пагинации
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      0: {
        slidesPerView: 2,
      },
    },
  });
});

const reviewsElement = document.querySelector('.reviews-slider');
if (reviewsElement) {
  const reviews = new Swiper(reviewsElement, {
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
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });
}

const balloonsElement = document.querySelector('.balloons__slider');
if (balloonsElement) {
  const balloons = new Swiper(balloonsElement, {
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
}

const bannersElement = document.querySelector('.banners__slider');
if (bannersElement) {
  const banners = new Swiper(bannersElement, {
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
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
    },
  });
}

const productsAdd = document.querySelector('.add__wrapper');
if (productsAdd) {
  const productsAd = new Swiper(productsAdd, {
    slidesPerView: 4,
    speed: 1000,
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 2,
        pagination: {
          el: '.swiper-pagination',
        },
      },
      700: {
        slidesPerView: 3,
      },
      962: {
        slidesPerView: 4,
      },
    },
  });
}

const View = document.querySelector('.watched__wrapper');
if (View) {
  const Vieww = new Swiper(View, {
    slidesPerView: 6,
    speed: 1000,
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 2,
        pagination: {
          el: '.swiper-pagination',
        },
      },
      700: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 6,
      },
    },
  });
}

const citySwitchers = document.querySelectorAll('.city-swither');
if (citySwitchers.length) {
  citySwitchers.forEach(citySwitcher => {
    const select = citySwitcher.querySelector('select');
    if (select) {
      select.addEventListener('focus', () => {
        citySwitcher.classList.add('open');
      });

      select.addEventListener('blur', () => {
        citySwitcher.classList.remove('open');
      });

      select.addEventListener('change', () => {
        citySwitcher.classList.remove('open');
      });
    }
  });
}

const cartBtn = document.querySelector('.cart-btn');
const cartNotify = document.querySelector('.notify-block');
if (cartBtn && cartNotify) {
  cartBtn.addEventListener('click', () => {
    cartNotify.classList.toggle('visible');
  });
}

const openReg = document.querySelector('.open-reg');
const openPass = document.querySelector('.open-pass');
const openLog = document.querySelector('.open-log');
const blocks = document.querySelectorAll('.block');
const blockReg = document.querySelector('.block-reg');
const blockPass = document.querySelector('.block-pass');
const blockLog = document.querySelector('.block-log');

if (openReg && openPass && openLog && blocks.length && blockReg && blockPass && blockLog) {
  function switchActiveClass(newActiveBlock) {
    blocks.forEach(block => block.classList.remove('active'));
    newActiveBlock.classList.add('active');
  }

  openReg.addEventListener('click', () => switchActiveClass(blockReg));
  openPass.addEventListener('click', () => switchActiveClass(blockPass));
  openLog.addEventListener('click', () => switchActiveClass(blockLog));
}

const searchBtn = document.querySelector('.search-btn');
const searchClose = document.querySelector('.search-close');
const search = document.querySelector('.search');
if (searchBtn && searchClose && search) {
  function setSearchMaxHeight() {
    search.style.maxHeight = `${search.scrollHeight}px`;
  }

  searchBtn.addEventListener('click', () => {
    search.classList.add('visible');
    setSearchMaxHeight();
  });

  searchClose.addEventListener('click', () => {
    search.classList.remove('visible');
    search.style.maxHeight = null;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const catalogSort = document.querySelector('.catalog__sort');
  const selectElement = catalogSort?.querySelector('select');
  const svgIcon = catalogSort?.querySelector('.catalog__sort-icon');

  if (catalogSort && selectElement && svgIcon) {
    selectElement.addEventListener('focus', () => {
      svgIcon.classList.add('open');
    });

    selectElement.addEventListener('blur', () => {
      svgIcon.classList.remove('open');
    });

    catalogSort.addEventListener('click', () => {
      selectElement.focus();
    });
  }
});

const searchField = document.querySelector('.catalog-filter__search input');
const searchIcon = document.querySelector('.catalog-filter__search .icon-search');
const closeIcon = document.querySelector('.catalog-filter__search .search-close');
if (searchField && searchIcon && closeIcon) {
  function toggleSearchIcons() {
    if (searchField.value.length > 0) {
      searchIcon.style.display = 'none';
      closeIcon.style.display = 'block';
    } else {
      searchIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    }
  }

  searchField.addEventListener('input', toggleSearchIcons);

  closeIcon.addEventListener('click', () => {
    searchField.value = '';
    toggleSearchIcons();
  });

  toggleSearchIcons();
}

const rangeValue = document.querySelector(".slider-container .price-slider");
const rangeInputValues = document.querySelectorAll(".range-input input");
if (rangeValue && rangeInputValues.length) {
  const priceInputValues = document.querySelectorAll(".price-input input");
  if (priceInputValues.length) {
    let priceGap = 500;

    priceInputValues.forEach((input, i) => {
      input.addEventListener("input", e => {
        let minp = parseInt(priceInputValues[0].value);
        let maxp = parseInt(priceInputValues[1].value);

        if (minp < 0) {
          alert("minimum price cannot be less than 0");
          priceInputValues[0].value = 0;
          minp = 0;
        }

        if (maxp > 10000) {
          alert("maximum price cannot be greater than 10000");
          priceInputValues[1].value = 10000;
          maxp = 10000;
        }

        if (minp > maxp - priceGap) {
          priceInputValues[0].value = maxp - priceGap;
          minp = maxp - priceGap;

          if (minp < 0) {
            priceInputValues[0].value = 0;
            minp = 0;
          }
        }

        if (e.target.className === "min-input") {
          rangeInputValues[0].value = minp;
          rangeValue.style.left = `${(minp / rangeInputValues[0].max) * 100}%`;
        } else {
          rangeInputValues[1].value = maxp;
          rangeValue.style.right = `${100 - (maxp / rangeInputValues[1].max) * 100}%`;
        }
      });
    });

    rangeInputValues.forEach((input, i) => {
      input.addEventListener("input", e => {
        let minVal = parseInt(rangeInputValues[0].value);
        let maxVal = parseInt(rangeInputValues[1].value);

        if (maxVal - minVal < priceGap) {
          if (e.target.className === "min-range") {
            rangeInputValues[0].value = maxVal - priceGap;
          } else {
            rangeInputValues[1].value = minVal + priceGap;
          }
        } else {
          priceInputValues[0].value = minVal;
          priceInputValues[1].value = maxVal;
          rangeValue.style.left = `${(minVal / rangeInputValues[0].max) * 100}%`;
          rangeValue.style.right = `${100 - (maxVal / rangeInputValues[1].max) * 100}%`;
        }
      });
    });
  }
}

const mySwiper = document.querySelector(".mySwiper");
const mySwiper2 = document.querySelector(".mySwiper2");
if (mySwiper && mySwiper2) {
  const swiper = new Swiper(mySwiper, {
    spaceBetween: 20,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
  });
  const swiper2 = new Swiper(mySwiper2, {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
}

const fileButton = document.querySelector('.file');
const inputFile = document.querySelector('.input-file');
if (fileButton && inputFile) {
  fileButton.addEventListener('click', function(event) {
    event.preventDefault();
    inputFile.click();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const thumbs = document.querySelectorAll(".aside__thumb");
  const sections = [
    "dashboard",
    "delivery-adress",
    "contacts-info",
    "subscription-info",
    "loal-program"
  ];
  const loginElement = document.querySelector(".login");

  function activate(index) {
    // Убираем классы active у всех thumbs
    thumbs.forEach(thumb => thumb.classList.remove("active"));

    // Убираем классы active у всех секций, если они существуют
    sections.forEach(section => {
      const element = document.querySelector(`.${section}`);
      if (element) {
        element.classList.remove("active");
      }
      // Удаляем дополнительные классы из loginElement
      if (loginElement) {
        loginElement.classList.remove(`${section}-active`);
      }
    });

    // Проверяем существование текущего thumb и активируем его
    if (thumbs[index]) {
      thumbs[index].classList.add("active");
    }

    // Проверяем существование текущей секции и активируем ее
    const activeSection = document.querySelector(`.${sections[index]}`);
    if (activeSection) {
      activeSection.classList.add("active");
    }

    // Добавляем дополнительный класс в loginElement
    if (loginElement) {
      loginElement.classList.add(`${sections[index]}-active`);
    }
  }

  // Устанавливаем начальное состояние, если thumbs не пустой
  if (thumbs.length > 0) {
    activate(0);
  }

  // Добавляем обработчики событий
  thumbs.forEach((thumb, index) => {
    thumb.addEventListener("click", () => activate(index));
  });
});


document.querySelectorAll('.plans__item-thumbs').forEach(thumbnail => {
  const buttons = thumbnail.querySelectorAll('button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active')); // Убираем класс active у всех кнопок
      button.classList.add('active'); // Добавляем класс active только к нажатой кнопке
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const fancyboxElements = document.querySelectorAll("[data-fancybox]");

  if (fancyboxElements.length > 0) {
      Fancybox.bind("[data-fancybox]", {
          Toolbar: {
              display: ["close"], // Оставляем только кнопку закрытия
          },
          Thumbs: {
              autoStart: true,
              axis: "x",
          },
      });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const thumbButtons = document.querySelectorAll(".payment__thumb");
  const wraps = document.querySelectorAll(".payment__wrap");
  const payment = document.querySelector(".payment");

  if (!payment) return; // Проверяем, что элемент .payment существует

  thumbButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
          // Убираем класс active у всех кнопок и секций
          thumbButtons.forEach(btn => btn.classList.remove("active"));
          wraps.forEach(wrap => wrap.classList.remove("active"));

          // Добавляем класс active текущей кнопке и соответствующей секции
          button.classList.add("active");
          wraps[index].classList.add("active");

          // Убираем предыдущие классы payment__wrapN
          payment.className = payment.className
              .split(" ")
              .filter(cls => !cls.startsWith("payment__wrap"))
              .join(" ");

          // Добавляем новый класс payment__wrapN на класс payment
          payment.classList.add(`payment__wrap${index + 1}`);
      });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const thumbButtons = document.querySelectorAll(".payments__thumb");
  const wraps = document.querySelectorAll(".thumb-cont");
  const payment = document.querySelector(".payment");

  if (!payment) return; // Проверяем, что элемент .payment существует

  thumbButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
          // Убираем класс active у всех кнопок и секций
          thumbButtons.forEach(btn => btn.classList.remove("active"));
          wraps.forEach(wrap => wrap.classList.remove("active"));

          // Добавляем класс active текущей кнопке и соответствующей секции
          button.classList.add("active");
          wraps[index].classList.add("active");

          // Убираем предыдущие классы payment__block-inner
          payment.className = payment.className
              .split(" ")
              .filter(cls => !cls.startsWith("thumb-cont"))
              .join(" ");

          // Добавляем новый класс payment__block-innerN на класс payment
          payment.classList.add(`thumb-cont${index + 1}`);
      });
  });
});










