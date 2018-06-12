<?php
	
	use Firebase\JWT\JWT;
	use Firebase\JWT\BeforeValidException;
	use Firebase\JWT\ExpiredException;
	use Firebase\JWT\SignatureInvalidException;
	error_reporting(-1);
	ini_set('display_errors', 'true');
	include './AccessAllowed.php';
	

	function isAdmin(){
		$headers = apache_request_headers();
		$token = $headers["Authorization"];
		$secretKey = "verySecretKey";
		try{
			$decoded = JWT::decode($token,$secretKey,array('HS512'));
			$userType = $decoded->data->type;
			return $userType == 'admin';
		}catch(Exception $e){
			return false;
		}
	}


	$host = "localhost";
	$db = "web";
	$user = "user";
	$pass = "asdf";

	$isAuthenticated = json_decode(authenticate(),TRUE);

	if(isset($isAuthenticated['error'])){
		echo $isAuthenticated['error'];
	}
	else if(isset($isAuthenticated['authUser']) && isAdmin() && $_SERVER['REQUEST_METHOD'] === 'GET'){
		$query = 'Select plan, created, expires from plans INNER JOIN users ON plans.userId=users.UserId where user=?';
		try{

			$conn = new PDO ("mysql:host=$host;dbname=$db;port=3306;charset=utf8",$user,$pass);
			$conn->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
			$stmt = $conn->prepare($query);
			$stmt->execute([$_GET['userListId']]);


				if($stmt->rowCount() == 0){

					echo ' { "info" : "User still doesn\'t have a plan (in life)"} ';

				}else if($stmt->rowCount() == 1){
					$row = $stmt->fetch();
					$userPlanInfo = [
				        'plan'  => $row['plan'],
				        'created'  => $row['created'], 
				        'expires'  => $row['expires'],        
		   			 ];

		   			 echo json_encode($userPlanInfo);
				}
		}catch(PDOException $e){
			echo "DB Connection failure: " . $e->getMessage();
		}
	}else{

	}
?>