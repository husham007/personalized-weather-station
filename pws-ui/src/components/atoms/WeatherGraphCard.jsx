import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useAuthStore from "../../store/authStore/useAuthStore";
import useWeatherStore from "../../store/authStore/useWeatherStore";

const WeatherGraphCard = () => {
  const { user, isLoading, setNotification } = useAuthStore();
  const { weatherData, cityName, coordinates, addFavourite } =
    useWeatherStore();

  //   console.log(weatherData);

  const convertDay = (input) => {
    const date = new Date(input);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

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
      {weatherData ? (
        <Card
          sx={{
            borderRadius: 2,
            padding: "2rem 1rem 1rem 2rem",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            // bgcolor: "#f2f2f2",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "space-between",
              mb: {
                xs: "2rem",
                sm: "2rem",
              },
            }}
          >
            <Box sx={{}}>
              <Typography variant="body2">
                {convertDay(weatherData.list[0].dt_txt)}
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                {weatherData.city.name}
              </Typography>

              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography variant="h3">
                  {Math.round(weatherData.list[0].main.temp)}°C{" "}
                </Typography>
                <CardMedia
                  sx={{ height: 100, width: 120 }}
                  image={`https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png`}
                  title="green iguana"
                />
              </Grid>
              <Typography>
                wind {weatherData.list[0].wind.speed} km/h
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                textAlign: "center",
                flexWrap: "wrap",
                mt: {
                  xs: "2rem",
                  sm: "0",
                },
              }}
            >
              {weatherData &&
                weatherData.list &&
                weatherData.list
                  .filter(
                    (_, index) =>
                      index === 8 ||
                      index === 16 ||
                      index === 24 ||
                      index === 32 ||
                      index === 40
                  )
                  .map((ele, i) => {
                    return (
                      <Box key={i}>
                        <Typography variant="body2" sx={{}}>
                          {convertDay(ele.dt_txt)}
                        </Typography>
                        <CardMedia
                          sx={{ height: 100, width: 120 }}
                          image={`https://openweathermap.org/img/wn/${ele.weather[0].icon}@2x.png`}
                          title="green iguana"
                        />

                        <Grid>
                          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                            {Math.round(ele.main.temp)}°C{" "}
                          </Typography>
                          <Typography variant="body1">
                            {Math.round(ele.main.temp_min)}°C{" "}
                          </Typography>
                        </Grid>
                      </Box>
                    );
                  })}
            </Box>
          </Box>

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
      ) : null}
    </>
  );
};

export default WeatherGraphCard;
