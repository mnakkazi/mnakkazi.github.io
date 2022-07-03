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
