<?php
	if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS'){
		die();
	}
function getUsers() {
	$connection = mysqli_connect("localhost", "root", "", "vebproj") or die("Error ". mysqli_error($connection));
	$query = 'SELECT porudzbine.porudzbina_id, user.username, slicica.id_slicice, slicica.ime, album.naziv_albuma FROM porudzbine, user, slicica, album
	WHERE porudzbine.user_id=user.user_id AND porudzbine.id_slicice=slicica.id_slicice AND slicica.id_albuma=album.id_albuma AND flag = 2
	ORDER BY user.username';
	$result = mysqli_query($connection, $query) or die("Error".mysqli_error($connection));
	
	$niz = array();
	while($row = mysqli_fetch_assoc($result)){
		$niz[] = $row;
	}
	return json_encode($niz);
}
?>