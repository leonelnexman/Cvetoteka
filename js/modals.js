// Получаем элементы модального окна
const modal = document.getElementById('cityModal');
const closeModalBtn = document.querySelector('.city .close-btn');

function showModal() {
    modal.style.display = 'flex';
}

if (!localStorage.getItem('hasVisited')) {
    // Устанавливаем таймер на 10 секунд для открытия модалки
    setTimeout(() => {
        showModal();
        // Сохраняем отметку о первом визите в localStorage
        localStorage.setItem('hasVisited', 'true');
    }, 10000); // 10000 мс = 10 секунд
}

// Закрытие модального окна при нажатии на кнопку "×"
closeModalBtn.onclick = function() {
    modal.style.display = 'none';
}

// Закрытие модального окна при клике за его пределами
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

const openAuthorization = document.querySelector('.open-authorization');
const authCloseBtn = document.querySelector('.authclose-btn');
const authorization = document.querySelector('.authorization');

// Добавляем класс 'active' при нажатии на open-authorization и предотвращаем переход по ссылке
openAuthorization.addEventListener('click', (event) => {
  event.preventDefault(); // Предотвращаем переход по ссылке
  authorization.classList.add('active');
});

// Удаляем класс 'active' при нажатии на authclose-btn
authCloseBtn.addEventListener('click', () => {
  authorization.classList.remove('active');
});
