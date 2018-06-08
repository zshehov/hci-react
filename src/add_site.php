<?php
	include 'AccessAllowed.php';

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
		exit(1);
	}

	else if(isset($isAuthenticated['authUser'])){
		$data = json_decode(file_get_contents('php://input'), true);
		$userName = $data['userName'];
		$siteUrl = $data['siteUrl'];

		$prepareQuery = 'select userId from users where user = ?';
		$query = 'insert into user_sites (userId, site_title, site_url) values ((select userId from users where user = ?), ?, ?)';
		try{

			$conn = new PDO ("mysql:host=$host;dbname=$db;port=3306;charset=utf8",$user,$pass);
			$conn->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
		 
			$stmt = $conn->prepare($query);
			$stmt->execute([$userName, $siteUrl, $siteUrl]);
			/*
			$dbSites = $stmt->fetchAll();

			for ($i = 0; $i < count($dbSites) ; $i++) { 
				array_push($sites, '{"name": "' . $dbSites[$i]['site_url'] . '", "site": "' . $dbSites[$i]['site_title'] . '"}');
			}
			*/
			echo json_encode(["success_added" => $siteUrl]);
			exit(0);
			
		}catch(PDOException $e){
			// probably should take care for the case where attempt to add existing entry is made
			echo "DB Connection failure: " . $e->getMessage();
			exit(1);
		}
	}

	


?>