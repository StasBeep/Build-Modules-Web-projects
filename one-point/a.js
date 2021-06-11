function loadB() {
    const scriptB = document.createElement('script');

    scriptB.src = './b.js';

    document.head.insertAdjacentElement('beforeend', scriptB);
}

loadB();