let audio = new Audio();
export function soundPlay() {
    audio.src = './media/track timer.mp3';
    audio.play();
}
export function soundEnd() {
    audio.pause();
}