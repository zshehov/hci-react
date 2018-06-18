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
		exit(1);
	}


	else if(isset($isAuthenticated['authUser'])){

		if($_FILES['file']['error'] > 0) {
			echo json_encode(['error' => 'failed to upload']);
			exit(1);
		}
		move_uploaded_file($_FILES['file']['tmp_name'], $_POST['userName'] . '/uploads/' . $_FILES['file']['name']);

		echo json_encode(['success' => 'succeeded in uploading']);
		
	}

	


?>