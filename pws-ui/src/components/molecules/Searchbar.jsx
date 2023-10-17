import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const SearchBar = ({ placeholder, onChange, searchBarWidth }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <TextField
        placeholder={placeholder}
        onChange={onChange}
        sx={{
          width: searchBarWidth,
          color: "primary.main",
          fontSize: "1rem",
        }}
        size="medium"
        InputProps={{
          startAdornment: (
            <SearchIcon
              sx={{
                marginLeft: "5px",
                marginRight: "10px",
                color: "primary.main",
              }}
            />
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
