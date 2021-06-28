// Open sub navigation
document.addEventListener('click', function (event) {

	// If the clicked element does not have the .has-sub-nav class, ignore it
	if (!event.target.matches('.has-sub-nav')) return;

  // Get the sub-nav element corresponding to the clicked navigation item
  const parent = event.target.parentNode;
  const subNav = parent.querySelector('.sub-nav');

  if (subNav.classList.contains('shown')) {
    // Corresponding sub-nav element is already active
    subNav.classList.remove('shown')
  } else {
    // Remove the 'shown' class from all sub-nav elements
    const subNavs = document.querySelectorAll('.sub-nav')
    subNavs.forEach(element => element.classList.remove('shown'))
  
    // Add the 'shown' class to the sub-nav element
    subNav.classList.add('shown')
  }
});

// Close sub navigation
document.addEventListener('click', function (event) {

	// If the clicked element does not have the .bodyClick class, ignore it
	if (!event.target.matches('.bodyClick')) return;

  // Remove the 'shown' class from all sub-nav elements
  const subNavs = document.querySelectorAll('.sub-nav')
  subNavs.forEach(element => element.classList.remove('shown'))

});

// Sliders
window.addEventListener("load", onLoadFunction);

function onLoadFunction(e){
  //do the magic you want 
  onResizeFunction();// if you want to trigger resize function immediately, call it 

  window.addEventListener("resize", onResizeFunction);
}

function onResizeFunction (e) {
  var newWidth = window.innerWidth;
  var newHeight = window.innerHeight; 

  setSlider(newWidth);
}

//listen for window resize event
function setSlider(width) {
  const animalSwiper = new Swiper('.animal-slider', {
    // Optional parameters
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 0,

    hashNavigation: {
        watchState: true,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    
    breakpoints: {
      500: {
        slidesPerView: 3.5,
        centeredSlides: false
      }
    }
  });
  
  const blogSwiper = new Swiper('.blog-slider', {
    // Optional parameters
    slidesPerView: 1.25,
    centeredSlides: true,
    spaceBetween: 20,
    loop: false,

    hashNavigation: {
        watchState: true,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    
    breakpoints: {
      500: {
        slidesPerView: 3,
        centeredSlides: false
      }
    }
  });

  const circleSwiper = new Swiper('.circle-slider', {
    // Optional parameters
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 30,
    loop: false,
    initialSlide: 1,
    
    hashNavigation: {
        watchState: true,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    
    breakpoints: {
      500: {
        slidesPerView: 3,
        centeredSlides: false,
        loop: false
      }
    }
  });

  const animalSlider = document.querySelector('.animal-slider');
  const blogSlider = document.querySelector('.blog-slider');
  const circleSlider = document.querySelector('.circle-slider');

  if (width > 768) {
    animalSwiper.destroy();
    blogSwiper.destroy();
    circleSwiper.destroy();

    animalSlider.classList.add('destroyed');
    blogSlider.classList.add('destroyed');
    circleSlider.classList.add('destroyed');
  } else {
    animalSwiper.init();
    blogSwiper.init();
    circleSwiper.init();

    animalSlider.classList.remove('destroyed');
    blogSlider.classList.remove('destroyed');
    circleSlider.classList.remove('destroyed');
  }
}

// Listen to all click events on the document
document.addEventListener('click', function (event) {

	// If the clicked element does not have and is not contained by an element with the .click-me class, ignore it
	if (!event.target.closest('.navbar-toggler')) return;

	// Otherwise, do something...
  const topItems = document.querySelector('.top-bar .top-items .nav-items');
  const html = document.querySelector('html');
  topItems.classList.add('show');
  html.classList.add('nav-open');

});

// Listen to all click events on the document
document.addEventListener('click', function (event) {

	// If the clicked element does not have and is not contained by an element with the .click-me class, ignore it
	if (!event.target.closest('.mobile-close')) return;

	// Otherwise, do something...
  const topItems = document.querySelector('.top-bar .top-items .nav-items');
  const html = document.querySelector('html');
  topItems.classList.remove('show');
  html.classList.remove('nav-open');

});