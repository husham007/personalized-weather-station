import React, { useState, useEffect } from "react";
import axios from "axios";
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

const FavouriteCard = ({ favourite }) => {
  const [weatherData, setWeatherData] = useState(null);
  const Open_Weather_API = import.meta.env.VITE_OPEN_WEATHWER_API_KEY;
  const { setNotification } = useAuthStore();
  const { deleteFavourite, favouriteCardData } = useWeatherStore();

  useEffect(() => {
    const WeatherUrlCor = `https://api.openweathermap.org/data/2.5/weather?lat=${favourite.coordinates[0]}&lon=${favourite.coordinates[1]}&appid=${Open_Weather_API}&units=metric`;

    axios
      .get(WeatherUrlCor)
      .then((res) => {
        setWeatherData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = () => {
    deleteFavourite(favourite._id);
    setNotification(true, `${favourite.cityname} has been deleted`, "success");
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
        {" "}
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          textAlign={{ xs: "center", sm: "left" }}
        >
          {weatherData && (
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                title="green iguana"
              />
              <CardContent>
                <Typography variant="body2">
                  Weather in {weatherData.name}
                </Typography>
                <Typography variant="h3">
                  {Math.round(weatherData.main.temp)}°C{" "}
                </Typography>
                <Typography>wind {weatherData.wind.speed} km/h</Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Add to Home</Button>
                <Button size="small" onClick={handleDelete}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default FavouriteCard;
