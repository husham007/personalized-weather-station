import { useEffect, useRef, useState } from "react";
import { useWeatherGraph } from "../../hooks/useWeatherGraph.js";
import useAuthStore from "../../store/authStore/useAuthStore.js";
import useWebSocket from "../../hooks/useWebSocket.js";
const WeatherVisualization = () => {
  //const { token } = useAuthStore();
  const [weatherData, setWeatherData] = useState([2, 3, 4, 5, 6, 7, 8, 9]);
  const canvasRef = useWeatherGraph(weatherData);
  const { readyState, data, send } = useWebSocket({
    socketUrl: "ws://localhost:8082",
  });

  //return <canvas ref={canvasRef} />;
  return (
    <>
      {readyState && (
        <>
          <div
            onClick={() => {
              console.log("clicking");
              send("husham");
            }}
          >
            Conected - {data?.message}
          </div>
        </>
      )}
      <canvas ref={canvasRef} />
    </>
  );
};

export default WeatherVisualization;
