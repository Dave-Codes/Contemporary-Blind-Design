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
const breakpointWidth = 1400; // Set your desired breakpoint in pixels

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
  hamburgerMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
  if (navMenu.style.display === ('none')){
  navMenu.style.display = 'flex';}
  else {
    navMenu.style.display = 'none';
  }
  }
);




    /*document.addEventListener('click', function(event) {
        // Check if the clicked element is NOT the menu itself and NOT a child of the menu
        if (!navMenu.contains(event.target) && event.target !== navMenu) {
            navMenu.style.display = 'none'; // Or add a 'hidden' class
        }
    });

    const menuToggleButton = document.getElementById('.hamburger'); // Replace with your button's ID

    menuToggleButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent this click from bubbling up to the document
        navMenu.style.display = navMenu.style.display === 'none' ? 'block' : 'none'; // Toggle visibility
    });*/