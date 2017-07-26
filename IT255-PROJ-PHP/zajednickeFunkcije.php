<?php

require_once 'config.php';

function tokenToId($token)
{
    $token = str_replace('"', "", $token);
    global $conn;
    $query = 'SELECT user_id FROM user WHERE token = ?';
    $result = $conn->prepare($query);
    $result->bind_param('s', $token);
    $user_id = array();
    if ($result->execute()) {
        $result = $result->get_result();
        while ($row = $result->fetch_assoc()) {
            $user_id = $row['user_id'];
        }
        return $user_id;
    }
}

function tokenToUsn($token)
{
    $token = str_replace('"', "", $token);
    global $conn;
    $query = 'SELECT username FROM user WHERE token = ?';
    $result = $conn->prepare($query);
    $result->bind_param('s', $token);
    $user_id = array();
    if ($result->execute()) {
        $result = $result->get_result();
        while ($row = $result->fetch_assoc()) {
            $user_id = $row['user_id'];
        }
        return $user_id;
    }
}

function tokenToPorudzbina($token)
{
    $token = str_replace('"', "", $token);
    $user_id = tokenToId($token);
    global $conn;
    $query = 'SELECT porudzbine.porudzbina_id
      FROM porudzbine
      WHERE porudzbine.user_id = ?';
    $result = $conn->prepare($query);
    $result->bind_param('i', $user_id);
    $id = array();
    if ($result->execute()) {
        $result = $result->get_result();
        while ($row = $result->fetch_assoc()) {
            $user_id = $row['user_id'];
        }
        return $user_id;
    }
}
function checkIfLoggedIn($token)
{
    $token = str_replace('"', "", $token);
    global $conn;
    $query = 'SELECT EXISTS (SELECT * FROM user WHERE token = ?)';
    $statement = $conn->prepare($query);
    $statement->bind_param('s', $token);
    $statement->execute();
    $result = $statement->get_result()->fetch_row()[0];
    if ($result == 1) {
        return true;
    } else {
        return false;
    }
}
function checkIfPorudzbinaExists($token)
{
    $token = str_replace('"', "", $token);
    $user_id = tokenToId($token);
    global $conn;
    $query = 'SELECT EXISTS (SELECT * FROM porudzbine WHERE flag = 1 AND user_id = ?)';
    $statement = $conn->prepare($query);
    $statement->bind_param('i', $user_id);
    $statement->execute();
    $result = $statement->get_result()->fetch_row()[0];
    if ($result == 1) {
        return true;
    } else {
        return false;
    }
}
function createPorudzbina($token) {
    $token = str_replace('"', "", $token);
    $user_id = tokenToId($token);
    global $conn;
    $message = array();
    $query = 'INSERT INTO porudzbine (user_id, flag) VALUES (?, ?)';
    $statement = $conn->prepare($query);
    $flag = 1;
    $statement->bind_param("ii", $user_id, $flag);
    if ($statement->execute()) {
        $message['success'];
    } else {
        $message['error'];
    }
    return json_encode($message);
}
?>