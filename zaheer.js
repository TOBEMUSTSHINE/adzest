"use strict";
// DELUXE COMPONENTS:
const buttonScrollToSection = document.querySelector(".buttonScrollTo");
const expressionSection = document.querySelector(".mentorshipDeluxeExpression");
const parentNav = document.querySelector(".navbar-nav");
buttonScrollToSection.addEventListener("click", function(JESUSCHRIST){
	// get the coordinate of the section you want to scroll to:
const theCoordinates = expressionSection.getBoundingClientRect();
// IMPLEMENTATION OF SMOOTH SCROLLING: this only works on modern browsers.
	expressionSection.scrollIntoView({
		behavior: "smooth"
	});
});

// IMPLEMENTATION OF PAGE NAVIGATION:
// OPERATION SECTION:
const operation = document.querySelector("#Services");
const desiredSection = document.querySelector(".section");
operation.addEventListener("click", function(JESUSCHRIST){
	JESUSCHRIST.preventDefault();
	const theSectionCur = desiredSection.getBoundingClientRect();
		desiredSection.scrollIntoView({
			behavior: "smooth"
		});
});

// TESTIMONIAL SECTIONS:
const testimonial = document.querySelector("#Testimonial");
const theTestimonialSection = document.querySelector(".slider");
testimonial.addEventListener("click", function(JESUSCHRIST){
	JESUSCHRIST.preventDefault();
	const theSectionCur = theTestimonialSection.getBoundingClientRect();
	theTestimonialSection.scrollIntoView({
		behavior: "smooth"
	});
	// I VIOLATED THE DRY PRINCIPLE BY REPEATING MYSELF :) USE EVENT DELEGATION !
});

// IMPLEMENTING THE TABBED COMPONENTS: 
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainerComponent = document.querySelector(".operations__tab-container"); // parent element.
const tabsContent = document.querySelectorAll(".operations__content");

//USING EVENT DELEGATION SINCE THERE ARE A LOT OF OPERATION CONTENT:
tabsContainerComponent.addEventListener("click", function(JESUSCHRIST){
	const clickedButton = JESUSCHRIST.target.closest(".operations__tab");
	if(!clickedButton) return; // ignoring an empty click:

	//implementing an INACTIVE TAB:
	tabs.forEach(t => t.classList.remove("operations__tab--active"));
		tabsContent.forEach(tc => tc.classList.remove("operations__content--active"));

		//IMPLEMENTING AN ACTIVE TAB:
	clickedButton.classList.add("operations__tab--active");
	document.querySelector(`.operations__content--${clickedButton.dataset.tab}`).classList.add("operations__content--active"); //implementing the tab component to load its content:
});

// WHEN A USER MOVES THE MOUSE OVER THE NAV LINKS:
parentNav.addEventListener("mouseover", function(JESUSCHRIST){
	if(JESUSCHRIST.target.classList.contains("nav-link")){
		const clickedLink = JESUSCHRIST.target;
			const siblingNav = clickedLink.closest(".navbar-nav").querySelectorAll(".nav-link");
				const theLogo = clickedLink.closest(".navbar-nav").querySelector("navbar-brand");
					siblingNav.forEach(bigTobe =>{
						if(bigTobe !== clickedLink) bigTobe.style.opacity = 0.2;
					});
					// theLogo.style.opacity = 0.2;
				}
});
	// WHEN A USER MOVES THE MOUSE OUT:
parentNav.addEventListener("mouseout", function(JESUSCHRIST) {
	if(JESUSCHRIST.target.classList.contains("nav-link")) {
		const clickedLink = JESUSCHRIST.target;
			const siblingNav = clickedLink.closest(".navbar-nav").querySelectorAll(".nav-link");
				const theLogo = clickedLink.closest(".navbar-nav").querySelector("navbar-brand");
					siblingNav.forEach(bigTobe => {
						if(bigTobe !== clickedLink) bigTobe.style.opacity = 100;
					});
						// theLogo.style.opacity = 100;
			}
});

// IMPLEMENTING THE SLIDES COMPONENT:
	const allTheSlides = document.querySelectorAll(".slide");
	const leftButton = document.querySelector(".slider__btn--left");
	const rightButton = document.querySelector(".slider__btn--right");
	const theDotComponent = document.querySelector(".dots");
				 //set the initial slides to ZERO:
			let currentSlider = 0;
			const maximumNumberOfSlides = allTheSlides.length;

			// THE DOTS FUNCTION:
				const createDots = function() {
					allTheSlides.forEach(function(_, i) {
						theDotComponent.insertAdjacentHTML("beforeend", `<button class="dots__dot" data-slide="${i}"></button>`); //it incremented the buttons according to the number of slides:
					});
				};
					createDots();
			// REFACTORING:
			const goToSlide = function(slide) {
					allTheSlides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide) }%)`);
			};
			goToSlide(0);
		// NEXT SLIDER COMPONENT:
		const theNextSlide = function(){
			if(currentSlider === maximumNumberOfSlides -1){
				currentSlider = 0;
					}
					currentSlider++;
			goToSlide(currentSlider);
		}; 

		// PREVIOUS SLIDER COMPONENT:
		const thePreviousSlide = function() {
			if(currentSlider === 0) {
				currentSlider = maximumNumberOfSlides -1;
			} else {
				currentSlider--;
			};
			goToSlide(currentSlider);
		};
	rightButton.addEventListener("click", theNextSlide);
	leftButton.addEventListener("click", thePreviousSlide);

		// USING LEFT & RIGHT KEYS:
		document.addEventListener("keydown", function (e) {
			if(e.key === "ArrowLeft") thePreviousSlide();
			e.key === "ArrowRight" && theNextSlide();
		});

		// IMPLEMENTING THE DOT COMPONENT:
theDotComponent.addEventListener("click", function(e) {
	if(e.target.classList.contains("dots__dot")){
		const {slide} = e.target.dataset;
		goToSlide(slide);
	};
});