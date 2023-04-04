$("#text-rotating").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "bounceIn",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 2000,
    complete: function () {
        // Called after the entrance animation is executed.
    }
});

$(document).ready(function () {

  $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

});

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTo({behavior:"smooth"})
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  
}