"user-strict";

let number = document.querySelectorAll(`.number`);
let rating = 0;
let array = [];
let x = [];
// Submits the Form ///

console.log(document.querySelector(`.number`).textContent);

// Add rating background color //
for (let i = 0; i < number.length; i++) {
  number[i].classList.add(`bg`);
  number[i].addEventListener(`click`, function () {
    number[i].classList.toggle(`bg`);
    number[i].classList.toggle(`color`);
    if (number[i].classList.contains(`color`)) {
      rating = number[i].textContent;
      document.querySelector(`.rating`).textContent = rating;

      // Submits //

      document.querySelector(`.btn`).addEventListener(`click`, function () {
        document.querySelector(`.container-two`).classList.remove(`hidden`);
        document.querySelector(`.container-one`).classList.add(`hidden`);
      });
    }
  });
}
