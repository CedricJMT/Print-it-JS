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


//-------------//



//selection dans le DOM des éléments HTML//
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");

//index de l'image actuelle//
let currentSlideIndex = 0;

//fonctions//
function showNextSlide() {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    updateSlide();
}

function showPreviousSlide() {
    currentSlideIndex = currentSlideIndex - 1;
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    updateSlide();
}

function updateSlide(){
	const slide = slides[currentSlideIndex]
	bannerImg.src = `./assets/images/slideshow/${slide.image}`;
	tagLine.innerHTML = slide.tagLine;
}

//comportement des fléches//
arrowLeft.addEventListener("click", showPreviousSlide);
arrowRight.addEventListener("click", showNextSlide);

//1ere image au chargement page//
updateSlide();


