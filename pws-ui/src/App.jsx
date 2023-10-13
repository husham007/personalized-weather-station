import { useState } from "react";
import SignIn from "./components/molecules/SignIn.jsx";

import Login from "./components/molecules/Login.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Vite + React</h1>
      </div>
      {/* <SignIn /> */}
      <Login />
    </>
  );
}

export default App;
