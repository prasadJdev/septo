const signIn = document.querySelector('#signIn-btn');
const signUp = document.querySelector('#signUp-btn');
const container = document.querySelector('.container');


signUp.addEventListener('click',()=>{
  container.classList.add('sign-up-mode');
});

signIn.addEventListener('click',()=>{
  container.classList.remove('sign-up-mode');
});


// Sign In Form Ajax with Login.php Form Validation and manipulations
$(document).ready(function() {
  $('#signIn').click(function(e) {
    e.preventDefault();
    var signIn_Name = $('#signIn_username').val();
    var signIn_Password = $('#signIn_password').val();
    $.ajax({
      url: 'login.php',
      type: 'POST',
      async: false,
      data: {
        'signIn': 1,
        'signIn_Name': signIn_Name,
        'signIn_Password': signIn_Password
      },
      success: function(data) {
       $('#signin_success').html(data)
      }
    });
  });
});



// Sign Up Form Ajax with Login.php Form Validation and manipulations
$(document).ready(function() {
  $('#signUp').click(function(e) {
    e.preventDefault();
    var signUp_Name = $('#signUp_username').val();
    var signUp_Email = $('#signUp_email').val();
    var signUp_Password = $('#signUp_password').val();
    $.ajax({
      url: 'login.php',
      type: 'POST',
      async: false,
      data: {
        'signUp': 1,
        'signUp_Name': signUp_Name,
        'signUp_Email': signUp_Email,
        'signUp_Password': signUp_Password
      },
      success: function(d) {
        alert("Successfully");
       $('#signup_success').html(d);
      
      }
    });
  });
});