<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
</head>
<body>
    <h2>Registration</h2>
    <form action="registartion_process.php" method="post">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required><br><br>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required><br><br>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required><br><br>
        <label for="confirm_password">Confirm Password</label>
        <input type="password" id="confirm_password" name="confirm_password" required><br><br>
        <input type="submit" value="submit">
    </form>
</body>
</html>