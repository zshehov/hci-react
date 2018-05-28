<?php
	include "JWT.php";
	use Firebase\JWT\JWT;
	use  Firebase\JWT\BeforeValidException;

	
		$data = json_decode(file_get_contents('php://input'), true);
		$headers=apache_request_headers();
		$userId = $data["userId"];
		$token=$headers["Authorization"];
		$secretKey="verySecretKey";
		try{
			$decoded=JWT::decode($token,$secretKey,array('HS512'));
			$tokenUserId = $decoded->data->userName;
			if($userId==$tokenUserId){
				echo http_response_code(200);

			}else{
				echo http_response_code(401);
			}
		}catch (\Exception $e){
			//Some exception logic
		}	

?>