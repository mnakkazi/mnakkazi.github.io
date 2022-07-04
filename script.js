/* =======================================
VARIABLES
======================================== */
const menu = document.getElementById('menu');
const close = document.getElementById('close');
const navigation = document.querySelector('.nav-links');
const links = document.querySelectorAll('.link');


/* =======================================
DISPLAY NAV
======================================== */
menu.addEventListener('click', (e) => {
    navigation.classList.toggle('active');   
    menu.style.opacity = 0;
    close.style.display = 'block';
});


/* =======================================
HIDE NAVIGATION
======================================== */
links.forEach(link => {
    link.addEventListener('click', (e) => {
        hideNav();
    });
});

close.addEventListener('click', (e) => {  
    hideNav(); 
})


/* =======================================
HIDE NAV FUNCTION
======================================== */
function hideNav() {
    navigation.classList.remove('active');
    menu.style.opacity = 1;
    close.style.display = 'none';
}


/* =======================================
ANIMATE PROJECT SVG
======================================== */

/* Source: https://codepen.io/alvarotrigo/pen/XWaYRKK */

function animate() {
  var animates = document.querySelectorAll(".projects img");

  for (var i = 0; i < animates.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = animates[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      animates[i].classList.add("animate");
    } else {
      animates[i].classList.remove("animate");
    }
  }
}

window.addEventListener("scroll", animate);