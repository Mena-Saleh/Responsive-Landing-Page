/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/
  const sections = document.getElementsByTagName('section'); //Get all section elements in a list.
  const links = document.getElementsByClassName("menu__link"); //Get all the links in the navigation menu.
  let timer = -1; //This variable is used to achieve the hide while not scrolling functionality.

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
function isInViewPort(element)//Helper function to determine whether an element is in the viewport.
{
      const rect = element.getBoundingClientRect();
      return (rect.top >= -100 && rect.top <= 400);

}


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function buildNav()
{


  const fragment = document.createDocumentFragment(); //Create a fragment that will contain all the items of the navigation menu.
  //(Fragment is used for better performance to reduce reflow and repaint operations)
  let item; //Stores a list item.
  let link; //Stores an anchor element that contains the list item.
  for (let i = 0; i < sections.length; i++) //Loop over all the sections
  {
    item = document.createElement("li"); //Create list item.
    item.textContent = sections[i].getAttribute("data-nav"); //Retrives the text of the list item through the data attirubute of the section.
    link = document.createElement("a"); //Create anchor element.
    link.appendChild(item); //Appends the item inside the anchor.
    link.classList.add("menu__link"); //Adds a class for CSS styling
    fragment.appendChild(link); //Add the end product to the fragment.
  }
  const navList = document.getElementById("navbar__list"); //Get the UL by its respective ID.
  navList.appendChild(fragment); //Append the list items that are stored in the fragment.


}



// Add class 'active' to section when near top of viewport
function changeActiveSection() //Function to distinguish the active element.
{
let i;
for (i = 0; i < sections.length; i++) //Add active class to the element that is closest to the top of viewport
{
  if (isInViewPort(sections[i]))
  {
    sections[i].classList.add("your-active-class");
    links[i].classList.add("active__link");
    break;
  }
}

for(let j = 0; j < sections.length; j++)//Remove active class from all others.
{
  if (j!= i)//Remove active class if it is not the active section in viewport.
  {
    sections[j].classList.remove("your-active-class");
    links[j].classList.remove("active__link");
  }
}
}


// Scroll to anchor ID using scrollTO event
function addScrollBehavior()//To make the menu items act as links that scroll to their respective section.
{
for(let i = 0; i < links.length; i++) //loop over all of them to add an event listener that listens for a click to scroll to the respective section.
{
  links[i].addEventListener("click", function(event) {
  event.preventDefault(); //Prevent default functionality which is hyper referencing.
  let section = document.getElementById(links[i].textContent.substr(0,7).toLowerCase() + links[i].textContent.substr(8,1))//Get the associated section by id through the link text (the space is disregarded)
  section.scrollIntoView({behavior: "smooth"}); //Scroll to the section smoothly.
})

}
}


/**
 * End Main Functions
 * Begin Events
 *
*/
// Build menu
buildNav(); //Build the navigation menu on starting the website.
// Scroll to section on link click
addScrollBehavior(); //Add the scrolling behavior to all links on site loading.
// Set sections as active
document.addEventListener('scroll', changeActiveSection); //On scrolling, the active section is changed based on what is in the viewport.


//Extra functionality:

//Hide navigation menu when not scrolling:


function showNavWhileScrolling() //Show the navigation menu while scrolling and hide it otherwise.
{
const navBar = document.querySelector(".navbar__menu"); //Get the navigation menu.
navBar.style.display = "block"; //Make it visible
if (timer != -1) //Keep clearing the timer as long as the user is still scrolling, because every time they scroll the timer gets a new positive value.
{
  clearTimeout(timer); //Clearing it so the it can be set only when the user is done scrolling.
}

timer = setTimeout(function () //Hiding the navigation menu on scrolling with a timeout of 10s.
{
  navBar.style.display = "none";
}, 10000);
}
document.addEventListener('scroll', showNavWhileScrolling); //Show the navigation while scrolling only.

//Collabsible functionality

const collapseBtns = document.getElementsByClassName('collapse__btn');

for (let i = 0; i < sections.length; i++)//Loop over all sections.
{
    collapseBtns[i].addEventListener('click', function ()//Add an event listener that listens for a click on any collapse button, if clicked the content is either showed or hidden.

    {
    const paragraphs = sections[i].getElementsByTagName('p'); //Get all paragraphs in current section
    if (paragraphs[0].style.display === "none") //If the first one is hidden (all of them are), then show them all, otherwise hide all.
    {
      collapseBtns[i].innerHTML = "Collapse ▲"; //For styling
      for (let i = 0; i < paragraphs.length; i++) //Show all paragraphs.
      {
        paragraphs[i].style.display = "block";
      }
    }
    else
    {
      collapseBtns[i].innerHTML = "Expand ▼"; //For styling
      for (let i = 0; i < paragraphs.length; i++) //Hide all paragraphs.
      {
        paragraphs[i].style.display = "none";
      }
    }
    //For simple animations and styling.
    collapseBtns[i].style.animation = "fadeIn 0.7s";
    setTimeout(function () {
      collapseBtns[i].style.animation = "";
    } , 700);

  });
}


//Make a go to top button visible only when the user goes down.

function displayTopBtn ()
{
  const btn = document.getElementById("top__btn"); //The top button stored in a variable.
  const nav = document.querySelector(".main__hero"); //Get the header of the page to know when the user scrolls down.
  const rect = nav.getBoundingClientRect(); //Get position of the header.
  if (rect.top < -200) //If the user scrolled down from the top, show the top button, otherwise hide it.
  {
    btn.style.display = "block";
  }
  else {
    btn.style.display = "none";
  }
}

document.addEventListener('scroll', displayTopBtn); //On scrolling, the top button is either displayed or hidden based on the position of the user on the page.
