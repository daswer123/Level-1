var booking = document.querySelector(".booking-button");
var form = document.querySelector(".booking-form");


booking.addEventListener("click",function(event){
  event.preventDefault();

  form.classList.toggle("show");
})
