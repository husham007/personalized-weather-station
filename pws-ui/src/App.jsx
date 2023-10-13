import { useState } from "react";
import SignIn from "./components/molecules/SignIn.jsx";

import LoginPage from "./components/molecules/LoginPage.jsx";
import SignUpPage from "./components/molecules/SignUpPage.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Vite + React</h1>
      </div>
      {/* <SignIn /> */}
      <LoginPage />
      <SignUpPage />
    </>
  );
}

export default App;
