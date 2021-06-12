import {
    timer
} from './shifting.js';

import timerStart, {
    outPut
} from './worktimer.js'

const buttonStart = timer.getElementsByTagName('button')[0];
const buttonEnd = timer.getElementsByTagName('button')[1];
const mes = document.getElementsByClassName('message-error')[0];

// console.log(buttonStart, buttonEnd);

buttonStart.addEventListener('click', () => {
    const inpHour = document.getElementById('hour').value;
    const inpMin = document.getElementById('min').value;
    const inpSec = document.getElementById('sec').value;

    if (inpHour == "" || inpMin == "" || inpSec == "") {
        mes.style.display = "block";
    } else {
        mes.style.display = "none";
        buttonEnd.disabled = false;
        buttonEnd.innerText = "Пауза";
        buttonStart.disabled = true;

        outPut(inpHour, inpMin, inpSec);
        timerStart(inpHour, inpMin, inpSec);
    }
});