var button1 = document.querySelector(".js-button-left");
var button2 = document.querySelector(".js-button-right");
var slideIndex = 1;
showDivs(slideIndex);


button2.addEventListener("click", function(){plusDivs(+1)})
button1.addEventListener("click", function(){plusDivs(-1)})

function plusDivs(n) {
  showDivs(slideIndex += n);

  showDivsleft(slideIndex += n);
  showDivsright(slideIndex += n);

}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("js-slider__slide--middle");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  } x[slideIndex-1].style.display = "block";
}
function showDivsleft(n) {
  var i;
  var x = document.getElementsByClassName("c-slider__slide--left");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  } x[slideIndex-1].style.display = "block";
}

function showDivsright(n) {
  var i;
  var x = document.getElementsByClassName("c-slider__slide--right");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  } x[slideIndex-1].style.display = "block";
}
