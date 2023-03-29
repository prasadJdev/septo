$(document).ready(function() {
  $('.sidenav').sidenav();
  $('.tabs').tabs();
  $('.carousel').carousel({
    numVisible: 3,
    duration: 200
  });
  $('.materialboxed').materialbox();
  $('.slider').slider({
    indicators: false
  });
});




/* Fade in Fade out Images —— Products Images*/
var ii = 1;
$(function() {
    $('.productImgs img').css('display', 'none');
    $('.img1').css('display', 'block');
    setInterval('show()', 5000);
});

$(function() {
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
