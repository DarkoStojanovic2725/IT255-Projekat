<?php

require_once '../zajednickeFunkcije.php';

function getPorudzbine($token){
    $user_id = tokenToId($token);
    global $conn;
    $query = 'SELECT porudzbine.porudzbina_id, porudzbine.id_slicice, slicica.broj_slicice, slicica.ime, slicica.slika, album.naziv_albuma 
	FROM porudzbine, slicica, album
	WHERE porudzbine.id_slicice = slicica.id_slicice AND porudzbine.flag = 1 AND album.id_albuma = slicica.id_albuma AND porudzbine.user_id = ?
	GROUP BY porudzbine.porudzbina_id';
    $porudzbine = array();
    if ($statement = $conn->prepare($query)) {
        $statement->bind_param('i', $user_id);
        $statement->execute();
        $result = $statement->get_result();
        while ($row = $result->fetch_assoc()) {
            $porudzbina = array();
            $porudzbina['porudzbina_id'] = $row['porudzbina_id'];
            $porudzbina['id_slicice'] = $row['id_slicice'];
            $porudzbina['broj_slicice'] = $row['broj_slicice'];
            $porudzbina['ime'] = $row['ime'];
            $porudzbina['slika'] = $row['slika'];
			$porudzbina['naziv_albuma'] = $row['naziv_albuma'];
            array_push($porudzbine, $porudzbina);
        }
    }
    $message['porudzbine'] = $porudzbine;
    return json_encode($porudzbine);
}
function dodajUKorpu($token, $id_slicice){
	$porudzbina_id = tokenToPorudzbina($token);
	$user_id = tokenToId($token);
	global $conn;
	$message = array();
	$query = 'INSERT INTO porudzbine (porudzbina_id, user_id, id_slicice, flag) VALUES (?, ?, ?, ?)';
	$statement = $conn->prepare($query);
	$flag = 1;
	$statement->bind_param("iiii", $porudzbina_id, $user_id, $id_slicice, $flag);
	if($statement->execute()){
		$message['success'];
	} else {
		$message['error'];
	}
	return json_encode($message);
}
function obrisiIzKorpe($token, $id_slicice) {
	$user_id = tokenToId($token);
	print($user_id);
	global $conn;
	$message = array();
	$query = 'DELETE FROM porudzbine WHERE user_id=? AND id_slicice=?';
	$statement = $conn->prepare($query);
	$statement->bind_param("ii", $user_id, $id_slicice);
	$statement->execute();
	if($statement->execute()){
		$message['success'];
	} else {
		$message['error'];
	}
	return json_encode($message);
}
function checkout($token){
	$token = str_replace('"', "", $token);
	$user_id = tokenToId($token);
	global $conn;
	$message = array();
	$query = 'UPDATE porudzbine SET flag = 2 WHERE porudzbine.flag = 1 AND porudzbine.user_id =?';
	$statement = $conn->prepare($query);
	$statement->bind_param("i", $user_id);
	if($statement->execute()){
		$message['success'];
	} else {
		$message['error'];
	}
	if(!checkIfPorudzbinaExists($token)){
		createPorudzbina($token);
	}
	return json_encode($message);
}

?>