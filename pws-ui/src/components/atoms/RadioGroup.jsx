import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function ControlledRadioButtonsGroup({
  handleRadioOption,
  radioOption,
}) {
  return (
    <FormControl sx={{ marginTop: "0.5rem" }}>
      {/* <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel> */}
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={radioOption}
        onChange={handleRadioOption}
      >
        <FormControlLabel value="city" control={<Radio />} label="By city" />
        <FormControlLabel value="map" control={<Radio />} label="By Map" />
      </RadioGroup>
    </FormControl>
  );
}
