<?php
	include 'AccessAllowed.php';
	require "common.php";

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

		$query = 'Select state from user_sites INNER JOIN users ON user_sites.userId=users.UserId where user=? AND user_sites.siteUrl=?';
		try{

			$conn = new PDO ("mysql:host=$host;dbname=$db;port=3306;charset=utf8",$user,$pass);
			$conn->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
			$stmt = $conn->prepare($query);
			$stmt->execute([$_GET['userName'], $_GET['siteId']]);

			$dbSiteState = $stmt->fetch();

			$siteSize = shell_exec($scripts_dir . "get_site_size.sh " . $users_dir . $_GET['userName'] . "/sites/" . $_GET['siteId']);

			echo json_encode(['state' => $dbSiteState['state'], 'size' => $siteSize]);


			exit(0);
			
		}catch(PDOException $e){
			echo "DB Connection failure: " . $e->getMessage();
			exit(1);
		}
	}

?>
