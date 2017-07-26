<?php
	require_once'../zajednickeFunkcije.php';
	
function login($username, $password) {
		global $conn;
		$message = array();
		$password = trim($password);
		$hashPwd = md5($password);
		if(checkLogin($username, $hashPwd)) {
			$token = sha1(uniqid());
			$query = 'UPDATE user SET token = ? WHERE username = ?';
			$result = $conn->prepare($query);
			$result->bind_param('ss', $token, $username);
			$result->execute();
			$message['token'] = $token;
			
			if(!checkIfPorudzbinaExists($token)){
				createPorudzbina($token);				
			}
			
			} else {
				$message = 'Pogresno korisnicko ime i/ili sifra';
				header('HTTP/1.1 404 Unauthorized');
		}
		return json_encode($message);
}

function checkLogin($username, $password){
	global $conn;
	$query = 'SELECT EXISTS(SELECT * FROM user WHERE username=? AND password=?)';
	$statement = $conn->prepare($query);
	$statement->bind_param("ss", $username, $password);
	$statement->execute();
	$result = $statement->get_result()->fetch_row()[0];
	if($result == 1){
		return true;
	} else {
		return false;
	}
}

function checkIfuserExists($username){
	global $conn;
	$query = 'SELECT EXISTS(SELECT * FROM user WHERE username=?)';
	$statement = $conn->prepare($query);
	$statement->bind_param("s", $username);
	$statement->execute();
	$result = $statement->get_result()->fetch_row()[0];
	if ($result == 1){
		return true;
	} else {
		return false;
	}
}
function register($username, $password, $email, $adresa){
	global $conn;
	$message = array();
	$errors = '';
	if (checkIfuserExists($username)){
		$errors .= 'Korisnik postoji u bazi.';
	}
	if (strlen($password) < 6){
		$errors .= 'Sifra mora imati najmanje 6 karaktera.';
	}
	if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
		$errors .= 'Email adresa nije ispravna';
	}
	if ($errors ==''){
		$query = 'INSERT INTO user (username, password, email, adresa, role_id) VALUES (?, ?, ?, ?, ?)';
		$statement = $conn->prepare($query);
		$password = trim($password);
		$hashPwd = md5($password);
		$role_id = 1;
		$statement->bind_param('ssssi', $username, $hashPwd, $email, $adresa, $role_id);
		if ($statement->execute()){
				$token = sha1(uniqid());
				$queryTwo = 'UPDATE user SET token=? WHERE username=?';
				$result = $conn->prepare($queryTwo);
				$result->bind_param('ss', $token, $username);
				$result->execute();
				$message['token'] = $token;
		} else {
			$message['error'] = 'Problem sa konekcijom.';
			header('HTTP/1.1 400 Bad Request');
		}
	} else {
		header('HTTP/1.1 400 Bad Request');
		$message['error'] = json_encode($errors);
	}
	return json_encode($message);
}
function getUser($token){
	$token = str_replace('"', "", $token);
    global $conn;
    $query = 'SELECT user_id, username, password, adresa, email, role_id,
      role AS role_name
      FROM user
      WHERE user.token = ?';
    $user = array();
    $statement = $conn->prepare($query);
    $statement->bind_param('i', $token);
    if ($statement->execute()) {
        $result = $statement->get_result();
        while ($row = $result->fetch_assoc()) {
            $user['user_id'] = $row['user_id'];
            $user['username'] = $row['username'];
            $user['password'] = $row['password'];
            $user['adresa'] = $row['adresa'];
            $user['email'] = $row['email'];
            $user['role_id'] = $row['role_id'];
            $user['role_name'] = $row['role_name'];
        }
    }
    return json_encode($user);
}

?>