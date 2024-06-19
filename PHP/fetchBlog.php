<?php
// Include the database connection
include 'db.php';

$blogId = $_POST['id'];

// Query to fetch the blog with the specified ID
$query = "SELECT * FROM blogs WHERE id = $1";
$result = pg_query_params($connection, $query, array($blogId));

if ($result) {
    // Check if a blog was found
    $blog = pg_fetch_assoc($result);

    if ($blog) {
        // Encode the blog data as JSON response
        $response = [
            "status" => "success",
            "data" => $blog
        ];
    } else {
        // Blog with the specified ID not found
        $response = [
            "status" => "error",
            "message" => "Blog not found with ID: $blogId"
        ];
    }
} else {
    // Query execution failed
    $response = [
        "status" => "error",
        "message" => "Failed to fetch blog."
    ];
}


// Set content type to JSON and echo the response
header('Content-Type: application/json');
echo json_encode($response);
