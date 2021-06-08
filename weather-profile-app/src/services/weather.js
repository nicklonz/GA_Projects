import axios from 'axios';

const API_KEY = '45457ec05edbe4ddced46b78ba6bba76';

export const fetchData = async (inputValue) => {
  const response = axios(`https://api.openweathermap.org/data/2.5/weather?zip=${inputValue},us&units=imperial&appid=${API_KEY}`)
  console.log(response);
}

