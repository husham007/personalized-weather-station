import axios from "axios";

const axiosClientWeather = axios.create({
  baseURL:
    (import.meta.env.VITE_BE_URL_WEATHER || "") + "/api/weather/favourites",
  withCredentials: true,
  credentials: "include",
});
export default axiosClientWeather;
