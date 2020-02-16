// Preloader
$(window).on("load", function () {
  $(".load").fadeOut("slow");
});


// get Scrolled
$(document).scroll(function () {
  $("header").toggleClass(
    "scrolled",
    $(this).scrollTop() > $("header").height()
  );
});


// Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    // Toggle Now
    nav.classList.toggle('nav-active');
    // Animate Links
    navLinks.forEach((links, index) => {
      if (links.style.animation) {
        links.style.animation = ''
      } else {
        links.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.59}s`;
      }
    });
    // Burger Animation
    burger.classList.toggle('toggle');
  });
}

navSlide();
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
