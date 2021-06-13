import soundTimer from '../media/track timer.mp3';

let audio = new Audio();
export function soundPlay() {
    audio.src = soundTimer;
    audio.play();
}
export function soundEnd() {
    audio.pause();
}