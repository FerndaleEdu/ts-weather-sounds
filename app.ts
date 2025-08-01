const audioElement = document.getElementById("audio") as HTMLAudioElement;
const volumeRange = document.getElementById("volumeRange") as HTMLInputElement;
const background = document.getElementById("backgroundImg") as HTMLImageElement;

const summerButton = document.getElementById("summerButton");
const rainyButton = document.getElementById("rainyButton");
const winterButton = document.getElementById("winterButton");

enum Mode {
    Summer = "SUMMER",
    Rainy = "RAIN", 
    Winter = "WINTER"
}
const sourceMap = {
    [Mode.Summer]: {
        audio: "assets/sounds/summer.mp3",
        background: "assets/summer-bg.jpg"
    },
    [Mode.Rainy]: {
        audio: "assets/sounds/rain.mp3",
        background: "assets/rainy-bg.jpg"
    },
    [Mode.Winter]: {
        audio: "assets/sounds/winter.mp3",
        background: "assets/winter-bg.jpg"
    }
}

let currentMode = Mode.Summer;

const clickHandler = (mode: Mode) => {
    return () => {
        console.log(mode, currentMode, audioElement.paused, audioElement.currentSrc);
        if(currentMode !== mode){
            audioElement.src = sourceMap[mode].audio;
            audioElement.play();

            background.src = sourceMap[mode].background;
        }
        else{
            if(audioElement.paused)
                audioElement.play();
            else
                audioElement.pause();
        }

        currentMode = mode;
    }
}

volumeRange?.addEventListener("change", () => {
    audioElement.volume = +volumeRange.value / 100;
})

summerButton?.addEventListener("click", clickHandler(Mode.Summer))
rainyButton?.addEventListener("click", clickHandler(Mode.Rainy))
winterButton?.addEventListener("click", clickHandler(Mode.Winter))