/* global inView */
/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
window.onload = function() {
  var $target = document.querySelector('body');
  inView('.section').on('enter', function(el){
    var color = el.getAttribute('data-background-color');
    $target.style.backgroundColor = color;
  }); 
}