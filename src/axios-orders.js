import axios from 'axios'

const instance = axios.create({
  // No deberia dejar la url aqui
  baseURL: process.env.REACT_APP_COUNTRIES || "https://restcountries.eu/rest/v2/"
});

export default instance