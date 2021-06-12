export default function time(hour, minute, second) {
    let timer = setInterval(() => {
        let time = timerStart(hour, minute, second);
        hour = time.h;
        minute = time.m;
        second = time.s;
        outPut(hour, minute, second);

        if (time.key) {
            clearInterval(timer);
        }
    }, 1000);
}

export function outPut(hour, minute, second) {
    let spanHour = document.getElementsByClassName('duplicate')[0].children[0];
    let spanMin = document.getElementsByClassName('duplicate')[0].children[1];
    let spanSec = document.getElementsByClassName('duplicate')[0].children[2];

    spanHour.innerText = `Часы: ${hour}`;
    spanMin.innerText = `Минуты: ${minute}`;
    spanSec.innerText = `Секунды: ${second}`;
}

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