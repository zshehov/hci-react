<?php
	include 'AccessAllowed.php';
	require 'common.php';
	
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

		$dir = $users_dir .$_GET['userName'] . "/sites/" . $_GET['siteUrl'];
		exec($scripts_dir . "json-the-tree.sh " . $dir, $files);
		echo json_encode($files); 
	}
?>
