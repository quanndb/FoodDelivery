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

const BasicFileds = ({ children, labelUser, labelPassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  const [userName, setUserName] = useState("");

  const [password, setPassword] = useState("");

  const handleChangeUserInput = (e) => {
    setUserName(e.target.value);
  };

  const handleChangePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleClickShowPassword = (e) => {
    setShowPassword((show) => !show);
  };

  return (
    <>
      <FormControl
        required
        sx={{ m: 1, width: "60%", minWidth: "300px" }}
        variant="outlined"
      >
        <InputLabel htmlFor={`outlined-adornment-${labelUser}`}>
          {labelUser}
        </InputLabel>
        <OutlinedInput
          id={`outlined-adornment-${labelUser}`}
          type="text"
          label={labelUser}
          value={userName}
          onChange={handleChangeUserInput}
        />
      </FormControl>
      {children}
      <FormControl
        required
        sx={{ m: 1, width: "60%", minWidth: "300px" }}
        variant="outlined"
      >
        <InputLabel htmlFor={`outlined-adornment-${labelPassword}`}>
          {labelPassword}
        </InputLabel>
        <OutlinedInput
          value={password}
          onChange={handleChangePasswordInput}
          id={`outlined-adornment-${labelPassword}`}
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label={labelPassword}
        />
      </FormControl>
    </>
  );
};

export default BasicFileds;
