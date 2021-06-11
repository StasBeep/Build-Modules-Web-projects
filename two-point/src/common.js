const message = document.querySelector('.message');

// Дефолтный экспорт
export default function renderMessage(text) {
    message.textContent = text;
}