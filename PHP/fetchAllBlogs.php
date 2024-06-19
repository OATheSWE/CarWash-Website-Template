<?php
// Include the database connection
include 'db.php';

// Fetch all blogs from the articles table
$query = "SELECT * FROM blogs";
$result = pg_query($connection, $query);

if (!$result) {
    echo json_encode([
        "status" => "error",
        "message" => "Failed to fetch blogs."
    ]);
    exit;
}

// Store fetched rows in an array
$blogs = [];
while ($row = pg_fetch_assoc($result)) {
    $blogs[] = $row;
}

// Encode the array as a JSON response
$response = [
    "status" => "success",
    "data" => $blogs
];

// Set the content type to JSON and echo the response
header('Content-Type: application/json');
echo json_encode($response);
?>
