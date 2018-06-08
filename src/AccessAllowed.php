<?php
	include "JWT.php";
	use Firebase\JWT\JWT;
	use Firebase\JWT\BeforeValidException;
	use Firebase\JWT\ExpiredException;
	use Firebase\JWT\SignatureInvalidException;

	function authenticate(){
		$userId = null;

		if($_SERVER['REQUEST_METHOD'] === 'GET'){
			$userId = $_GET['userId'];
		}else if ( $_SERVER['REQUEST_METHOD'] === 'POST'){
			$data = json_decode(file_get_contents('php://input'), true);
			$userId = $data['userName'];
		}

		$headers = apache_request_headers();
		$token = $headers["Authorization"];
		$secretKey = "verySecretKey";
		try{
			$decoded = JWT::decode($token,$secretKey,array('HS512'));
			$tokenUserId = $decoded->data->userName;
			if(!is_null($userId) && $userId == $tokenUserId){
				return '{ "authUser" : "' . $tokenUserId . '" }';
				//echo http_response_code(200);

			}else{
				echo 'userId: '. $userId . ' token: ' . $tokenUserId;
				return '{ "error" : "Access not allowed." }';
				//echo http_response_code(401);
			}
		}catch (Exception $e){
			// this means that something was wrong with the JWT -> expired, corrupted, idk what else
			// return 200 for now, and hope someone down the line handles the case
			echo http_response_code(200);
			//Some exception logic
		}

	}	

?>