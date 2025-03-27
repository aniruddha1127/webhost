// Wait for the page to load
document.addEventListener('DOMContentLoaded', () => {
    // Get all car selection buttons
    const buttons = document.querySelectorAll('.select-btn');

    // Add click event to each button
    buttons.forEach(button => {
        button.addEventListener('click', showCarDetails);
    });
});

// Function to show car details in a popup
function showCarDetails(event) {
    // Get the car card that was clicked
    const card = event.target.closest('.car-card');

    // Get car name and price
    const name = card.querySelector('h3').textContent;
    const price = card.querySelector('p').textContent;

    // Create popup HTML
    const popup = `
        <div class="popup">
            <div class="popup-content">
                <h2>Car Selected!</h2>
                <p>You have selected the ${name}</p>
                <p>${price}</p>
                <button onclick="this.parentElement.parentElement.remove()">Close</button>
            </div>
        </div>
    `;

    // Add popup to page
    document.body.insertAdjacentHTML('beforeend', popup);

    // Add popup styles
    const style = `
        .popup {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1001;
        }
        .popup-content {
            background: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
        }
        .popup button {
            margin-top: 10px;
            padding: 8px 16px;
            background: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .popup button:hover {
            background: #0056b3;
        }
    `;

    // Add styles to page
    const styleElement = document.createElement('style');
    styleElement.textContent = style;
    document.head.appendChild(styleElement);
}