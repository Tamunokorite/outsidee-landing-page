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
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
