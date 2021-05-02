function myfunction () {
    var nav  = document.getElementById("h-ul");
if (nav.className === "hero-ul") {
    nav.className += " active";
   
  } else {
    nav.className = "hero-ul";
      }
}