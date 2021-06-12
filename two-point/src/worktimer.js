import {
    soundPlay,
    soundEnd
} from "./sound.js";

let timerInt;
/**
 * Функция для обновления таймера на странице
 * с использованием setInterval()
 * @param {string} hour часы
 * @param {string} minute минуты
 * @param {string} second секунды
 */
export default function time(hour, minute, second) {
    // Переменная timer - нужна для остановки setInterval();
    timerInt = setInterval(() => {
        // Объект time для обновления времени
        let time = timerStart(hour, minute, second);
        // Перезаписывание времени (обновление)
        hour = time.h;
        minute = time.m;
        second = time.s;
        outPut(hour, minute, second);

        // Проверка на завершение работы таймера и будет какая-то реакция
        // будет добавлена музыка;
        if (time.key) {
            clearInterval(timerInt);

            // ! Подключение библиотеки howler не получилось
            /*
            let sound = new Howl({
                src: ['sound.mp3']
            });

            sound.play();*/

            // Воспроизведение звука (вкл)
            soundPlay();
        }
    }, 1000);
}

export function endtime() {
    clearInterval(timerInt);
    soundEnd();
}

/**
 * Функция для вывода информации на страницу
 * @param {string} hour часы
 * @param {string} minute минуты
 * @param {string} second секунды
 */
export function outPut(hour, minute, second) {
    let spanHour = document.getElementsByClassName('duplicate')[0].children[0];
    let spanMin = document.getElementsByClassName('duplicate')[0].children[1];
    let spanSec = document.getElementsByClassName('duplicate')[0].children[2];

    spanHour.innerText = `Часы: ${hour}`;
    spanMin.innerText = `Минуты: ${minute}`;
    spanSec.innerText = `Секунды: ${second}`;
}

/**
 * Процесс таймера
 * @param {string} hour 
 * @param {string} minute 
 * @param {string} second 
 * @returns {number , number, number, bool}
 */
function timerStart(hour, minute, second) {

    let h = Number(hour);
    let m = Number(minute);
    let s = Number(second);
    let key = false;

    if (h > 0) {
        if (m > 0) {
            if (s > 0) {
                s--;
            } else if (s === 0) {
                s = 59;
                m--;
            }
        } else if (m === 0) {
            m = 59;
            h--;
        }
    } else if (h === 0) {
        if (m > 0) {
            if (s > 0) {
                s--;
            } else if (s === 0) {
                s = 59;
                m--;
            }
        }
        if (m === 0) {
            if (s > 0) {
                s--;
            } else if (s === 0) {
                key = true;
            }
        }
    }

    return {
        h,
        m,
        s,
        key
    };
}