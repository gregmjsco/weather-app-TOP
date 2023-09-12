const API_KEY = '734b9c9d87924d27b9590108230309';

const fetchWeatherData = () => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=london`, {mode: 'cors'})
        .then((response) =>
            // successful responce
             response.json()
        )
        .then((response) => {
            console.log(response)
        })
        .catch((err) => {
            // Error
            console.log(err);
        });
}

export default fetchWeatherData;