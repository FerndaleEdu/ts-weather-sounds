var _a;
var audioElement = document.getElementById("audio");
var summerButton = document.getElementById("summerButton");
var rainyButton = document.getElementById("rainyButton");
var winterButton = document.getElementById("winterButton");
var volumeRange = document.getElementById("volumeRange");
var background = document.getElementById("backgroundImg");
var Mode;
(function (Mode) {
    Mode["Summer"] = "SUMMER";
    Mode["Rainy"] = "RAIN";
    Mode["Winter"] = "WINTER";
})(Mode || (Mode = {}));
var sourceMap = (_a = {},
    _a[Mode.Summer] = {
        audio: "/assets/sounds/summer.mp3",
        background: "/assets/summer-bg.jpg"
    },
    _a[Mode.Rainy] = {
        audio: "/assets/sounds/rain.mp3",
        background: "/assets/rainy-bg.jpg"
    },
    _a[Mode.Winter] = {
        audio: "/assets/sounds/winter.mp3",
        background: "/assets/winter-bg.jpg"
    },
    _a);
var currentMode = Mode.Summer;
var clickHandler = function (mode) {
    return function () {
        console.log(mode, currentMode, audioElement.paused, audioElement.currentSrc);
        if (currentMode !== mode) {
            audioElement.src = sourceMap[mode].audio;
            audioElement.play();
            background.src = sourceMap[mode].background;
        }
        else {
            if (audioElement.paused)
                audioElement.play();
            else
                audioElement.pause();
        }
        currentMode = mode;
    };
};
volumeRange === null || volumeRange === void 0 ? void 0 : volumeRange.addEventListener("change", function () {
    audioElement.volume = +volumeRange.value / 100;
});
summerButton === null || summerButton === void 0 ? void 0 : summerButton.addEventListener("click", clickHandler(Mode.Summer));
rainyButton === null || rainyButton === void 0 ? void 0 : rainyButton.addEventListener("click", clickHandler(Mode.Rainy));
winterButton === null || winterButton === void 0 ? void 0 : winterButton.addEventListener("click", clickHandler(Mode.Winter));
