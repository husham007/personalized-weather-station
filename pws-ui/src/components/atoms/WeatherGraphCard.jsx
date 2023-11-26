import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useAuthStore from "../../store/authStore/useAuthStore";
import axiosClientWeather from "../../axiosClientWeather";
import useWeatherStore from "../../store/authStore/useWeatherStore";

const WeatherGraphCard = ({}) => {
  const { user, isLoading, setNotification } = useAuthStore();
  const { weatherData, cityName } = useWeatherStore();

  const handleFavourite = () => {
    axiosClientWeather
      .post("/", {
        cityname: cityName,
      })
      .then((res) => {
        setNotification(
          true,
          `${res.data.cityname} has added to your favourites`,
          "success"
        );
        // console.log(res.data);
      })
      .catch((err) => {
        setNotification(true, err.response.data.error, "error");
        console.log(err.response.data.error);
      });
  };

  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingRight: "1rem",
          paddingLeft: "1rem",
          height: "15rem",
          marginTop: "6rem",
        }}
      >
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          textAlign={{ xs: "center", sm: "left" }}
        >
          {weatherData ? (
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={`https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png`}
                title="green iguana"
              />
              <CardContent>
                <Typography variant="body2">
                  Weather in {weatherData.city.name}
                </Typography>
                <Typography variant="h3">
                  {Math.round(weatherData.list[0].main.temp)}°C{" "}
                </Typography>
                <Typography>
                  wind {weatherData.list[0].wind.speed} km/h
                </Typography>
              </CardContent>
              <CardActions>
                {!isLoading && user && (
                  <>
                    <Button size="small" onClick={handleFavourite}>
                      Add to favourites
                    </Button>
                  </>
                )}
                {/* <Button size="small">Learn More</Button> */}
              </CardActions>
            </Card>
          ) : null}
        </Grid>
      </Grid>
    </>
  );
};

export default WeatherGraphCard;
