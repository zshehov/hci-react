<?php

include "JWT.php";
use Firebase\JWT\JWT;

$data = json_decode(file_get_contents('php://input'), true);
$host = "localhost";
$db = "web";
$user = "user";
$pass = "asdf";
$query = "Select user,password,type from users where user=? and password=?";

try{

	$conn = new PDO ("mysql:host=$host;dbname=$db;port=3306;charset=utf8",$user,$pass);
	$conn->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	$stmt = $conn->prepare($query);

	if (empty($data['user'])){
		echo ' { "error" : "Please enter username"}';

	}elseif (empty($data['passwd'])) {
		echo ' { "error" : "Please enter password"} ';

	}else{
		$stmt->execute([$data['user'],hash('sha1',$data['passwd'])]);

		if($stmt->rowCount() == 0){
			echo ' { "error" : "Invalid username or password"} ';

		}else{
			$row = $stmt->fetch();


			$tokenId    = 3;//base64_encode(mcrypt_create_iv(32));
			$issuedAt   = time();
		    $notBefore  = $issuedAt - 10;             //Adding 10 seconds
		    $expire     = $notBefore + 60;            // Adding 60 seconds
		    $serverName = "webhost"; // Retrieve the server name from config file
    		$secretKey  = "verySecretKey";
		
		    $data = [
		        'iat'  => $issuedAt,         // Issued at: time when the token was generated
		        'jti'  => $tokenId,          // Json Token Id: an unique identifier for the token
		        'iss'  => $serverName,       // Issuer
		        'nbf'  => $notBefore,        // Not before
		       // 'exp'  => $expire,           // Expire
		        'data' => [                  // Data related to the signer user
		            'userName' => $row['user'], // User name
		        	'type' => $row['type']	
		        ]
		    ];
		   

		    $jwt = JWT::encode(
		    	$data,
		    	$secretKey,
		    	'HS512'
		    );

		   	$toSend = [

		   		'jwt' => $jwt,
		   		'data' => $row
		   	];
		   	
   			echo json_encode($toSend);

		}
	}
}catch(PDOException $e){
	echo "DB Connection failure: " . $e->getMessage();
}




?>