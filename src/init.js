import fetchWeatherData from "./weatherService";
// eslint-disable-next-line import/prefer-default-export
// eslint-disable-next-line import/prefer-default-export
export function initializePage() {
    const container = document.querySelector('.container');

    if (container) {
        const header = document.createElement('header');
        header.innerHTML = '<h1>Weather APP</h1>';

        const mainContent = document.createElement('div');
        mainContent.classList.add('mainContent');

        // Create a form element
        const searchForm = document.createElement('form');

        // Create an input field for the location
        const locationInput = document.createElement('input');
        locationInput.setAttribute('type', 'text');
        locationInput.setAttribute('placeholder', 'Enter a location...');
        locationInput.setAttribute('id', 'locationInput'); // You can add an ID for easier access

        // Create a submit button
        const submitButton = document.createElement('button');
        submitButton.setAttribute('type', 'submit');
        submitButton.textContent = 'Search';

        // Append input and button to the form
        searchForm.appendChild(locationInput);
        searchForm.appendChild(submitButton);

        searchForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent the default form submission
            const userInput = locationInput.value; // Get the user's input
            fetchWeatherData(userInput); // Call fetchWeatherData with the user's input
        });

        // Append the form and main content to the container
        mainContent.appendChild(searchForm);
        container.appendChild(header);
        container.appendChild(mainContent);
    }
}
