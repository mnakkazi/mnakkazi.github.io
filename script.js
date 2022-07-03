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
/* Source: https://www.dev-tips-and-tricks.com/animate-elements-scrolled-view-vanilla-js */
(function() {
    var projectsImg;
    var windowHeight;
  
    function init() {
      projectsImg = document.querySelectorAll('.projects img');
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
      for (var i = 0; i < projectsImg.length; i++) {
        var img = projectsImg[i];
        var positionFromTop = projectsImg[i].getBoundingClientRect().top;
  
        if (positionFromTop - windowHeight <= 0) {
          img.classList.add('animate');
        }
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();
  })();