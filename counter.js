// Function to increment the visitor count
function incrementVisitorCount() {
    // Retrieve the current count from storage
    let count = localStorage.getItem('visitorCount');

    // If count is null or undefined, set it to 0
    if (!count) {
        count = 0;
    }

    // Increment the count
    count++;

    // Store the updated count
    localStorage.setItem('visitorCount', count);

    // Log the updated count
    console.log(`Visitor count: ${count}`);

    // Display the count on the webpage
    document.getElementById('visitorCount').textContent = count;
}

// Call the incrementVisitorCount function to increment the count
incrementVisitorCount();

// Increment the count when the page loads
window.onload = incrementVisitorCount;
