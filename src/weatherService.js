/* eslint-disable camelcase */
const API_KEY = '734b9c9d87924d27b9590108230309';

const fetchWeatherData = (location) => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`, { mode: 'cors' })
        .then((response) => {
            // Check if the response status is OK (status code 200)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the JSON response and extract the relevant properties
            return response.json().then((data) => {
                const { location, current } = data;
                const { name } = location;
                const { temp_c, feelslike_c } = current;

                // Create a new object with the extracted properties
                const weatherInfo = {
                    location: name,
                    temperature: temp_c,
                    realFeel: feelslike_c,
                };

                return weatherInfo;
            });
        })
        .then((weatherInfo) => {
            // Successfully fetched and extracted data
            console.log(weatherInfo);
        })
        .catch((err) => {
            // Handle errors
            console.error(err);
        });
};

export default fetchWeatherData;