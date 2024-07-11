
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

//slides ARROWS
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

document.addEventListener("DOMContentLoaded",() => {
	createDots();
})
arrowLeft.addEventListener("click", () => {
	courrentSlide --
	if (courrentSlide < 0) {
		courrentSlide = slides.length -1
	} 
	tagLineContent.innerHTML = slides [courrentSlide].tagLine
	banner.src = "assets/images/slideshow/" + slides [courrentSlide].image
	updateDots();
	
})
arrowRight.addEventListener("click", () => {
	courrentSlide ++
	if (courrentSlide >= slides.length) {
		courrentSlide = 0
	} 
	tagLineContent.innerHTML = slides [courrentSlide].tagLine
	banner.src = "assets/images/slideshow/" + slides [courrentSlide].image
	updateDots();
	
})


//DOTS

function createDots() {
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("span")
			dot.classList.add("dot")
			dots.appendChild(dot)
			dot.addEventListener("click", () => {
				courrentSlide = i
				banner.src = slides[courrentSlide].image;
				Text.innerHTML = slides[courrentSlide].tagLine
				updateDots()
			})
		}
		
		let dot = document.querySelectorAll(".dot");
		dot[0].classList.add("dot_selected");
}

function updateDots() {
	document.querySelectorAll(".dot").forEach(el => {
		el.classList.remove("dot_selected")
	})
	document.querySelectorAll(".dot") [courrentSlide].classList.add("dot_selected")
}
