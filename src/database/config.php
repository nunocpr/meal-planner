<?php

// Starting a session
session_start();

// DATABASE CONFIG
define('SERVER', 'localhost'); // What is the server it should connect
define('USER', 'root'); // The DB username
define('PASSWORD', '');  // The DB password
define('DB', 'sooper'); // The name of the database



// FUNCTION TO SANITIZE DATA

function sanitizePost($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}


?>