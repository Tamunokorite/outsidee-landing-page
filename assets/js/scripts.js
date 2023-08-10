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

const video = document.querySelector('video');

// video.muted = true; // Start with video muted

video.addEventListener('click', () => {
    if (video.paused) {
        video.muted = false; // Unmute the video
        video.play(); // Start playing
    } else {
        video.pause(); // Pause if playing
    }
});