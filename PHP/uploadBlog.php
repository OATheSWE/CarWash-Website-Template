<?php
// Include the database connection
include 'db.php';

// Function to convert image to base64
function convertImageToBase64($imagePath)
{
    $imageData = file_get_contents($imagePath);
    return base64_encode($imageData);
}

// Static data
$blogPosts = [
    [
        'date' => date('Y-m-d H:i:s'),  // Using current date and time
        'image' => './images/blog2.webp',  // Path to the image
        'shortDescription' => "Explore eco-conscious car wash solutions tailored for environmentally aware drivers in Denmark. Discover how sustainable practices can keep your car clean while reducing your carbon footprint.",
        'title' => "Top Eco-Friendly Car Wash Solutions for Danish Drivers",
        'content' => "
        As awareness of environmental issues grows, Danish drivers seek eco-friendly car wash options that minimize water usage and chemical waste. Here’s how you can contribute:
    
        <span class='font-semibold text-[18px]'>Embracing Sustainable Car Wash Practices:</span>
    
        <strong>1. Water-Efficient Techniques:</strong>
        - Opt for waterless or low-water car wash methods to conserve resources.
        - Use biodegradable cleaning products that are gentle on the environment.
    
        <strong>2. Solar-Powered Facilities:</strong>
        - Support car washes powered by solar energy to reduce reliance on non-renewable sources.
        - Promote green initiatives that prioritize energy efficiency and sustainability.
    
        <strong>3. Community Participation:</strong>
        - Engage in community car wash events that raise awareness about eco-friendly practices.
        - Advocate for policies that promote sustainable transportation solutions.
    
        <span class='font-semibold text-[18px]'>Conclusion</span>
    
        By choosing eco-friendly car wash solutions in Denmark, you contribute to a cleaner environment and healthier communities. Whether it’s minimizing water usage or supporting solar-powered facilities, every small step makes a difference. Embrace sustainable practices today for a greener tomorrow.
        ",
    ]
    
];


// Convert image to base64
foreach ($blogPosts as &$post) {
    $post['image'] = convertImageToBase64($post['image']);
}

// Insert data into the database
foreach ($blogPosts as $post) {
    $query = "INSERT INTO blogs (date, image, short_description, title, content) VALUES ($1, $2, $3, $4, $5)";
    $result = pg_query_params($connection, $query, [
        $post['date'],
        $post['image'],
        $post['shortDescription'],
        $post['title'],
        $post['content']
    ]);

    if (!$result) {
        echo "An error occurred.\n";
        exit;
    }
}

echo "Data inserted successfully.";
