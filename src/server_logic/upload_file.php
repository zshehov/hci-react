<?php
	include 'AccessAllowed.php';
	require 'common.php';

	$SERVER = 'rosetta';

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
		$file_wanted_path = "";
		$site_dir = "";
		
		
		if($_FILES['file']['error'] > 0) {
			echo json_encode(['error' => 'failed to upload']);
			exit(1);
		}

		if($SERVER == 'local'){
			$file_wanted_path = 'users/' . $_POST['userName'] . '/uploads/' . $_FILES['file']['name'];
		} else {
			$file_wanted_path = $users_dir . $_POST['userName'] . '/sites/' . $_POST['siteUrl'] . "/" . $_FILES['file']['name'];
			$site_dir =  $users_dir . $_POST['userName'] . '/sites/' . $_POST['siteUrl'];
		}

		if($SERVER == 'local'){
			move_uploaded_file($_FILES['file']['tmp_name'], $file_wanted_path);
		} else {
			exec($scripts_dir . 'cleanup-site-dir.sh ' . $site_dir);
			move_uploaded_file($_FILES['file']['tmp_name'], $file_wanted_path);
			exec($scripts_dir . 'unzip.sh ' . $file_wanted_path . ' ' . $site_dir);
			unlink($file_wanted_path);
		}
		

		echo json_encode(['success' => 'succeeded in uploading']);
		
	}

	


?>
