// script.js

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayMilfbawbz(); // Display the milfbawbz.gif
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#bdb2ff', '#ffc6ff'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the happy.gif initially
function displayHappy() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the happy
    var happyImage = new Image();
    // Set the source (file path) for the happy image
    catImage.src = 'happy.gif'; // Assuming the happy image is named "happy.gif"
    // Set alternative text for the image (for accessibility)
    catImage.alt = 'happy';
    // When the happy image is fully loaded, add it to the image container
    happyImage.onload = function() {
        imageContainer.appendChild(happyImage);
    };
}

// Function to display the milfbawbz.gif
function displayMilfbawbz() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the milfbawbz
    var milfbawbzImage = new Image();
    // Set the source (file path) for the milfbawbz image
    milfbawbzImage.src = 'milfbawbz.gif'; // Assuming the milfbawbz image is named "milfbawbz.gif"
    // Set alternative text for the image (for accessibility)
    milfbawbzImage.alt = 'Milfbawbz';
    // When the milfbawbz image is fully loaded, add it to the image container
    milfbawbzImage.onload = function() {
        imageContainer.appendChild(milfbawbzImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}

// Display the happy.gif initially
displayHappy();