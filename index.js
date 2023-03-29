var monday = document.querySelector(".monday");
var tuesday = document.querySelector(".tuesday");
var wednesday = document.querySelector(".wednesday");
var thursday = document.querySelector(".thursday");
var friday = document.querySelector(".friday");
var saturday = document.querySelector(".saturday");
var sunday = document.querySelector(".sunday");
var d = new Date();
var day = d.getDay();
console.log(day);
switch (day) {
    case 0:
        sunday === null || sunday === void 0 ? void 0 : sunday.classList.remove("hidden");
        break;
    case 1:
        monday === null || monday === void 0 ? void 0 : monday.classList.remove("hidden");
        break;
    case 2:
        tuesday === null || tuesday === void 0 ? void 0 : tuesday.classList.remove("hidden");
        break;
    case 3:
        wednesday === null || wednesday === void 0 ? void 0 : wednesday.classList.remove("hidden");
        break;
    case 4:
        thursday === null || thursday === void 0 ? void 0 : thursday.classList.remove("hidden");
        break;
    case 5:
        friday === null || friday === void 0 ? void 0 : friday.classList.remove("hidden");
        break;
    case 6:
        saturday === null || saturday === void 0 ? void 0 : saturday.classList.remove("hidden");
        break;
}
