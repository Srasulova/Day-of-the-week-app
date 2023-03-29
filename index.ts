const monday = document.querySelector(".monday");
const tuesday = document.querySelector(".tuesday");
const wednesday = document.querySelector(".wednesday");
const thursday = document.querySelector(".thursday");
const friday = document.querySelector(".friday");
const saturday = document.querySelector(".saturday");
const sunday = document.querySelector(".sunday");

const d = new Date();
let day = d.getDay();
console.log(day);

switch (day) {
  case 0:
    sunday?.classList.remove("hidden");
    break;

  case 1:
    monday?.classList.remove("hidden");
    break;

  case 2:
    tuesday?.classList.remove("hidden");
    break;

  case 3:
    wednesday?.classList.remove("hidden");
    break;

  case 4:
    thursday?.classList.remove("hidden");
    break;

  case 5:
    friday?.classList.remove("hidden");
    break;

  case 6:
    saturday?.classList.remove("hidden");
    break;
}
