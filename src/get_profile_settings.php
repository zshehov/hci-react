<?php

include 'http://localhost:80/web/exercise/AccessAllowed.php';
	
	$host = "localhost";
	$db = "web";
	$user = "user";
	$pass = "asdf";

	//$isAuthenticated = json_decode(authenticate(),TRUE);
	$isAuthenticated = ['authUser' => 'will'];

	if(isset($isAuthenticated['error'])){
		echo $isAuthenticated['error'];
	}
	else if(isset($isAuthenticated['authUser'])){

		$query = 'Select plan, created, expires from plans INNER JOIN users ON plans.userId=users.UserId where user=?';
		try{

			$conn = new PDO ("mysql:host=$host;dbname=$db;port=3306;charset=utf8",$user,$pass);
			$conn->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
			$stmt = $conn->prepare($query);
			$stmt->execute([$isAuthenticated['authUser']]);


				if($stmt->rowCount() == 0){

					echo ' { "error" : "User still doesn\'t have a plan (in life)"} ';

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