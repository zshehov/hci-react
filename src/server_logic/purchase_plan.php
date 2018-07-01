<?php

include './AccessAllowed.php';

	
	$host = "localhost";
	$db = "web";
	$user = "user";
	$pass = "asdf";

	$isAuthenticated = json_decode(authenticate(),TRUE);


	if(isset($isAuthenticated['error'])){
		echo $isAuthenticated['error'];
	}
	else if(isset($isAuthenticated['authUser'])){
		$getUserId = 'SELECT userId from users where user=?';
		$purchasePlan = 'INSERT INTO plans (userId, plan, created, expires) VALUES (?,?,?,?)';
		$data = json_decode(file_get_contents('php://input'), true);
		try{

			$conn = new PDO ("mysql:host=$host;dbname=$db;port=3306;charset=utf8",$user,$pass);
			$conn->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
			$stmt = $conn->prepare($getUserId);
			$stmt->execute([$isAuthenticated['authUser']]);

			if( $stmt->rowCount() == 0){
				echo ' { "error" : "User not found"} ';
			}else if( $stmt->rowCount() == 1){
				$userId = $stmt->fetch()['userId'];


				$deleteOldPlan = 'DELETE from plans where userId=?';
				$stmt = $conn->prepare($deleteOldPlan);
				$stmt->execute([$userId]);
				

				$created = date('Y/m/d');
				$expires = strtotime(date("Y-m-d", strtotime($created)) . " +4 month");
				$expires = date("Y-m-d",$expires);
				$stmt = $conn->prepare($purchasePlan);
				$stmt->execute([$userId,$data['plan'],$created,$expires]);
				
				echo ' { "success" : "Plan purchased"} ';
			}
	}catch (Exception $e){
		echo ' { "error" : "Failed to purchase plan" '. $e->getMessage().'} ';
	}
}

?>