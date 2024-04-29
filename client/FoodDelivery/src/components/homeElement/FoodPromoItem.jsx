import { Box, Divider, Paper, Typography } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { useNavigate } from "react-router-dom";

const Infor = ({ content }) => {
  return (
    <>
      <Divider sx={{ border: "1px solid #eee", margin: "10px 0px 15px 0px" }} />
      <Typography variant="subtitle1" color={"#aaa"}>
        {content}
      </Typography>
    </>
  );
};

const PromoTag = () => {
  return (
    <Box sx={{ position: "absolute", top: "30px", left: "5px", width: "100%" }}>
      <Box
        sx={{
          width: "50px",
          height: "20px",
          backgroundColor: "var(--primary-color)",
          color: "#eee",
          textAlign: "center",
          borderRadius: "0px 2px 2px 0px",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontWeight: "500",
          }}
        >
          Promo
        </Typography>
      </Box>
      <div
        style={{
          borderTop: "3px solid #c24242",
          borderLeft: "3px solid transparent",
          margin: "0",
          position: "absolute",
          zIndex: "0",
          width: "7px",
        }}
      />
    </Box>
  );
};

const FoodPromoItem = ({ item }) => {
  const navigate = useNavigate();

  const handleGotoRestaurant = (e) => {
    e.preventDefault();
    navigate(`/restaurant/${item.id}`);
  };
  return (
    <Paper
      className="foodItem"
      component={"a"}
      href={`/restaurant/${item.id}`}
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: "0px 12px",
        textAlign: "left",
        textDecoration: "none",
        color: "#000",
        position: "relative",
        height: "100% !important",
        backgroundColor: "#fff",
      }}
      onClick={handleGotoRestaurant}
    >
      <div
        className="foodImg"
        style={{
          overflow: "hidden",
          width: "100%",
          height: "150px",
          marginTop: "10px",
          borderRadius: "8px",
          backgroundColor: "#ddd",
        }}
      >
        <img
          src={item.url}
          style={{
            width: "100%",
            objectFit: "cover",
            borderRadius: "8px",
            height: "100%",
          }}
        />
      </div>
      <Typography
        variant="h6"
        sx={{ margin: "16px 0px 12px", fontWeight: "600" }}
      >
        {item.name}
      </Typography>
      <Typography sx={{ marginBottom: "4px", color: "#676767" }}>
        {item.type}
      </Typography>
      <Box display={"flex"} alignItems={"center"} flexWrap={"wrap"}>
        <Box display={"flex"} alignItems={"center"}>
          <StarRoundedIcon
            color="warning"
            sx={{ marginRight: "4px", opacity: "0.6" }}
          />
          <Typography>{item.rate}</Typography>
        </Box>
        <ScheduleIcon sx={{ margin: "0px 8px 0px 14px " }} />
        <Box
          display={"flex"}
          alignItems={"center"}
          color={"#676767"}
          margin={"4px 0px 4px 0px"}
          flexWrap={"wrap"}
        >
          <Typography noWrap>{item.deliTime}</Typography>
          <span style={{ margin: "0px 8px" }}>•</span>
          <Typography noWrap>{item.distance}</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "8px",
        }}
      >
        <SellOutlinedIcon sx={{ marginRight: "6px" }} color="error" />
        <Typography>{item.voucher}</Typography>
      </Box>
      <Box sx={{ paddingBottom: "10px" }}>
        {item.info ? <Infor content={item.info} /> : <></>}
      </Box>
      <PromoTag />
    </Paper>
  );
};

export default FoodPromoItem;
