<?php
                // db params
                $hostname = "localhost";
                $username = "root";
                $password = "";
                $dbname = "crud_db";
                // connect to database
                $conn = new mysqli($hostname, $username, $password, $dbname);

                // Check if connection is okay
                if ($conn->connect_error) {
                    die("Connection failed:".  $conn->connect_error);
                }
                // Get the input values from the form
                $name = $_POST['name'];
                $email = $_POST['email'];

                // create the insert query
                $sql = "INSERT INTO users (name, email) VALUES('$name', '$email') ";
                // execute the query
                if ($conn->query($sql) === TRUE) {
                    header("Location: index.php");

                } else {
                    echo"Error creating records.". $conn->error;
                }

                $conn->close();
?>