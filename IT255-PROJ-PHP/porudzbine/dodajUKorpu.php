<?php
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: POST');
	header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization, Token, token, TOKEN');
	
	require 'funkcije.php';
	
	if(isset($_SERVER['HTTP_TOKEN']) && isset($_POST['id_slicice'])){
		$token = $_SERVER['HTTP_TOKEN'];
		$id_slicice = $_POST['id_slicice'];
		echo dodajUKorpu($token, $id_slicice);
	}
	
?>