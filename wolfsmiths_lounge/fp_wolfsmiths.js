"use strict";

/*
    Web Fundamentals (ITEC 2351.01) - FA25
    Final Project - Wolfsmiths Lounge Website
    Group B

    Wolfsmiths Lounge
    Authors: Christina Seifert,
             Julianna Ramirez,
             LaTrivia Edwards,
             Oneida Gongora,
             Erick Mendoza
    Date started: 2025-11-03
    Date finished: 2025-11-24 

    Filename: fp_wolfsmiths.js

    JavaScript: CHRISTINA SEIFERT
*/

/* SCROLL TO TOP BUTTON */
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

