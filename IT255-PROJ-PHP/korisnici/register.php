<?php
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: POST');
	header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization, Token, token, TOKEN');
	
	require 'funkcije.php';
	
	if (isset($_POST['username']) && isset($_POST['password']) && isset($_POST['email']) && isset($_POST['adresa'])){
		$username = $_POST['username'];
		$password = $_POST['password'];
		$email = $_POST['email'];
		$adresa = $_POST['adresa'];
		echo register($username, $password, $email, $adresa);
	}

?>