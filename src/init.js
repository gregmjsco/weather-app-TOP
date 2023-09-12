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

        const searchForm = document.createElement('form');

        const locationInput = document.createElement('input');
        locationInput.setAttribute('type', 'text');
        locationInput.setAttribute('placeholder', 'Enter a location...');
        locationInput.setAttribute('id', 'locationInput');

        const submitButton = document.createElement('button');
        submitButton.setAttribute('type', 'submit');
        submitButton.textContent = 'Search';

        searchForm.appendChild(locationInput);
        searchForm.appendChild(submitButton);

        searchForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            const userInput = locationInput.value;
            fetchWeatherData(userInput);
        });


        mainContent.appendChild(searchForm);
        container.appendChild(header);
        container.appendChild(mainContent);
    }
}
