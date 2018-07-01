<?php
	include 'AccessAllowed.php';
	
	$sites = [];


	$host = "localhost";
	$db = "web";
	$user = "user";
	$pass = "asdf";


	try {
		$isAuthenticated = json_decode(authenticate(),TRUE);
	} catch (Exception $e) {
		echo $e;
		http_response_code(401);
		exit(1);
	}

	if(isset($isAuthenticated['error'])){
		echo $isAuthenticated['error'];
	}
	else if(isset($isAuthenticated['authUser'])){

		$query = 'Select siteUrl from user_sites INNER JOIN users ON user_sites.userId=users.UserId where user=?';
		try{

			$conn = new PDO ("mysql:host=$host;dbname=$db;port=3306;charset=utf8",$user,$pass);
			$conn->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
			$stmt = $conn->prepare($query);
			$stmt->execute([$_GET['userId']]);

			$dbSites = $stmt->fetchAll();

			for ($i = 0; $i < count($dbSites) ; $i++) { 
				array_push($sites, '{"name": "' . $dbSites[$i]['siteUrl'] . '"}');
			}

			echo json_encode($sites);
			exit(0);
			
		}catch(PDOException $e){
			echo "DB Connection failure: " . $e->getMessage();
			exit(1);
		}
	}

?>
