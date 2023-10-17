import LoginPage from "./components/organisms/LoginPage.jsx";
import SignUpPage from "./components/organisms/SignUpPage.jsx";
import Navbar from "./components/organisms/Navbar.jsx";
import Footer from "./components/organisms/Footer.jsx";
import Contact from "./components/organisms/Contact.jsx";
import UserProfile from "./components/organisms/UserProfile.jsx";
import { Routes, Route } from "react-router-dom";
import { Box, CssBaseline, Container } from "@mui/material";
import "./App.css";
import Home from "../src/components/organisms/Home.jsx";

function App() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <CssBaseline />
        <Navbar />
        <Container component="main" sx={{ mt: 8, mb: 20 }} maxWidth="2xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Profile" element={<UserProfile />} />
          </Routes>
        </Container>
        <Footer />
      </Box>
    </>
  );
}

export default App;
