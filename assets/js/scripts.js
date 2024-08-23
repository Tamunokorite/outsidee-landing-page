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



(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "09/30/",
        lday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > lday) {
      lday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(lday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's Launch Day";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());  


