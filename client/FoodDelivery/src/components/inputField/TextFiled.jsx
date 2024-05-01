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
import { SixKOutlined } from "@mui/icons-material";

const InputField = ({ label, value, setValue, disabled, sx }) => {
  return (
    <FormControl required variant="outlined" sx={sx}>
      <InputLabel htmlFor={`outlined-adornment-${label}`}>{label}</InputLabel>
      <OutlinedInput
        id={`outlined-adornment-${label}`}
        type="text"
        label={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
      />
    </FormControl>
  );
};

export default InputField;
