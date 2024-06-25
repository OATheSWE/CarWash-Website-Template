<?php
// Retrieve the password sent from the frontend
$password = $_POST["password"];

// Define the correct password
$correctPassword = "car-kiss@2024";

// Check if the received password matches the correct password
if ($password === $correctPassword) {
    // Password is correct
    $response = [
        "success" => "success",
        "message" => "Login successful."
    ];
} else {
    // Password is incorrect
    $response = [
        "error" => "error",
        "message" => "Incorrect password. Login failed."
    ];
}

// Send JSON response back to the frontend
header('Content-Type: application/json');
echo json_encode($response);
?>
