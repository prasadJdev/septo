<?php 

if (!empty($_FILES)) {
  if (is_uploaded_file($_FILES['uploadFile']['tmp_name'])){
    $source_path = $_FILES['uploadFile']['tmp_name'];
    $target_path = 'upload/'.$_FILES['uploadFile']['name'];
    move_uploaded_file($source_path,$target_path);
      //echo ('Succsefully Uploaded');
    
  }
}

?>