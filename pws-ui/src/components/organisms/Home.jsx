import React, { useState } from "react";
import { Box, Grid, CssBaseline } from "@mui/material";
import hero from "../../assets/images/hero.jpg";
import SearchBar from "../molecules/Searchbar";
import ControlledRadioButtonsGroup from "../atoms/RadioGroup";
import Map from "../atoms/Map";
import WeatherVisualization from "../atoms/WeatherGraph.jsx";
import useAuthStore from "../../store/authStore/useAuthStore.js";
const Home = () => {
  const [textQuery, setTestQuery] = useState("");
  const [radioOption, setRadioOption] = useState("city");
  const [position, setPosition] = useState([
    60.19928562367708, 24.93441320897156,
  ]);
  const { token } = useAuthStore();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      query: data.get("serachQuery"),
    });
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
      {token !== undefined && <WeatherVisualization />}
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
