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

  weatherAPI: async (cityName) => {
    const Open_Weather_API = import.meta.env.VITE_OPEN_WEATHWER_API_KEY;

    const geoCodingCorUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${1}&appid=${Open_Weather_API}`;

    const geoCodingCityUrl = `https://api.openweathermap.org/geo/1.0/reverse?lat=${
      cityName[0]
    }&lon=${cityName[1]}&limit=${1}&appid=${Open_Weather_API}`;

    const WeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${Open_Weather_API}&units=metric`;

    const WeatherUrlCor = `https://api.openweathermap.org/data/2.5/forecast?lat=${cityName[0]}&lon=${cityName[1]}&appid=${Open_Weather_API}&units=metric`;

    try {
      if (typeof cityName === "string") {
        const response = await axios.get(WeatherUrl);
        const responseGeoCoding = await axios.get(geoCodingCorUrl);

        set({
          weatherData: response.data,
          cityName: cityName,
          coordinates: [
            responseGeoCoding.data[0].lat,
            responseGeoCoding.data[0].lon,
          ],
        });
        return response.data;
      } else {
        // console.log(cityName);
        const response = await axios.get(WeatherUrlCor);
        // const responseGeoCoding = await axios.get(geoCodingCityUrl);
        // console.log(response.data.city.name);

        set({
          weatherCorData: response.data,
          coordinates: cityName,
          cityName: response.data.city.name,
        });
        return response.data;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  addFavourite: async (cityName, coordinates) => {
    try {
      const response = await axiosClientWeather.post("/", {
        cityname: cityName,
        coordinates: coordinates,
      });

      return response;
    } catch (error) {
      console.log(error);
      return error;
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
