window.addEventListener("scroll", reveal)

function reveal() {
    let reveals = document.querySelectorAll('.reveal');

    reveals.forEach(reveal => {
        let windowHeight = window.innerHeight;
        let revealTop = reveal.getBoundingClientRect().top
        let revealPoint = 30;

        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    })
}



// When the user scrolls the page, execute myFunction 
window.onscroll = function() {stickyHeader()};

// Get the navbar
let navbar = document.getElementById("header");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeader() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}