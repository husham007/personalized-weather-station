import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useAuthStore from "../../store/authStore/useAuthStore";
import useWeatherStore from "../../store/authStore/useWeatherStore";
import WeatherCard from "./WeatherCard";

const WeatherGraphCard = () => {
  const { user, isLoading, setNotification } = useAuthStore();
  const { weatherData, cityName, coordinates, addFavourite } =
    useWeatherStore();

  // console.log(weatherData);

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
      {weatherData && (
        <Card
          sx={{
            borderRadius: 2,
            padding: "2rem 1rem 1rem 2rem",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
          }}
        >
          <WeatherCard weatherData={weatherData} />

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

export default WeatherGraphCard;
