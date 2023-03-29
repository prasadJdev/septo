<?php 
  $con= mysqli_connect('fdb25.atspace.me','3455539_retinue','retinue.123','3455539_retinue');
  $db="3455539_retinue";
  mysqli_select_db($con,'3455539_retinue');
  
  // For  Sign In Validations 
  if(isset($_POST['signIn'])){
      $signIn_name = mysqli_real_escape_string($con,$_POST['signIn_Name']);
      $signIn_password = mysqli_real_escape_string($con,$_POST['signIn_Password']);
      $signIn_query = "SELECT * FROM elogin";
      $db_password = mysqli_fetch_assoc($signIn_query);
      $password = $db_password['password'];
      $pass = password_verify($signIn_password,$password);
      // Have To Verify the User 
      if ($db_password['name']===$signIn_name){
      if ($pass){
        echo("Login Successfull");
        header("Location: http://septo.atspace.cc/@dm1n/");
      }else{
        echo("Password Incorrect");
      }
      }else{
        echo("Invalid User Name ");
      }
    }
  
  // For Sign Up 
  if(isset($_POST['signUp'])){
      $signUp_name = mysqli_real_escape_string($con,$_POST['signUp_Name']);
      $signUp_email = mysqli_real_escape_string($con,$_POST['signUp_Email']);
      $signUp_password = mysqli_real_escape_string($con,$_POST['signUp_Password']);
      $spass = password_hash($signUp_password, PASSWORD_BCRYPT);
      $emailQuery = "SELECT * FROM elogin WHERE email= '$signUp_email'";
      $query = mysqli_query($con,$emailQuery);
      $emailCount = mysqli_num_rows($query);
      if ($emailCount > 0){
        echo("This Email Id Has Been Taken");
      }else {
        $signUpinsertQuery = "INSERT INTO elogin(name, email, password) VALUES ('$signUp_name', '$signUp_email', '$spass')";
        $iquery = mysqli_query($con,$signUpinsertQuery);
        echo("Successfully Signed Up ");
      }
    }
?>