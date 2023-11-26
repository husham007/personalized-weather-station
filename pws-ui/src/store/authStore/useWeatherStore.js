import { create } from "zustand";
import axios from "axios";
import axiosClientWeather from "../../axiosClientWeather";

const useWeatherStore = create((set) => ({
  weatherData: null,
  cityName: null,
  favouriteCities: null,

  weatherAPI: async (cityName) => {
    const Open_Weather_API = import.meta.env.VITE_OPEN_WEATHWER_API_KEY;
    const WeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${Open_Weather_API}&units=metric`;
    try {
      const response = await axios.get(WeatherUrl);
      set((state) => {
        return { weatherData: response.data, cityName: cityName };
      });

      return response.data;
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
