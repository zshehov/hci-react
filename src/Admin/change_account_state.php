<?php
	
	$host = "localhost";
	$db = "web";
	$user = "user";
	$pass = "asdf";

	$data = json_decode(file_get_contents('php://input'), true);
	$userName = $data['userName'];
	$newAccountState = $data['newState'];
	$newSiteState = $data['newState'] == 'enabled' ? 'running' : 'frozen';


	try{
		$query = 'UPDATE users JOIN user_sites ON users.userId=user_sites.userId SET users.accountState=?, user_sites.state=? where users.user=?';
		$conn = new PDO ("mysql:host=$host;dbname=$db;port=3306;charset=utf8",$user,$pass);
		$conn->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
		$stmt = $conn->prepare($query);
		$stmt->execute([$newAccountState,$newSiteState,$userName]);

		echo json_encode(["accountState" => $newAccountState]); 

	}catch( Exception $e){

	}

?>