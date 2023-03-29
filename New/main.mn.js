$(document).ready(function() {
  $('.sidenav').sidenav();
  $('.tabs').tabs();
  $('.carousel').carousel({
    numVisible: 3,
    duration: 300,
    dist: -90
  });
  
  setInterval(() =>{
    $('.carousel').carousel('next');
  },3500);
  setInterval(() =>{
    $('.carousel').carousel('set',3);
  },21000);
});




// Fade in Fade out Images —— Products Images
var ii = 1;
$(
  function() {
    $('.productImgs img').css('display', 'none');
    $('.img1').css('display', 'block');
    setInterval('show()', 5000);
  });
  
$(
  function() {
    $('.advtImg img').css('display', 'none');
    $('.img1').css('display', 'block');
    setInterval('show()', 10000);
  });

function show() {
  $('.img' + ii).fadeOut(1000);
  ii = ii + 1;
  if (ii == 4) {
    ii = 1;
  }
  $('.img' + ii).fadeIn(1000);
}
