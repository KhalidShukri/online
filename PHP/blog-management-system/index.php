<?php
session_start();
require_once 'includes/db.php';
$sql = "SELECT p.*, u.username,c.name AS category
        FROM posts p
        JOIN users u ON p.user_id = u.id
        JOIN categories c ON p.category_id = c.id
        ORDER BY p.created_at DESC
";
$result = $conn->query($sql);
?>

<?php require_once 'includes/header.php'; ?>