import React, { useState, useEffect } from "react";
import { Box, Grid, CssBaseline } from "@mui/material";
import hero from "../../assets/images/hero.jpg";
import SearchBar from "../molecules/Searchbar";
import ControlledRadioButtonsGroup from "../atoms/RadioGroup";
import Map from "../atoms/Map";
import axios from "axios";
import WeatherGraphCard from "../atoms/WeatherGraphCard";

const Home = () => {
  const [textQuery, setTestQuery] = useState("");

  const [radioOption, setRadioOption] = useState("city");
  const [position, setPosition] = useState([
    60.19928562367708, 24.93441320897156,
  ]);
  const [cityCoOrdinates, setCityCoOrdinates] = useState();
  const [weatherData, setWeatherData] = useState(null);

  const Open_Weather_API = import.meta.env.VITE_OPEN_WEATHWER_API_KEY;
  // console.log(textQuery);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const cityName = data.get("serachQuery");

    const Geocoding_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${Open_Weather_API}`;

    axios
      .get(Geocoding_API_URL)
      .then((res) => {
        setCityCoOrdinates(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setTestQuery("");
  };

  useEffect(() => {
    const fetchData = async () => {
      const WeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${cityCoOrdinates[0].lat}&lon=${cityCoOrdinates[0].lon}&appid=${Open_Weather_API}`;

      try {
        const response = await axios.get(WeatherUrl);
        console.log(response.data);
        setWeatherData(response.data);
      } catch (error) {
        console.log(err);
      }
    };

    if (cityCoOrdinates) {
      fetchData();
    }
  }, [cityCoOrdinates]);

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
          md={6}
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
      {radioOption === "city" && <WeatherGraphCard weatherData={weatherData} />}
      <Grid
        container
        sx={{
          marginBottom: "10rem",
          marginTop: "5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingRight: "1rem",
          paddingLeft: "1rem",
        }}
      >
        <Grid item xs={12} sm={8} md={8}>
          {radioOption === "map" && (
            <Map
              draggable="yes"
              setPosition={setPosition}
              position={position}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
