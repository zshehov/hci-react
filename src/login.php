<?php

 	$data = json_decode(file_get_contents('php://input'), true);
	$host = "localhost";
	$db = "web";
	$user = "user";
	$pass = "asdf";
	$query = "Select user,password from users where user=? and password=?";

	try{
		
		$conn = new PDO ("mysql:host=$host;dbname=$db;port=3306;charset=utf8",$user,$pass);
		$conn->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
		$stmt = $conn->prepare($query);

			if (empty($data['user'])){
				echo ' { "error" : "Please enter username"}';

			}elseif (empty($data['passwd'])) {
				echo ' { "error" : "Please enter password"} ';

			}else{
				$stmt->execute([$data['user'],hash('sha1',$data['passwd'])]);

				if($stmt->rowCount() == 0){
					echo ' { "error" : "Invalid username or password"} ';

				}else{
					$row = $stmt->fetch();
					echo json_encode($row);

				}
			}
	}catch(PDOException $e){
		echo "DB Connection failure: " . $e->getMessage();
	}

	


?>