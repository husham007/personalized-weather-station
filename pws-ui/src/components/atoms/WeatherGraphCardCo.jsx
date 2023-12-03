import React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import useAuthStore from "../../store/authStore/useAuthStore";
import useWeatherStore from "../../store/authStore/useWeatherStore";
import WeatherCard from "./WeatherCard";

const WeatherGraphCardCo = () => {
  const { user, isLoading, setNotification } = useAuthStore();
  const { weatherCorData, cityName, coordinates, addFavourite } =
    useWeatherStore();

  const handleFavourite = async () => {
    const response = await addFavourite(cityName, coordinates);
    if (response instanceof Error) {
      setNotification(true, response.response.data.error, "error");
    } else {
      setNotification(
        true,
        `${response.data.cityname} has added to your favourites`,
        "success"
      );
    }
  };

  return (
    <>
      {weatherCorData && (
        <Card
          sx={{
            borderRadius: 2,
            padding: "2rem 1rem 1rem 2rem",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            marginTop: "5rem",
          }}
        >
          <WeatherCard weatherData={weatherCorData} />
          {!isLoading && user && (
            <>
              <Button
                size="small"
                onClick={handleFavourite}
                sx={{
                  color: "white",
                  p: "0.6rem",

                  ml: {
                    xs: 0,
                    sm: "0.5rem",
                  },
                  mt: { xs: 2, sm: 0 },
                  mb: 2,
                  bgcolor: "black",
                  "&:hover": {
                    bgcolor: "primary.main",
                    color: "white",
                  },
                }}
              >
                Add to favourites
              </Button>
            </>
          )}
        </Card>
      )}
    </>
  );
};

export default WeatherGraphCardCo;
