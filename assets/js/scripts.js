// JavaScript to change navigation background on scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const waitlist_cta = document.querySelector('.waitlist-cta');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
        waitlist_cta.style.display = 'block'; // Show the element
        setTimeout(function () {
            waitlist_cta.classList.add('scrolled');
        }, 10);
    } else {
        header.classList.remove('scrolled');
        waitlist_cta.classList.remove('scrolled');
        waitlist_cta.style.display = 'none'
    }

    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));

});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const video = document.getElementById('hero-video');
const playPauseButton = document.getElementById('play-pause-button');
const playPause = document.getElementById('play-pause');
const mute = document.getElementById('mute');
const volume = document.getElementById('volume');
const progressBar = document.querySelector('.progress');

playPauseButton.addEventListener('click', togglePlayPause);
playPause.addEventListener('click', togglePlayPause);
mute.addEventListener('click', toggleMute);
volume.addEventListener('input', adjustVolume);
video.addEventListener('timeupdate', updateProgressBar);
video.addEventListener('ended', () => playPause.innerHTML = '<i class="fas fa-play"></i>');

function togglePlayPause() {
    if (video.paused) {
        video.play();
        playPause.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        video.pause();
        playPause.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function toggleMute() {
    if (video.muted) {
        video.muted = false;
        mute.innerHTML = '<i class="fas fa-volume-up"></i>';
        volume.value = video.volume;
    } else {
        video.muted = true;
        mute.innerHTML = '<i class="fas fa-volume-mute"></i>';
        volume.value = 0;
    }
}

function adjustVolume() {
    video.volume = volume.value;
    if (volume.value == 0) {
        mute.innerHTML = '<i class="fas fa-volume-mute"></i>';
    } else {
        mute.innerHTML = '<i class="fas fa-volume-up"></i>';
    }
}

function updateProgressBar() {
    const progress = (video.currentTime / video.duration) * 100;
    progressBar.style.width = `${progress}%`;
}

// window.addEventListener('scroll', () => {
//     document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
//   }, false);
