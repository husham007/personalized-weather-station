import React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useAuthStore from "../../store/authStore/useAuthStore";
import useWeatherStore from "../../store/authStore/useWeatherStore";

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
          {weatherCorData && (
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={`https://openweathermap.org/img/wn/${weatherCorData.weather[0].icon}@2x.png`}
                title="green iguana"
              />
              <CardContent>
                <Typography variant="body2">
                  Weather in {weatherCorData.name}
                </Typography>
                <Typography variant="h3">
                  {Math.round(weatherCorData.main.temp)}°C{" "}
                </Typography>
                <Typography>wind {weatherCorData.wind.speed} km/h</Typography>
              </CardContent>
              <CardActions>
                {!isLoading && user && (
                  <>
                    <Button size="small" onClick={handleFavourite}>
                      Add to favourites
                    </Button>
                  </>
                )}
              </CardActions>
            </Card>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default WeatherGraphCardCo;
