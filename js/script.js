const singleSlideWrapper = document.querySelector(".single-slide-wrapper");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
const singleSlide = document.querySelectorAll(".slide");
const sliderButtonList = document.querySelector(".slide-button-list");

let slide = 0;

singleSlide.forEach((item, index) => {
  sliderButtonList.innerHTML += `<button onclick='sliderButtonClick(${index})'></button>`;
});

function sliderButtonClick(index) {
  slide = index;
  singleSlideWrapper.style.transform = `translateX(${slide * -100}%)`;
}

nextButton.addEventListener("click", () => {
  if (slide < singleSlide.length - 1) {
    slide++;
  } else {
    slide = 0;
  }
  singleSlideWrapper.style.transform = `translateX(${slide * -100}%)`;
});

prevButton.addEventListener("click", () => {
  if (slide > 0) {
    slide--;
  } else {
    slide = singleSlide.length - 1;
  }
  singleSlideWrapper.style.transform = `translateX(${slide * -100}%)`;
});
