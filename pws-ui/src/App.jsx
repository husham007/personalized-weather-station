import LoginPage from "./components/organisms/LoginPage.jsx";
import SignUpPage from "./components/organisms/SignUpPage.jsx";
import Navbar from "./components/molecules/Navbar.jsx";
import Footer from "./components/organisms/Footer.jsx";
import Contact from "./components/organisms/Contact.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
