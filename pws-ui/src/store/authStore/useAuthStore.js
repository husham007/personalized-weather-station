import { create } from "zustand";
import axiosClient from "../../axiosClient";
import axios from "axios";

const useAuthStore = create((set) => ({
  user: undefined,
  isLoading: true,
  setIsLoading: (isLoading) => {
    set({ isLoading });
  },

  weatherData: null,

  weatherAPI: async (cityName) => {
    const Open_Weather_API = import.meta.env.VITE_OPEN_WEATHWER_API_KEY;
    const WeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${Open_Weather_API}&units=metric`;
    try {
      const response = await axios.get(WeatherUrl);
      set({ weatherData: response.data });
    } catch (error) {
      console.log(error);
    }
  },

  // Sign-in function
  signIn: async (credentials) => {
    try {
      const response = await axiosClient.post("/signin", credentials);

      set({ user: response.data, isLoading: false });

      return { status: "success", message: "Sign-in successful!" };
    } catch (error) {
      return {
        status: "error",
        message: "Sign-in failed. Please check your credentials.",
      };
    }
  },

  signOut: async () => {
    try {
      const response = await axiosClient.post("/logout");
      set((state) => {
        return { user: undefined, isLoading: false };
      });
      return { success: true, message: "Logout successful!" };
    } catch (error) {}
  },

  notification: {
    open: false,
    message: "",
    severity: "",
  },

  setNotification: (open, message, severity) =>
    set((state) => ({
      notification: { ...state.notification, open, message, severity },
    })),

  getProfile: async () => {
    try {
      // set({ isLoading: false });

      const response = await axiosClient.get(`/profile`);
      set({ user: response.data });

      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  },
}));

export default useAuthStore;
