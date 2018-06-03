<?php

include "JWT.php";
use Firebase\JWT\JWT;
use Firebase\JWT\BeforeValidException;
use Firebase\JWT\ExpiredException;
use Firebase\JWT\SignatureInvalidException;


	//$data = json_decode(file_get_contents('php://input'), true);
	$headers = apache_request_headers();
	$userId = $_GET['userName'];
	$token = $headers["Authorization"];
	$secretKey = "verySecretKey";
	$sites = [];
	try{
		$decoded = JWT::decode($token,$secretKey,array('HS512'));
		$tokenUserId = $decoded->data->userName;

		if($userId == $tokenUserId){

			if($userId == "petko") {

				$sites = [
					
					'{"name": "Petkoawsum","site": "awsum-web-site.bg"}',
					'{"name": "Petkoawsu3", "site": "awsum-web-site.bg"}',

				];
			} elseif ($userId == "user") {
				$sites = [
					
					'{"name": "Userawsum","site": "awsum-web-site.bg"}',
					'{"name": "Userawsu3", "site": "awsum-web-site.bg"}',

				];
			}


		}else{
			http_send_status(401);
			exit(1);
		}
	}catch (Exception $e){
		http_send_status(401);
		// this means that something was wrong with the JWT -> expired, corrupted, idk what else
	
		exit(1);	
		//Some exception logic
	}	



/*

		"name" => "abv.bg",
		"name" => "google.com",
		"name" => "gbg.bg",
		"name" => "testing-site.org",
		"name" => "susi.bg"
		*/
	echo json_encode($sites);






?>