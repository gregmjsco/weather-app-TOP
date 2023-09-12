import './styles.css';
import { initializePage } from './init';
import  fetchWeatherData from './weatherService';


const message = "Testing";

initializePage();
fetchWeatherData()

console.log(message);
