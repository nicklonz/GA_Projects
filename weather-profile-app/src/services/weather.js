import axios from 'axios';

const API_KEY = '45457ec05edbe4ddced46b78ba6bba76';

export const fetchData = async (inputValue) => {
    const response = await axios(`https://api.openweathermap.org/data/2.5/weather?zip=${inputValue},us&units=imperial&appid=${API_KEY}`)
    return response.data;
}