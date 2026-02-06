'use strict';

// Function to display the current date and time
function displayCurrentDateTime() {
    const currentDate = new Date();
    const options = {  
        year: 'numeric',  
        month: '2-digit',  
        day: '2-digit',  
        hour: '2-digit',  
        minute: '2-digit',  
        second: '2-digit',  
        timeZone: 'UTC',  
        hour12: false  
    };
    const formattedDate = currentDate.toLocaleString('sv-SE', options);
    document.getElementById('current-datetime').innerText = formattedDate;
}

// Function to initialize the birthday page
function initBirthdayPage() {
    displayCurrentDateTime();
    setInterval(displayCurrentDateTime, 1000); // Update every second
}

// Call the initialization function when the document is ready
document.addEventListener('DOMContentLoaded', initBirthdayPage);
