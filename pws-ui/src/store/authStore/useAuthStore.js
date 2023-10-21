import { create } from "zustand";
import axios from "axios";

const AUTH_API_URL = "http://localhost:8080/api/auth";
// Create a Zustand store for authentication
const useAuthStore = create((set) => ({
  username: null,
  email: null,
  id: null,
  token: null,

  // Sign-up function
  signUp: async (userData) => {
    try {
      const response = await axios.post(`${AUTH_API_URL}/signup`, userData); // Replace with your API endpoint
      const { username, id, email, token } = response.data;
      set({ username, email, id, token });
      return { success: true, message: "Sign-up successful!" };
    } catch (error) {
      return { success: false, message: "Sign-up failed. Please try again." };
    }
  },

  // Sign-in function
  signIn: async (credentials) => {
    try {
      const response = await axios.post(`${AUTH_API_URL}/signin`, credentials); // Replace with your API endpoint
      const { username, id, email, token } = response.data;
      set({ username, id, email, token });
      return { success: true, message: "Sign-in successful!" };
    } catch (error) {
      return {
        success: false,
        message: "Sign-in failed. Please check your credentials.",
      };
    }
  },

  // Sign-out function
  signOut: () => {
    set({ user: null, token: null });
  },
}));

export default useAuthStore;
