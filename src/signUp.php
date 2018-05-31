<?php

include "JWT.php";
use Firebase\JWT\JWT;

$data = json_decode(file_get_contents('php://input'), true);
$host = "localhost";
$db = "web";
$user = "user";
$pass = "asdf";
$query = "Select user,password,type from users where user=? and password=?";
$isUserNameUnique = "Select user from users where user=?";
$registerUser = "Insert into users (user, password, type) VALUES (?,?,?)";

try{

	$conn = new PDO ("mysql:host=$host;dbname=$db;port=3306;charset=utf8",$user,$pass);
	$conn->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	$stmt = $conn->prepare($isUserNameUnique);

	if (empty($data['user'])){
		echo ' { "error" : "Please enter username"}';

	}elseif (empty($data['password'])) {
		echo ' { "error" : "Please enter password"} ';

	}else{
		$stmt->execute([$data['user']]);

		if($stmt->rowCount() == 0){
			$stmt = $conn->prepare($registerUser);
			$stmt->execute([$data['user'],hash('sha1',$data['password']),'user']);
			echo ' { "success" : "Sign Up successful :)"} ';

		}else{

			echo ' { "error" : "Username taken"} ';
		}
	}
}catch(PDOException $e){
	echo "DB Connection failure: " . $e->getMessage();
}




?>