import React, { useState, useEffect } from "react";
import FavouriteCard from "../molecules/FavouriteCard";
import axiosClientWeather from "../../axiosClientWeather";
import axios from "axios";
import { Grid } from "@mui/material";

const Favourites = () => {
  const [userFavourites, setUserFavourites] = useState();

  useEffect(() => {
    axiosClientWeather
      .get("/")
      .then((res) => {
        console.log(res.data);
        setUserFavourites(res.data);
      })
      .catch();
  }, []);

  return (
    <>
      {userFavourites &&
        userFavourites.map((favourite) => (
          <Grid key={favourite._id}>
            <FavouriteCard favourite={favourite} />;
          </Grid>
        ))}
    </>
  );
};

export default Favourites;
