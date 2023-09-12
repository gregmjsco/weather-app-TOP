/* eslint-disable camelcase */
const API_KEY = '734b9c9d87924d27b9590108230309';

const fetchWeatherData = (location) => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`, { mode: 'cors' })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json().then((data) => {
                const { location, current } = data;
                const { name } = location;
                const { temp_c, feelslike_c } = current;

                const weatherInfo = {
                    location: name,
                    temperature: temp_c,
                    realFeel: feelslike_c,
                };

                return weatherInfo;
            });
        })
        .then((weatherInfo) => {
            console.log(weatherInfo);
        })
        .catch((err) => {
            // Handle errors
            console.error(err);
        });
};

export default fetchWeatherData;