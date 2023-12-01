import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AirIcon from "@mui/icons-material/Air";
import WaterDropIcon from "@mui/icons-material/WaterDrop";

const WeatherCard = ({ weatherData }) => {
  //   console.log(weatherData);

  const convertDay = (input) => {
    const date = new Date(input);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  return (
    <>
      {weatherData && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
            columnGap: 10,
            rowGap: 5,
            mb: {
              xs: "2rem",
              sm: "2rem",
            },
          }}
        >
          <Box>
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
            <Box sx={{ display: "flex", columnGap: 5 }}>
              <Box sx={{ display: "flex" }}>
                <AirIcon />
                <Typography> {weatherData.list[0].wind.speed}km/h</Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <WaterDropIcon />
                <Typography> {weatherData.list[0].main.humidity}%</Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              textAlign: "center",
              flexWrap: "wrap",
              gap: 3,
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
                    index === 39
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
                          feels {Math.round(ele.main.feels_like)}°{" "}
                        </Typography>
                      </Grid>
                    </Box>
                  );
                })}
          </Box>
        </Box>
      )}
    </>
  );
};

export default WeatherCard;
