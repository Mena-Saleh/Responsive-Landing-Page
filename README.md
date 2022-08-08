# Landing Page Project

## Table of Contents

1. Project Description 
2. Usage
3. Dependencies And About The Project
4. Main Functionality
5. Extra Functionality
6. Copyrights And Acknowledgements

## Project Description 

The project's main focus is built around the idea of having a dynamiclly written web page, in which new sections are added occasionally. On adding a new section, there is automatic functionality that integrates that section into the website without any action from the user, like implementing a navigation to the new section or distinguishing the active section. This is all done through the dynamic powers of the javascript programming language.

## Usage

The main usage scenario is for the website to be updated with new sections with ease. On updating the website, the user doesn't have to add a new item in the navigation menu to their newly added section, instead it should be added automatically and it should act as an anchor to to the section that allows the user to scroll to it smoothly. The section that is in the viewport is distinguished by having a unique style compared to the others. This allows creators to enjoy a hassle free experience in which they can just focus on the content being written rather than the surroundings which are automatically handeled through this project.

## Dependencies And About The Project

To run this software, all that is required is a web browser that supports HTML, CSS and Javascript such as Google Chrome or Microsoft Edge.
No special software is required to run this code and there is no installation process, just open the index.HTML with any supporting browser software.



- Files included in the project:

    - css
    - js
    - index.html
    - README.md

- How to run the project?
    navigate to the project folder, then double click the "index.html" file, the project should immediately open in your default web browser.

- Technologies used
    - HTML5
    - CSS 3
    - JavaScript ES6

-


## Main Functionality

There are three main functionalities in this project code:

- Dynamic Navigation Menu
    
    The background idea to this is quite simple, on loading the webpage, the Javascript code scans the page for "section" elements, then proceeds to create list items that are later appended together into one fragment, this fragment ends up forming the dynamic unordered list of the navigation menu.

- Distinguish Active Section

    The section that is in the viewport while the user is scrolling gets an "Active" class which gives it a unique style that makes it stand out. The concept behind this relies on the helper function "isInViewPort()" which relies on the concept of bounding client rectangles, an event listener is added to check which section is active every time the user scrolls, and the active section gets the "Active" class and the rest don't.

- Scroll Behavior
    
    The links that are added in the navigation are retrieved, then an event listener is added to each link, the listener executes a specific function on clicking the link, the function basically prevents the default event of the anchor element, then it gets the section that is associated with the clicked link, finally it scrolls to that section using the "scrollIntoView" Javascript built in function, with smooth scrolling turned on. 

## Extra Functionality

There are three extra functionalities in this project code:

- Hide Navigation While Not Scrolling

    This functionality relies on the setTimeout function, every time the user scrolls, the navigation menu is immediatly displayed, and there is a funciton that hides it but it is waiting 2 seconds to be executed, as long as the user is scrolling, the function's delay keeps getting reset untill the user stops scrolling. On scroll stop, the function that hides the navigation menu can finally be executed when the time which is 2s finishes.

- Collabsible Sections

    Buttons are added under each section, when the respective button is clicked, it hides all the paragraphs in the respective section through the DOM and the javascript style altering functions which change the "display" property from "block" to "none" and vice versa.

- Scroll To Top Button

    Unlike other scroll to top buttons, this one is hidden by default, and it only shows up when the user scrolls down a little bit, this is done by making use of the bounding client rectangles concept once again, only this time, the position of the first header is used to determine how much the user has scrolled down into the webpage. On reaching a specific depth, the button is displayed, this button utilizies HTML anchors to scroll to the top smoothly.


## Copyrights And Acknowledgements

    The starter code for this project was provided be the Udacity team, I don't own the this part nor do I give credit to myself for it.
    The Javascript file is written only by Mena Saleh in accordance with Udacity's guidelines as a project for the web developer advanced track that is provided by them.

    - About The Author
        - Name: Mena Ashraf Mikhael Saleh
        - Email: Mena.a.saleh.2001@gmail.com
        - GitHub: https://github.com/Mena-Ibrahim
        - LinkedIn: https://www.linkedin.com/in/mena-ashraf-23b947167/

    - All rights reserved to the Udacity team, all credit for the design of the template of the project goes to them.
