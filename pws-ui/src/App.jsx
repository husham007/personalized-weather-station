import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SignIn from "./components/molecules/SignIn.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Vite + React</h1>
      </div>
      <SignIn />
    </>
  );
}

export default App;
