
const video = document.querySelector('#video-hero');
const hero = document.querySelector('#hero');
const header = document.querySelector('header');
const menuToggle = document.querySelector(".mobile-menu-toggle");
const navLinks = document.querySelector(".nav-links");
const waitlistCTA = document.querySelector(".waitlist-cta");


// JavaScript to change navigation background on scroll
window.addEventListener('scroll', function () {
    // const navLinks = document.querySelector('.nav-links');
    // if (window.scrollY > 0) {
    //     header.classList.add('scrolled');
    //     // navLinks.style.display = 'block'; // Show the element
    //     // setTimeout(function () {
    //     //     navLinks.classList.add('scrolled');
    //     // }, 10);
    // } else {
    //     header.classList.remove('scrolled');
    //     // navLinks.classList.remove('scrolled');
    //     // navLinks.style.display = 'none'
    // }

    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));

});

// document.addEventListener("DOMContentLoaded", function () {
//     // var video = document.getElementById("autoplay-video");
//     video.play();
//     video.muted = false; // Make sure sound is enabled
// });

document.addEventListener("DOMContentLoaded", function () {

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        waitlistCTA.classList.toggle("active");
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// hero.addEventListener('click', () => {
//     if (video.paused) {
//         video.muted = false; // Unmute the video
//         video.play(); // Start playing
//     } else {
//         video.pause(); // Pause if playing
//     }
// });

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





