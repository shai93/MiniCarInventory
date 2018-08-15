<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
require ("Db.php");
class Manufacturer{

  public function addManufacturer(){
      $postdata = file_get_contents("php://input");
      //error_reporting(E_ALL);
      //ini_set("display_errors","On");
      $db = new Db();
      $mysqli = $db->getConnection();
      $data = json_decode($postdata);
      $response;
      if(isset($data->name)){
        $sql = "INSERT INTO manufacturer (name, created_at) VALUES ('$data->name', NOW())";
        $qry = $mysqli->query($sql);
        if($qry){
          $response = 'Success';
        }
      }
      $db->closeConnection();
      return $response;
  }

  public function getManufacturer(){
      $db = new Db();
      $mysqli = $db->getConnection();
      $sql = "select * from manufacturer";
      $result = $mysqli->query($sql);
      $data = array();
      $mainArray = array();
      if($result = $mysqli->query($sql)){
        if($result->num_rows > 0){
            while($row = $result->fetch_array()){
              $data['id'] = $row['id'];
              $data['name'] = $row['name'];
              $mainArray[] = $data;
            }
            $result->free();
        }else{
            echo "No records matching your query were found.";
        }
      }else{
        echo "ERROR: Could not able to execute $sql. " . $mysqli->error;
      }
      echo json_encode($mainArray);
  }

}

if(isset($_GET['addmanufacturer'])){
  $manu = new Manufacturer();
  $manu->addManufacturer();
}

if(isset($_GET['getmanufacturer'])){
  $manu = new Manufacturer();
  $manu->getManufacturer();
}


?>
