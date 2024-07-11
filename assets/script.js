
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const banner = document.getElementById("img");
let courrentSlide = 0
let tagLineContent = document.getElementById("tagLine")
const dots = document.getElementById("dots")

//////////////////////// slides ARROWS ///////////////////////

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

document.addEventListener("DOMContentLoaded", createDots);

const updateBannerAndDots = () => {
  tagLineContent.innerHTML = slides[courrentSlide].tagLine;
  banner.src = `assets/images/slideshow/${slides[courrentSlide].image}`;
  updateDots();
};

const changeSlide = (direction) => {
  courrentSlide = (courrentSlide + direction + slides.length) % slides.length;
  updateBannerAndDots();
};

arrowLeft.addEventListener("click", () => changeSlide(-1));
arrowRight.addEventListener("click", () => changeSlide(1));

/////////////////////////// DOTS /////////////////////////////

function createDots() {
  slides.forEach((slide, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dots.appendChild(dot);
    dot.addEventListener("click", () => {
      courrentSlide = i;
      updateBannerAndDots();
    });
  });

  document.querySelectorAll(".dot")[0].classList.add("dot_selected");
}

function updateDots() {
  document.querySelectorAll(".dot").forEach((el, i) => {
    el.classList.toggle("dot_selected", i === courrentSlide);
  });
}


