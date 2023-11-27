import { create } from "zustand";
import axios from "axios";
import axiosClientWeather from "../../axiosClientWeather";

const useWeatherStore = create((set) => ({
  weatherData: null,
  weatherCorData: null,
  cityName: null,
  favouriteCities: null,

  coordinates: null,
  position: [60.19928562367708, 24.93441320897156],
  setPosition: (lat, lng) => {
    set({ position: [lat, lng] });
  },

  // weatherAPICo:

  weatherAPI: async (cityName) => {
    const Open_Weather_API = import.meta.env.VITE_OPEN_WEATHWER_API_KEY;

    const WeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${Open_Weather_API}&units=metric`;

    const WeatherUrlCor = `https://api.openweathermap.org/data/2.5/weather?lat=${cityName[0]}&lon=${cityName[1]}&appid=${Open_Weather_API}&units=metric`;

    try {
      if (typeof cityName === "string") {
        const response = await axios.get(WeatherUrl);
        set({ weatherData: response.data, cityName: cityName });
        return response.data;
      } else {
        const response = await axios.get(WeatherUrlCor);
        set({ weatherCorData: response.data, coordinates: cityName });
        return response.data;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  userFavourites: async () => {
    try {
      const response = await axiosClientWeather.get("/");
      set({ favouriteCities: response.data });
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  deleteFavourite: async (id) => {
    try {
      const res = await axiosClientWeather.delete(`/${id}`);

      const response = await axiosClientWeather.get("/");
      set({ favouriteCities: response.data });
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
}));

export default useWeatherStore;
