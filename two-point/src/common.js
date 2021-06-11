const message = document.querySelector('.message');

export default function renderMessage(text) {
    message.textContent = text;
}