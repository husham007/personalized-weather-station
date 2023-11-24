import axios from "axios";

const axiosClientWeather = axios.create({
  baseURL: (import.meta.env.VITE_BE_URL_WEATHER || "") + "/api/weather",
  withCredentials: true,
});
export default axiosClientWeather;
