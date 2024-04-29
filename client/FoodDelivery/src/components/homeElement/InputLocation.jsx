import { useRef, useState } from "react";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import {
  Paper,
  IconButton,
  InputBase,
  Tooltip,
  styled,
  tooltipClasses,
} from "@mui/material";

const InputLocation = () => {
  const inputLocation = useRef();

  const [openNotFoundLocationToolTip, setOpenNotFoundLocationToolTip] =
    useState(false);

  const handleCloseToolTip = () => {
    setOpenNotFoundLocationToolTip(false);
  };

  const handleFindLocation = () => {
    setOpenNotFoundLocationToolTip(true);
  };

  const handleFocusLocationInput = () => {
    inputLocation.current.style.border = "1px solid #e95959";
  };

  const handleBlurLocationInput = () => {
    inputLocation.current.style.border = "1px solid transparent";
  };

  const ErrorTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: "#Ffc8c9",
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#Ffc8c9",
      color: "#606060",
      boxShadow: theme.shadows[1],
      fontSize: 14,
    },
  }));

  return (
    <Paper
      ref={inputLocation}
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "90%",
        margin: "auto",
        border: "1px solid transparent",
        marginBottom: "15px",
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <PersonPinCircleIcon />
      </IconButton>
      <InputBase
        onFocus={handleFocusLocationInput}
        onBlur={handleBlurLocationInput}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ "aria-label": "search google maps" }}
      />

      <ErrorTooltip
        title="We couldn't found your location on the map. Please allow us to access your location!"
        arrow
        open={openNotFoundLocationToolTip}
        onClose={handleCloseToolTip}
        sx={{ fontSize: "20px" }}
      >
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={handleFindLocation}
        >
          <MyLocationIcon color="error" />
        </IconButton>
      </ErrorTooltip>
    </Paper>
  );
};

export default InputLocation;
