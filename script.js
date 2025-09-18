const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const media = window.matchMedia('(calc(700 / 16 * 1rem))');
const topNavMenu = document.querySelector('.topnav__menu');
const main = document.querySelector('main');
const body = document.querySelector('body');

function openMobileMenu() {
  btnOpen.setAttribute('aria-expanded', 'true');
  topNavMenu.removeAttribute('inert');
  topNavMenu.removeAttribute('style');
  main.setAttribute('inert', '');
  bodyScrollLockUpgrade.disableBodyScroll(body);
  btnClose.focus();
}

function closeMobileMenu() {
  btnOpen.setAttribute('aria-expanded', 'false');
  topNavMenu.setAttribute('inert', '');
  main.removeAttribute('inert');
  bodyScrollLockUpgrade.enableBodyScroll(body);
  btnOpen.focus();

  setTimeout(() => {
    topNavMenu.style.transition = 'none';
  }, 500);
}

function setupTopNav(e) {
  if (e.matches) {
    // is mobile
    console.log('is mobile');
    topNavMenu.setAttribute('inert', '');
    topNavMenu.style.transition = 'none';
  } else {
    // is tablet/desktop
    console.log('is desktop');
    closeMobileMenu();
    topNavMenu.removeAttribute('inert');
  }
}

setupTopNav(media);

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);

media.addEventListener('change', function (e) {
  setupTopNav(e);
});




let slideIndex = 1;
showSlides(slideIndex);

// Next / previous controls
function plusSlides(n){
    showSlides(slideIndex += n);
}

// thumbnail image controls
function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length){
        slideIndex = 1;
    }

    if (n < 1){
        slideIndex = slides.length;
    }

    for(i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}
