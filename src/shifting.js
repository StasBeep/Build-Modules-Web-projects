// Ссылка на калькулятор дат
export const form = document.getElementById('form-date');
// Ссылка на таймер
export const timer = document.getElementsByClassName('timer')[0];

const menu = document.getElementsByClassName('menu-btn')[0].children;

menu[0].addEventListener('click', () => {
    if (timer.classList.contains('active')) {
        form.classList.add('active');
        timer.classList.toggle('active');
    }
});

menu[1].addEventListener('click', () => {
    if (form.classList.contains('active')) {
        timer.classList.add('active');
        form.classList.toggle('active');
    }
});