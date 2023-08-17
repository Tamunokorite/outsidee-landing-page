// window.addEventListener("scroll", function () {
//     const header = document.querySelector("header");
//     const nav = document.querySelector("nav");
//     if (window.scrollY > 0) {
//         nav.classList.add("scrolled-header");
//         nav.classList.remove("transparent-header");
//     } else {
//         nav.classList.add("transparent-header");
//         nav.classList.remove("scrolled-header");
//     }
// });

const video = document.querySelector('#video-hero');
const playPauseButton = document.getElementById("play-pause-button");
const muteUnmuteButton = document.getElementById("mute-unmute-button");

function togglePlayPause() {
    if (video.paused) {
        video.play();
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        video.pause();
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function toggleMuteUnmute() {
    if (video.muted) {
        video.muted = false;
        muteUnmuteButton.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
        video.muted = true;
        muteUnmuteButton.innerHTML = '<i class="fas fa-volume-off"></i>';
    }
}

const text = "Find entertainment at your fingertips";
const typingTarget = document.getElementById("typing-target");
let index = 0;

function typeText() {
    typingTarget.innerHTML = text.slice(0, index) + "<span id='cursor'>|</span>";
    index++;

    if (index <= text.length) {
        setTimeout(typeText, 70);
    } else {
        // cursor.style.display = "none"; // Hide cursor when typing is done
        const cursor = document.querySelector("#cursor");

        cursor.classList.add("cursor");
    }
} 

setTimeout(function() {
    typeText();
}, 1000);


