import React, { useState, useEffect } from "react";
import { Box, Grid, CssBaseline } from "@mui/material";
import axios from "axios";

const WeatherGraphCard = ({ weatherData }) => {
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
          <div>
            {weatherData ? (
              <div className="d-flex flex-row">
                <div className="mr-6">
                  <p className="card-text-2 m-0 fw-bold">
                    Weather in {weatherData.name}
                  </p>
                  <p className="m-0">
                    {Math.round(weatherData.main.temp - 273.15)} °C{" "}
                  </p>
                  <p>wind {weatherData.wind.speed} m/s</p>
                </div>
                <div>
                  <img
                    src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                    alt=""
                  />
                </div>
              </div>
            ) : null}
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default WeatherGraphCard;
