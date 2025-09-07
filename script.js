let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let thumbSlides = document.getElementsByClassName("thumbnail");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < thumbSlides.length; i++) {
    thumbSlides[i].className = thumbSlides[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  thumbSlides[slideIndex - 1].className += " active";
}

console.log(typeof(slides))