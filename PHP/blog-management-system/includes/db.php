<?php
$host = "localhost";
$username = "root";
$password = "";
$dbname = "blog_db"; 

$conn = new mysqli($host, $username, $password, $dbname);

// check connection
if ($conn->connect_error) {
    die(" Connection failed:". $conn->connect_error);
}

?>