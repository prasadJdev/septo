// Categories Links 
$('.link').click(function(e) {
  e.preventDefault();
  $(this).parent().toggleClass('open');
  $(this).parent().siblings().removeClass('open');
});

$('document').ready(function() {
  $('.toggle').click(function() {
    $('.toggle').toggleClass('active');
    $('.navigation').toggleClass('active')
  });
});

$('document').ready(function() {
  $('.navigation').click(function() {
  });
});

