<?php
// GET METHOD

// if ($_SERVER["REQUEST_METHOD"] == "GET") {
//     // Checking if name parameter is set
//     if (isset($_GET['name'])) {
//         $user_name = htmlspecialchars($_GET['name']);
//         echo"Hello, $user_name! <br>";
// } else {
//     echo "Name is not set! <br>";
// }
// }
// // POST METHOD

// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     // Check if the name parameter is set
//     if (isset($_POST['name'])) {
//         $user_name = htmlspecialchars($_POST['name']);
//         echo "Hello, $user_name! <br>";
//     } else{
//         echo "name is not set! <br>";
//     }
// }

// if ($_SERVER["REQUEST_METHOD"] === "POST" ) {
//     if (isset($_POST['name']));
//     $name = htmlspecialchars($_POST['name']);
//     if(!empty($name)) {
//         echo "Hello $name! <br>";
//     }else {
//         echo "Name can not be empty! <br>";
//     }
// } else {
//     echo "Name is not set! <br>";
// } 

// Contact Form Processing
if ($_SERVER["REQUEST_METHOD"] === 'POST') {
    // get and sanitize the form inputs
    $name = sanitize_input($_POST['name']);
    $email = sanitize_input($_POST['email']);
    $message = sanitize_input($_POST['message']);
    // send form data via email or store in db
    $to = "khalidshukrialasow@gmail.com";
    $subject = "New Contact Form Submission";

    $body = "Name. " . $name . "\n";
    $body .= "Email. " . $email . "\n";
    $body .= "Message. " . $message . "\n";

    if (mail($to, $subject, $body)) {
    // Save in Database
        echo "Thank you for your message";
    } else {
        echo "There was an Error sending your message.Please try again later";
    }
}
// create a helper method to sanitize the form data
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}