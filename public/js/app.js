/*Navigation Bar*/
const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".navbar");

hamburger.addEventListener("click", mobileMenu);

/*
 * function mobileMenu() also adds an active class on our hamburger and our 'nav-menu'
 * which makes our mobile menu open.
 * we can use the active class on the hamburger to create that X animation when we click on the hamburger
 */
function mobileMenu() {
  hamburger.classList.toggle("active");
  navBar.classList.toggle("active");
}

/*Following code is to make the hamburger menu close when a lick is clicked */
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

/*
 * The closeMenu() function removes the active class from both the nav-menu and the hamburger
 * which makes our mobile menu close.
 */
function closeMenu() {
  hamburger.classList.remove("active");
  navBar.classList.remove("active");
}

/*Following code is for the posts in posts page*/
const posts = document.getElementsByClassName("card");

function resetCardsColor() {
  [...posts].forEach((card, indx) => {
    const buttonId = `color-button_${indx}`;
    // console.log(buttonId);
    const colorButton = document.getElementById(buttonId);
    card.style.background = "#151820";
  });
}

[...posts].forEach((card, indx) => {
  const buttonId = `color-button_${indx}`;
  // console.log(buttonId);
  const colorButton = document.getElementById(buttonId);
  colorButton.addEventListener("click", (e) => {
    resetCardsColor();
    card.style.background = ` rgb(${Math.random() * 255}, ${
      Math.random() * 255
    }, ${Math.random() * 255})`;
  });
});
