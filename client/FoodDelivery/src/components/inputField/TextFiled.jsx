import { useState } from "react";

import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const InputField = ({ label, value, setValue }) => {
  return (
    <FormControl required variant="outlined" sx={{ margin: "10px 0px" }}>
      <InputLabel htmlFor={`outlined-adornment-${label}`}>{label}</InputLabel>
      <OutlinedInput
        id={`outlined-adornment-${label}`}
        type="text"
        label={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </FormControl>
  );
};

export default InputField;
