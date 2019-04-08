var video,
    playLayer,
    playButton,
    playHeader,
    playText,
    playDuration;

window.onload = function () {
    "use strict";
    video = document.getElementById("video");
    playLayer = document.getElementById("play-layer");
    playButton = document.getElementById("play-button");
    playHeader = document.getElementById("play-header");
    playText = document.getElementById("play-text");
    playDuration = document.getElementById("play-duration");
    
    playButton.onclick = play;
    playLayer.onmouseover = showPlayButton;
    playLayer.onmouseout = hidePlayButton;
    video.onended = restorePlayLayer;
};

function play() {
    "use strict";
    if (video.paused) {
        video.play();
        clearPlayLeyer();
    } else {
        video.pause();
    }
}

function clearPlayLeyer() {
    "use strict";
    playLayer.style.backgroundColor = "transparent";
    playHeader.style.color = "transparent";
    playText.style.color = "transparent";
    playDuration.style.color = "transparent";
    playButton.style.display = "none";
}

function showPlayButton() {
    "use strict";
    if (!video.paused) {
        playButton.style.display = "block";
    }
}

function hidePlayButton() {
    "use strict";
    if (!video.paused) {
        playButton.style.display = "none";
    }
}

function restorePlayLayer() {
    "use strict";
    playLayer.style.backgroundColor = "rgba(17, 17, 17, 0.5)";
    playHeader.style.color = "#fff";
    playText.style.color = "#fff";
    playDuration.style.color = "#c7b299";
    playButton.style.display = "block";
    video.currentTime = 0;
}