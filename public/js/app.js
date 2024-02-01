// const myElement = document.getElementById("color-button");

// myElement.addEventListener("click", function () {
//   const posts = document.getElementsByClassName("card");
//   console.log(posts);
//   [...posts].forEach(
//     (post) =>
//       (post.style.background = ` rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`)
//   );
// });

const posts = document.getElementsByClassName("card");

function resetCardsColor(){
  [...posts].forEach((card, indx) => {
    const buttonId = `color-button_${indx}`;
    // console.log(buttonId);
    const colorButton = document.getElementById(buttonId);
    card.style.background ="#151820";
  })
}

[...posts].forEach((card, indx) => {
  const buttonId = `color-button_${indx}`;
  // console.log(buttonId);
  const colorButton = document.getElementById(buttonId);
  colorButton.addEventListener("click", (e) => {
    resetCardsColor();
    card.style.background = ` rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  });
});
