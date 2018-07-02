<?php
	error_reporting(E_ALL ^ E_NOTICE);  
	include 'AccessAllowed.php';


	try {
		$isAuthenticated = json_decode(authenticate(),TRUE);
	} catch (Exception $e) {
		echo json_encode(['error' => $e]);
		exit(1);
	}

	if(isset($isAuthenticated['error'])){
		echo json_encode(['error' => $isAuthenticated['error'] ]);
	}
	else if(isset($isAuthenticated['authUser'])){
		echo json_encode(['success' => 'gg']);
	}

?>
