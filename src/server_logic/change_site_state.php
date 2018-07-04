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
		$newState = $data['newState'];


		$query = '';
		if ($newState == 'frozen' || $newState == 'running'){
			$query = 'update user_sites set state=? where siteUrl=? and userId=(select userId from users where user=?)';
		} else if ($newState == 'deleted'){
			$query = 'delete from user_sites where siteUrl=? and userId=(select userId from users where user=?)';
		}

		try{

			$conn = new PDO ("mysql:host=$host;dbname=$db;port=3306;charset=utf8",$user,$pass);
			$conn->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
		 
		 	$stmt = $conn->prepare($query);

		 	if ($newState == 'frozen' || $newState == 'running'){
				$stmt->execute([$newState, $siteUrl, $userName]);
				echo json_encode(["success_changed" => $siteUrl, "state" => $newState]);
			} else if ($newState == 'deleted') {
				$stmt->execute([$siteUrl, $userName]);
				exec('sudo /var/www/html/scripts/delete-site.sh ' . '/var/www/users/' . $userName . '/sites/' . $siteUrl);
				echo json_encode(["success_deleted" => $siteUrl]);
			}

			exit(0);
			
		}catch(PDOException $e){
			// probably should take care for the case where attempt to add existing entry is made
			echo "DB Connection failure: " . $e->getMessage();
			exit(1);
		}
	}

	


?>