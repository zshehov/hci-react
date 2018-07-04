<?php
	include 'AccessAllowed.php';

	$SERVER = 'local';

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

		if($SERVER == 'local'){
			$file_wanted_path = 'users/' . $_POST['userName'] . '/uploads/' . $_FILES['file']['name'];
		} else {
			$file_wanted_path = '/var/www/users/' . $_POST['userName'] . '/sites/' . $_POST['siteUrl'] . "/" . $_FILES['file']['name'];
		}

		if($SERVER == 'local'){
			move_uploaded_file($_FILES['file']['tmp_name'], $file_wanted_path);
		} else {
			move_uploaded_file($_FILES['file']['tmp_name'], $file_wanted_path);
			exec("sudo /var/www/html/scripts/unzip.sh " . $file_wanted_path . ' /var/www/users/' . $_POST['userName'] . '/sites/' . $_POST['siteUrl'] . "/" );
         	unlink($file_wanted_path);
		}
		

		echo json_encode(['success' => 'succeeded in uploading']);
		
	}

	


?>