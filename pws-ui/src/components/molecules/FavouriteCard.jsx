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
import useWeatherStore from "../../store/authStore/useWeatherStore";
import WeatherCard from "../atoms/WeatherCard";

const FavouriteCard = ({ favourite }) => {
  const [weatherData, setWeatherData] = useState(null);
  const Open_Weather_API = import.meta.env.VITE_OPEN_WEATHWER_API_KEY;
  const { setNotification } = useAuthStore();
  const { deleteFavourite } = useWeatherStore();

  useEffect(() => {
    const WeatherUrlCor = `https://api.openweathermap.org/data/2.5/forecast?lat=${favourite.coordinates[0]}&lon=${favourite.coordinates[1]}&appid=${Open_Weather_API}&units=metric`;

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
          marginTop: "6rem",
        }}
      >
        <Grid textAlign={{ xs: "center", sm: "left" }}>
          {weatherData && (
            <Card
              sx={{
                borderRadius: 2,
                padding: "2rem 1rem 1rem 2rem",
                backgroundColor: "rgba(0, 0, 0, 0.1)",
              }}
            >
              <WeatherCard weatherData={weatherData} />

              {/* <Button size="small">Add to Home</Button> */}
              <Button
                size="small"
                onClick={handleDelete}
                sx={{
                  color: "white",
                  p: "0.6rem",
                  px: "1rem",

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
                Delete
              </Button>
            </Card>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default FavouriteCard;
