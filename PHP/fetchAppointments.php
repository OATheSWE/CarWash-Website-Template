<?php
// Import database connection
require_once('db.php');

// Query to fetch all appointments
$query = "SELECT * FROM appointments";

// Perform the query
$result = pg_query($connection, $query);

if (!$result) {
    die("Query failed: " . pg_last_error());
}

// Fetch all rows into an associative array
$appointments = pg_fetch_all($result, PGSQL_ASSOC);

// Close the connection
pg_close($connection);

// Return JSON response
header('Content-Type: application/json');
echo json_encode($appointments);
?>
