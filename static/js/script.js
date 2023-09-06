// NAV-SCROLLING
//This code is what bring up the white background color, when scrolling down the website
const nav = document.querySelector("nav");

window.addEventListener('scroll', function () {
   const offset = this.window.pageYOffset;
   if (offset > 75) {
      nav.classList.add('scroll');
   } else {
      nav.classList.remove('scroll');
   }
});

//toggle navigation
function toggle() {
   const toggleNav = document.getElementById("nav-links-container");
   toggleNav.classList.toggle('active');

};


