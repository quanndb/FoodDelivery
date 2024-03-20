import {
  Paper,
  Typography,
  IconButton,
  InputBase,
  Button,
  Tooltip,
  styled,
  tooltipClasses,
} from "@mui/material";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import { useRef, useState } from "react";

const FindLocation = () => {
  const [openNotFoundLocationToolTip, setOpenNotFoundLocationToolTip] =
    useState(false);

  const inputLocation = useRef();

  const handleFocusLocationInput = () => {
    inputLocation.current.style.border = "1px solid #e95959";
  };

  const handleBlurLocationInput = () => {
    inputLocation.current.style.border = "1px solid transparent";
  };

  const handleFindLocation = () => {
    setOpenNotFoundLocationToolTip(true);
  };

  const handleCloseToolTip = () => {
    setOpenNotFoundLocationToolTip(false);
  };

  const getTimeOfDay = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return "Morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "Afternoon";
    } else {
      return "Evening";
    }
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
    <>
      <Paper
        sx={{
          width: "360px",
          minHeight: "398px",
          position: "absolute",
          // zIndex: "-1",
          top: "-32vh",
          left: 0,
          marginLeft: "20px",
        }}
        elevation={2}
      >
        <Typography
          variant={"h5"}
          textAlign={"left"}
          sx={{ margin: "50px 0px 10px 30px", fontWeight: "800" }}
        >
          Good {getTimeOfDay()}
        </Typography>
        <Typography
          textAlign={"left"}
          variant="h4"
          sx={{ margin: "0px 0px 30px 30px", fontWeight: "bold" }}
        >
          Where should we deliver your food today?
        </Typography>
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

        <Button
          sx={{
            width: "90%",
            marginTop: "20px",
            height: "50px",
            backgroundColor: "#e95959",
            "&:hover": {
              backgroundColor: "#e95959",
            },
          }}
          variant="contained"
        >
          Tìm kiếm
        </Button>
      </Paper>
    </>
  );
};

export default FindLocation;
