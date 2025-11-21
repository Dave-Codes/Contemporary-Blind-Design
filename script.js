    window.addEventListener('scroll', function() {
        const myElement = document.querySelector('.hidden-header-block');
        if (window.scrollY > 300) { // Change 100 to your desired scroll position
            myElement.classList.add('scrolled');
        } else {
            myElement.classList.remove('scrolled');
        }
    });



    window.addEventListener('scroll', function() {
        const myElement = document.querySelector('.arrow');
        if (window.scrollY > 75) { // Change 100 to your desired scroll position
            myElement.classList.add('scrolled');
        } else {
            myElement.classList.remove('scrolled');
        }
    });


/*const menu = document.querySelector(".topnav");
let open;

function openMenu() {
  const minWidth = 768; // Example: Minimum screen width for execution
  const maxWidth = 1400; // Example: Maximum screen width for execution


if (window.innerWidth <= maxWidth) {

  if (open) {
    menu.style.display = "block";
    open = false;
  } else if (!open) {
    menu.style.display = "none";
    open = true;
  }
}
}*/


function setDisplayBasedOnScreenWidth(elementId, minWidth) {
  const element = document.getElementsByClassName(elementId);
  if (!element) {
    console.error(`Element with ID "${elementId}" not found.`);
    return;
  }

  const currentWidth = window.innerWidth;

  if (currentWidth >= minWidth) {
    element[0].style.display = 'flex';
  } else {
    element[0].style.display = 'none'; // Or any other desired display value
  }
}

const targetElementId = 'topnav'; // Replace with your element's ID
const breakpointWidth = 1650; // Set your desired breakpoint in pixels

// Initial check on page load
window.addEventListener('DOMContentLoaded', () => {
  setDisplayBasedOnScreenWidth(targetElementId, breakpointWidth);
});

// Re-check on window resize
window.addEventListener('resize', () => {
  setDisplayBasedOnScreenWidth(targetElementId, breakpointWidth);
});


const hamburgerMenu = document.querySelector('.hamburger');
const navMenu = document.querySelector('.topnav'); // Assuming you have a navigation menu



hamburgerMenu.addEventListener('click', () => {
  // hamburgerMenu.classList.toggle('active');
  // navMenu.classList.toggle('active');

  if (hamburgerMenu.classList.contains('exit')) {
    hamburgerMenu.classList.remove('exit')
    hamburgerMenu.classList.add('active');
  }
  else if (hamburgerMenu.classList.contains('active')){
    hamburgerMenu.classList.remove('active');
    hamburgerMenu.classList.add('exit');
  }
  else {
    hamburgerMenu.classList.add('active');
  }

  if (navMenu.classList.contains('exit')) {
    navMenu.classList.remove('exit')
    navMenu.classList.add('active');
  }
  else if (navMenu.classList.contains('active')){
    navMenu.classList.remove('active');
    navMenu.classList.add('exit');
  }
  else {
    navMenu.classList.add('active');
  }
  

  if (navMenu.style.display === ('none')){
    navMenu.style.display = 'flex';
  }
  else {
    navMenu.style.display = 'none';
  }

  }
);

 function callback(entries) {
   for (let i = 0; i < entries.length; i++ ) {
    entries[i].target.src = (entries[i].isIntersecting) ? entries[i].target.getAttribute('data-src') : "";
   }
}
const gifs = document.querySelectorAll('.gif');
const observer = new IntersectionObserver(callback);
for (let i = 0; i < gifs.length; i++) {
  observer.observe(gifs[i]);
}


  function setIncrementalZIndex(parentElementId) {
  const parentElement = document.getElementById(parentElementId);
  if (!parentElement) {
    console.error(`Parent element with ID "${parentElementId}" not found.`);
    return;
  }

  const childElements = parentElement.children;
  for (let i = 0; i < childElements.length; i++) {
    const child = childElements[i];
    // Ensure the element has a position property for z-index to work
    // If not already set, you might want to add it, e.g., child.style.position = 'relative';
    child.style.zIndex = i + 1; // Assign z-index starting from 1
  }
}

setIncrementalZIndex('product-scroll');


const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

const scrollContainer = document.querySelector('.scroller');

scrollContainer.addEventListener('wheel', (event) => {
  event.preventDefault(); // Prevent default vertical scrolling

  scrollContainer.scrollLeft += event.deltaY; // Adjust scroll position based on wheel movement
});