<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE");
require ("Db.php");
class Model{

  public function addModel(){
      $postdata = file_get_contents("php://input");
      //print_r($postdata); die;
      $fileExtensions = ['jpeg','jpg','png','PNG','JPG', 'JPEG'];
      $currentDir = getcwd();
      $errors = [];
      $uploadDirectory = "/uploads/";
      error_reporting(E_ALL);
      ini_set("display_errors","On");
      $db = new Db();
      $mysqli = $db->getConnection();
      $data = json_decode($postdata);
      if(isset($data->name)){

        $_FILES['myfile'] = $data->file;
        $fileName = $data->filename;
        $fileSize = $data->filesize;
        $fileType  = $data->filetype;
        $fileExtension = strtolower(end(explode('.',$fileName)));
        $uploadPath = $currentDir . $uploadDirectory . basename($fileName);
        if (!in_array($fileExtension,$fileExtensions)) {
          $errors[] = "This file extension is not allowed. Please upload a JPEG or PNG file";
        }
        if (empty($errors)) {
            $didUpload = move_uploaded_file($fileName, $uploadPath);
            if ($didUpload) {
                echo "The file " . basename($fileName) . " has been uploaded";
            } else {
                echo "An error occurred somewhere. Try again or contact the admin";
            }
        }
        $year = isset($data->year)?$data->year:0;
        $reg = isset($data->reg_no)?$data->reg_no:0;
        $sql = "INSERT INTO model (`name`, `color`,`year`,`reg_no`,`note`,`created_at`,`manu_id`) VALUES ('$data->name', '$data->color',$year, $reg,'$data->note',NOW(), $data->manu_id)";
        $qry = $mysqli->query($sql);
        //print_r($sql); die();
      }
      $db->closeConnection();
  }

  public function deleteModel(){
      $deletedata = file_get_contents("php://input");
      $db = new Db();
      $mysqli = $db->getConnection();
      $data = json_decode($deletedata);
      $response;
      if(isset($data->model_id)){
        $sql = "delete from model where model_id = '$data->model_id'";
        $qry = $mysqli->query($sql);
        if($qry){
          $response = 'Success';
        }
      }
      $db->closeConnection();
      return $response;
  }

}


if(isset($_GET['addmodel'])){
  $model = new Model();
  $model->addModel();
}

if(isset($_GET['deletemodel'])){
  $model = new Model();
  $model->deleteModel();
}



?>
