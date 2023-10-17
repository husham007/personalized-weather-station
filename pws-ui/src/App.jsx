import LoginPage from "./components/organisms/LoginPage.jsx";
import SignUpPage from "./components/organisms/SignUpPage.jsx";
import Navbar from "./components/organisms/Navbar.jsx";
import Footer from "./components/organisms/Footer.jsx";
import Contact from "./components/organisms/Contact.jsx";
import UserProfile from "./components/organisms/UserProfile.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";


function App() {
  return (
    <>
     
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Profile" element={<UserProfile />} />
        </Routes>
        <Footer />
      
    </>
  );
}

export default App;
