const message = document.querySelector('.message');

// Дефолтный экспорт
export default function renderMessage(text) {
    message.textContent = text;
}

// именованный экспорт
export function renderDates(result) {
    message.style.color = 'black';
    message.innerHTML = `
        <span>Годы: ${result.years}</span>
        <span>Месяцы: ${result.months}</span>
        <span>Дни: ${result.days}</span>
    `
}