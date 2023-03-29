$('.catLink').click(function(e) {
  e.preventDefault();
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
});
var ii = 1;
$(
  function() {
    $('.productImgs img').css('display', 'none');
    $('.img1').css('display', 'block');
    setInterval('show()', 4000);
  });
$(
  function() {
    $('.advtImg img').css('display', 'none');
    $('.img1').css('display', 'block');
    setInterval('show()', 7000);
  });

function show() {
  $('.img' + ii).fadeOut(1000);
  ii = ii + 1;
  if (ii == 4) {
    ii = 1;
  }
  $('.img' + ii).fadeIn(1000);
}

// NavBar Modal 
const openModalButtons = document.querySelectorAll('[data-modal-target]');               
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');


openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.moda');
    closeModal(modal);
  });
});

overlay.addEventListener('click',()=>{
  const modal = document.querySelectorAll('.moda.active');
  modal.forEach(modal=>{
    closeModal(modal);
  });
});


function openModal(modal) {
  if (modal === null) return
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal === null) return
  modal.classList.remove('active');
  overlay.classList.remove('active');
}