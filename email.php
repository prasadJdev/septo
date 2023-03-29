<?php 
$name = "Hello";
$subject = "Email From Atspace ";
$mailTo = "edu.mail165@gmail.com";
$mailFrom= "support@septo.ml";
$header = "From :".$mailFrom;
$txt = "You have Received this Email From".$message;
mail($mailTo,$subject,$txt,$header);
header("Location: http://septo.ml/Login/");
?>