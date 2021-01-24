var htmlElem = document.querySelector('html');
var pElem = document.querySelector('p');
var imgElem = document.querySelector('img');

var bgcolorForm = document.getElementById('bgcolor');
var fontForm = document.getElementById('font');
var imageForm = document.getElementById('image');

console.log("?"+document.cookie);

if(!sessionStorage.getItem('bgcolor')) {
  populateStorage();
} else {
  setStyles();
}

function populateStorage() {
  // make it work with using session or local storage API

  setStyles();
}

function setStyles() {
    // make it work with using session or local storage API


  document.getElementById('bgcolor').value = currentColor;
  document.getElementById('font').value = currentFont;
  document.getElementById('image').value = currentImage;

  htmlElem.style.backgroundColor = '#' + currentColor;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute('src', currentImage);
}

bgcolorForm.onchange = populateStorage;
fontForm.onchange = populateStorage;
imageForm.onchange = populateStorage;