import { useEffect, useRef, useState } from "react";
import { useWeatherGraph } from "../../hooks/useWeatherGraph.js";
import useAuthStore from "../../store/authStore/useAuthStore.js";
import useWebSocket from "../../hooks/useWebSocket.js";
const WeatherVisualization = () => {
  //const { token } = useAuthStore();
  //const [weatherData, setWeatherData] = useState([]);
  //const canvasRef = useWeatherGraph(weatherData);
  const { readyState } = useWebSocket({
    socketUrl: "ws://localhost:8082",
  });
  console.log(readyState);
  //return <canvas ref={canvasRef} />;
  return (
    <>
      {readyState && (
        <>
          <div>Conected</div>
        </>
      )}
    </>
  );
};

export default WeatherVisualization;
