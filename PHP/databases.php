<?php

    // Database connection details
    $hostname = "localhost";
    $username = "root";
    $password = "";
    $dbname = "crud_db";

    // connection to the data base
    $conn = mysqli_connect($hostname, $username, $password, $dbname);

    // check if the connection is successful
    if (mysqli_connect_error()) {
        die("Connection failed" . mysqli_connect_error());

    }

    // CRUD functions/operations

    // Create (INSERT)
    function createUser($conn,$name,$email) {
        $query = "INSERT INTO users(name, email)  VALUES ('$name', '$email')";
        if (mysqli_error($conn, $query)) {
            echo "New user Created Successfully";

        } else {
            echo "Error:" . $query . "<br>" . mysqli_error($conn);
        }
    }
    // Read (SELECT)
    function readUser($conn) {
        $query = "SELECT * FROM users";
        $result = mysqli_query($conn, $query);
        if (mysqli_num_rows($result) > 0) {
            echo "<table>";
            echo "<tr><th>id</th><th>name</th><th>email</th></tr>";
            while ($row = mysqli_fetch_assoc($result)) {
                echo "<tr>";
                echo "<td>" . $row['id'] . "</td>";
                echo "<td>" . $row['name'] . "</td>";
                echo "<td>" . $row['email'] . "</td>";
                echo "<td>
                    <a href='?action=update&id=" . $row['id'] . "'>update</a>
                </td>";
                echo "</tr>";
            }
            echo "</tr>";
            echo "</table>";


        } else {
            echo "No Data Found. Try Again Later!";
        }
    }
    // Update (UPDATE)
    function updateUser($conn, $id, $name, $email) {
        $query = "UPDATE users SET name = '$name', email = '$email',WHERE id = '$id'";
        if (mysqli_error($conn, $query) === TRUE) {
            echo "User Updated Successfully";
    } else {
        echo "Error:" . $query . "<br>" . mysqli_error($conn);
    }
}
    // Delete (DELETE)
    function deleteUser($conn, $id) {
        $query = "DELETE FROM users WHERE id = 'id'";
        if (mysqli_error($conn, $query) === TRUE) {
            echo "User Deleted Successfully";
    } else {
        echo "Error:" . $query . "<br>" . mysqli_error($conn);
    }
}
    // Handle Actions 
    if ($_SERVER["REQUEST_METHOD"] === 'POST') {
        $action = $_POST['action'];
        $id = isset($_POST['id']) ? $_POST['id'] : null;
        $name = $_POST['name'];
        $email = $_POST['email'];
        switch ($action) {
            case 'create':
                createUser($conn, $name, $email);
                break;
            case 'update':
                updateUser($conn, $id, $name, $email);
                break;
            case 'delete':
                deleteUser($conn, $id);
                break;
        }
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD with PHP and MySQL</title>
</head>
<body>
    <h1>CRUD with PHP and MySQL</h1>
    <?php readUser($conn)?>
    <h2>
        <?php
            if ($_GET['action'] && $_GET['action'] === 'update') {
                $id = $_GET['id'];
                $query = "SELECT * FROM users WHERE id = '$id'";
                $result = mysqli_query($conn, $query);
                if (mysqli_num_rows($result) > 0) {
                    $row = mysqli_fetch_assoc($result);
                    echo "update the user";

                } else {
                    echo "User not found";
                }
            } else {
                echo "Create New User";
            }
        ?>
    </h2>
    <form action="<?php echo $_SERVER['PHP_SELF']?>" method="post">
    Name: <input type="text" name="name" required value="<?php echo isset($row['name']) ? $row['name'] :""; ?>"><br>
    Email: <input type="email" name="email" required value="<?php echo isset($row['name']) ? $row['name'] :""; ?>"><br>
    <input type="submit" value="<?php echo (isset($row['action']) && $_GET['action'] === 'update') ? 'update' :"Create"; ?>">
    </form>
    
</body>
</html>