import { Paper, Typography, Button } from "@mui/material";
import InputLocation from "./InputLocation";

const FindLocation = () => {
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

  return (
    <>
      <Paper
        sx={{
          width: "360px",
          minHeight: "398px",
          position: "absolute",
          top: "-53vh",
          left: 0,
          marginLeft: "20px",
          zIndex: 1,
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

        <InputLocation />

        <Button
          sx={{
            width: "90%",
            marginTop: "20px",
            height: "50px",
            backgroundColor: "var(--primary-color)",
            "&:hover": {
              backgroundColor: "var(--primary-color)",
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
