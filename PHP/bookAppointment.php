<?php
// Include the database connection
include 'db.php';

// Function to generate a shorter unique identifier
function generateUniqueId($length = 20)
{
    return substr(bin2hex(random_bytes($length)), 0, $length);
}


// Retrieve posted data
$date = $_POST["date"];
$name = $_POST["name"];
$email = $_POST["email"];
$model = $_POST["model"];
$phone = $_POST["phone"];
$weight = $_POST["weight"];
$plan = $_POST["plan"];

// Generate a shorter unique identifier
$id = generateUniqueId();

// Prepare the SQL statement
$sql = "INSERT INTO appointments (id, appointment_date, customer_name, customer_email, vehicle_weight, wash_plan, customer_phone, vehicle_model)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";

// Execute the SQL statement
$result = pg_query_params($connection, $sql, array($id, $date, $name, $email, $weight, $plan, $phone, $model));

if ($result) {
    // If the execution is successful, send a success response
    echo json_encode(["status" => "success", "message" => "Appointment booked successfully. Check your mail for confirmation"]);
} else {
    // If an error occurs, send an error response
    echo json_encode(["status" => "error", "message" => "Failed to book appointment: " . pg_last_error($connection)]);
}
