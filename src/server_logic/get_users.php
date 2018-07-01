<?php
	include './AccessAllowed.php';

	$host = "localhost";
	$db = "web";
	$user = "user";
	$pass = "asdf";

	$usersList = [];
	$isAuthenticated = json_decode(authenticate(), TRUE);

	if(isset($isAuthenticated['error'])){
		echo $isAuthenticated['error'];
	}
	else if(isset($isAuthenticated['authUser'])){

		$getUsers = 'Select user from users where type!="admin" ';
		try{

			$conn = new PDO ("mysql:host=$host;dbname=$db;port=3306;charset=utf8",$user,$pass);
			$conn->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
			$stmt = $conn->prepare($getUsers);
			$stmt->execute();


				if($stmt->rowCount() == 0){

					echo ' { "info" : "User still doesn\'t have a plan (in life)"} ';

				}else {

					$users = $stmt->fetchAll();

					for ($i = 0; $i < count($users) ; $i++) { 
						array_push($usersList, '{"userName": "' . $users[$i]['user'] . '"}');
					}

		   			 echo json_encode($usersList);
				}
		}catch(PDOException $e){
			echo "DB Connection failure: " . $e->getMessage();
		}
	}else{

	}

?>