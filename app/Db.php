<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
class Db{

  private $_connection;
  private $_host = "localhost";
	private $_username = "root";
	private $_password = "shailesh";
  private $_database = "car_inventory";

  public function __construct(){
    $this->_connection = new mysqli($this->_host, $this->_username,$this->_password, $this->_database);

    // Error handling
		if(mysqli_connect_error()) {
			trigger_error("Failed to conencto to MySQL: " . mysql_connect_error(),E_USER_ERROR);
    }

  }

  public function getConnection() {
		return $this->_connection;
  }

  public function closeConnection(){
    return $this->_connection->close();
  }

  public function getAllData(){
    $mysqli = $this->getConnection();
    $sql = "SELECT m.name as manu, mo.name as model, mo.* FROM manufacturer m LEFT JOIN model mo ON mo.manu_id = m.id where mo.name is not null";
    $data = array();
    $mainArray = array();
    if($result = $mysqli->query($sql)){
      if($result->num_rows > 0){
          while($row = $result->fetch_array()){
            $data['manu'] = $row['manu'];
            $data['model_id'] = $row['model_id'];
            $data['model'] = $row['model'];
            $data['color'] = $row['color'];
            $data['year'] = $row['year'];
            $data['note'] = $row['note'];
            $data['reg_no'] = $row['reg_no'];
            $mainArray[] = $data;
          }
          $result->free();
      }else{
          echo "No records matching your query were found.";
      }
    }else{
      echo "ERROR: Could not able to execute $sql. " . $mysqli->error;
    }
    //print_r($mainArray); die;
    echo json_encode($mainArray);
  }
}

if(isset($_GET['alldata'])){
  $db = new Db();
  $db->getAllData();
}
?>
