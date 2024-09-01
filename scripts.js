// Show a message when the button is clicked
document.getElementById('messageButton').addEventListener('click', function() {
    document.getElementById('message').textContent = 'You clicked the button!';
});

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('messageInput').value;

    // Display an alert with the form information
    alert(`Thank you, ${name}! We have received your message:\n\n${message}\n\nWe will contact you at ${email}.`);

    // Clear the form
    document.getElementById('contactForm').reset();
});


// Function to append a character to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to delete the last character from the display
function deleteLast() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

// Function to evaluate the expression in the display
function calculate() {
    let expression = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(expression);
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}
