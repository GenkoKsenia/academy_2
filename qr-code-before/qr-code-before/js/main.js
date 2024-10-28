/*
Реализуйте функционал генерации QR-кода с помощью следующего алгоритма:
Определите URL API для создания QR-кодов.
На странице найдите все необходимые HTML-элементы: форму, поле ввода и блок для отображения QR-кода.
Добавьте обработчик события для кнопки, который:
Остановит стандартное поведение формы при нажатии.
Очистит блок для QR-кода перед генерацией нового кода.
Соберет данные из поля ввода и сформирует запрос к API для получения изображения QR-кода.
Создаст HTML-разметку для отображения QR-кода.
Добавит полученное изображение на страницу и применит необходимые стили


Первая часть запроса https://api.qrserver.com/v1/create-qr-code/?size=160×160&data= */


const form = document.getElementById('form');
const input = document.getElementById('input');
const button = document.querySelector('.btn');
const cardQr = document.getElementById('card-qr');

button.addEventListener('click', (e) => {
    e.preventDefault(); // Остановит стандартное поведение формы при нажатии
  
    // Очистит блок для QR-кода перед генерацией нового кода
    cardQr.innerHTML = '';
  
    // Соберет данные из поля ввода
    const userInput = input.value.trim();
  
    // Отправит запрос к API для генерации QR-кода
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${userInput}`;
    fetch(apiUrl)
      .then(response => response.blob())
      .then((blob) => {
        // Создаст элемент изображения для отображения QR-кода.
        const qrCodeImage = document.createElement('img');
        qrCodeImage.src = URL.createObjectURL(blob);
  
        // Добавит изображение в блок QR-кода
        cardQr.appendChild(qrCodeImage);
  
        // Добавит класс .open для анимации блока QR-кода.
        cardQr.classList.add('open');
      })
  });
