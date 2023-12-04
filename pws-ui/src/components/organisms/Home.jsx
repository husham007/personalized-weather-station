import React, { useState, useEffect } from "react";
import { Box, Grid, CssBaseline } from "@mui/material";
import hero from "../../assets/images/hero.jpg";
import SearchBar from "../molecules/Searchbar";
import ControlledRadioButtonsGroup from "../atoms/RadioGroup";
import Map from "../atoms/Map";
import WeatherGraphCard from "../atoms/WeatherGraphCard";
import WeatherGraphCardCo from "../atoms/WeatherGraphCardCo";
import useWeatherStore from "../../store/authStore/useWeatherStore";

const Home = () => {
  const [city, setCity] = useState("Helsinki");
  const [textQuery, setTestQuery] = useState("");
  const [radioOption, setRadioOption] = useState("city");

  const { weatherAPI } = useWeatherStore();

  useEffect(() => {
    weatherAPI(city);
  }, [city]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const city = data.get("serachQuery");
    setCity(city);
    setTestQuery("");
  };

  const handleRadioOption = (event) => {
    setRadioOption(event.target.value);
  };

  return (
    <>
      <CssBaseline />
      <Box
        component="div"
        sx={{
          position: "relative",
          width: "100%",
          height: "17rem",
          backgroundImage: `url(${hero})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingRight: "1rem",
          paddingLeft: "1rem",
          bgcolor: "#f2f2f2",
          height: "10rem",
        }}
      >
        <Grid
          item
          xs={12}
          sm={8}
          md={7}
          textAlign={{ xs: "center", sm: "left" }}
        >
          <ControlledRadioButtonsGroup
            handleRadioOption={handleRadioOption}
            radioOption={radioOption}
          />

          {radioOption === "city" ? (
            <SearchBar
              handleSubmit={handleSubmit}
              onChange={(e) => setTestQuery(e.target.value)}
              textQuery={textQuery}
              placeholder="Enter the city name"
            />
          ) : null}
        </Grid>
      </Grid>
      {radioOption === "city" && (
        <Grid
          container
          sx={{
            marginBottom: "10rem",
            marginTop: "10rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingRight: "1rem",
            paddingLeft: "1rem",
          }}
        >
          <Grid item xs={12} sm={9} md={8} lg={8}>
            <WeatherGraphCard />
          </Grid>
        </Grid>
      )}
      {radioOption === "map" && (
        <Grid
          container
          sx={{
            marginBottom: "15rem",
            marginTop: "5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingRight: "1rem",
            paddingLeft: "1rem",
          }}
        >
          <Grid item xs={12} sm={8} md={8}>
            <>
              <Map draggable="yes" />
              <WeatherGraphCardCo />
            </>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Home;
