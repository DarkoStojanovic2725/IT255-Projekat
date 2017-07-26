<?php

require_once '../zajednickeFunkcije.php';

function getSlicice(){
    global $conn;
    $message = array();
    $query = 'SELECT  slicica.id_slicice, slicica.broj_slicice, slicica.ime,slicica.slika, slicica.detalji, album.naziv_albuma
    FROM slicica, album
    WHERE slicica.id_albuma = album.id_albuma
    GROUP BY slicica.id_slicice';
    $slicice = array();
    $statement = $conn->prepare($query);
    if ($statement->execute()) {
        $result = $statement->get_result();
        while ($row = $result->fetch_assoc()) {
            $slicica = array();
            $slicica['id_slicice'] = $row['id_slicice'];
            $slicica['broj_slicice'] = $row['broj_slicice'];
            $slicica['ime'] = $row['ime'];
            $slicica['naziv_albuma'] = $row['naziv_albuma'];
			$slicica['slika'] = $row['slika'];
			$slicica['detalji'] = $row['detalji'];
            array_push($slicice, $slicica);
        }
    }
    $message['slicice'] = $slicice;
    return json_encode($message);
}

?>