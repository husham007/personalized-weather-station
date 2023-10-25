import LoginPage from "./components/organisms/LoginPage.jsx";
import SignUpPage from "./components/organisms/SignUpPage.jsx";
import Navbar from "./components/organisms/Navbar.jsx";
import Footer from "./components/organisms/Footer.jsx";
import Contact from "./components/organisms/Contact.jsx";
import UserProfile from "./components/organisms/UserProfile.jsx";
import { Routes, Route, useActionData } from "react-router-dom";
import { Box, CssBaseline, Container } from "@mui/material";
import "./App.css";
import Home from "../src/components/organisms/Home.jsx";
import NotificationSnackBars from "./components/molecules/NotificationSnackBars.jsx";
import useAuthStore from "./store/authStore/useAuthStore.js";
useAuthStore;

function App() {
  const { notification } = useAuthStore();

  return (
    <>
      <NotificationSnackBars
        open={notification.open}
        autoHideDuration={2000}
        message={notification.message}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <CssBaseline />
        <Navbar />
        {/* <Container component="main" sx={{ mb: 20 }}> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
        {/* </Container> */}
        <Footer />
      </Box>
    </>
  );
}

export default App;
