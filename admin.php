<!DOCTYPE html>
<html>

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
  <script src="https://kit.fontawesome.com/ec2ebb3023.js" crossorigin="anonymous"></script>
  <!-- Custom Styles -->
  <link rel="stylesheet" href="style.css">
  <title>Hello, Admin!</title>
  <?php
  $con= mysqli_connect('fdb25.atspace.me','3455539_retinue','retinue.123');
  $db="3455539_retinue";
  mysqli_select_db($con,'3455539_retinue');
  if(isset($_POST['upload'])){
  $fileCount = count($_FILES['file']['name']);
  for ($i = 0; $i < $fileCount; $i++) { 
  
    $fileName=$_FILES['file']['name'][$i];
    move_uploaded_file($_FILES['file']['tmp_name'][$i],'upload/'.$fileName);
    $src='upload/' .$fileName; 
    
    $sql="INSERT INTO images(title,src) VALUES ('$fileName','$src')";
    if($con->query($sql) === TRUE) {
    echo('Files Uploaded Successfuly');
    }else {
    echo('Failed');
    }
    }
    }
  ?>
</head>

<body>
  <!-- Images Upload -->
  <section id="">
    <form method='post' action=' ' enctype='multipart/form-data'>
      Upload Images: <input type='file' name='file[]' multiple size='10'/>
      <input type='submit' name="upload" value='Upload'>
    </form>
  </section>
  
  
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  <script src="main.js"></script>
</body>

</html>