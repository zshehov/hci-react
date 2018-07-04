<?php
	include 'AccessAllowed.php';
	
	try {
		$isAuthenticated = json_decode(authenticate(),TRUE);
	} catch (Exception $e) {
		echo $e;
		http_response_code(401);
		exit(1);
	}

	if(isset($isAuthenticated['error'])){
		echo $isAuthenticated['error'];
	} else {

		$files =[];

		$dir = "/var/www/users/" .$_GET['userName'] . "/sites/" . $_GET['siteUrl'];
		exec("/var/www/html/scripts/json-the-tree.sh " . $dir, $files);

		echo json_encode($files);
	}
?>