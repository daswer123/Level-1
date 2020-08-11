
var link = document.querySelector(".user-link");
var login = document.querySelector(".modal-login");
var overlay = document.querySelector(".modal-overlay");
var close = document.querySelector(".close-button");
var mapButton = document.querySelector(".how-get");
var map = document.querySelector(".modal-map");
var secondClose = document.querySelector(".sectond-close");

link.addEventListener("click",function(event){

  event.preventDefault();
  login.classList.add("modal-show");
  overlay.classList.add("modal-show-over");

});


close.addEventListener("click",function(event){

  map.classList.remove("modal-show-over");
  login.classList.remove("modal-show");
  overlay.classList.remove("modal-show-over");

});

secondClose.addEventListener("click",function(event){

  map.classList.remove("modal-show-over");
  login.classList.remove("modal-show");
  overlay.classList.remove("modal-show-over");

});

overlay.addEventListener("click",function(){

  login.classList.remove("modal-show");
  overlay.classList.remove("modal-show-over");
  map.classList.remove("modal-show");

})

mapButton.addEventListener("click", function(event){

   event.preventDefault();


   map.classList.add("modal-show");
   overlay.classList.add("modal-show-over");



})
