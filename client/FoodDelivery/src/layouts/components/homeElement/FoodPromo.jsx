import { Box, Divider, Typography } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    name: "Cơm thố Anh Quan - Cầu Diễn",
    type: "Rice",
    rate: "4.3",
    deliTime: "15 mins",
    distance: "1.9 km",
    voucher: "Ưu đãi đến 45k",
    url: "/static/images/bundau.png",
  },
  {
    id: 2,
    name: "Cơm thố Anh Quan - Cầu Diễn",
    type: "Rice",
    rate: "4.3",
    deliTime: "15 mins",
    distance: "1.9 km",
    voucher: "Ưu đãi đến 45k",
    url: "/static/images/bundau.png",
    info: "Closing soon - order before 10 PM",
  },
  {
    id: 3,
    name: "Cơm thố Anh Quan - Cầu Diễn",
    type: "Rice",
    rate: "4.3",
    deliTime: "15 mins",
    distance: "1.9 km",
    voucher: "Ưu đãi đến 45k",
    url: "/static/images/bundau.png",
    info: "Closing soon - order before 10 PM",
  },
  {
    id: 4,
    name: "Cơm thố Anh Quan - Cầu Diễn",
    type: "Rice",
    rate: "4.3",
    deliTime: "15 mins",
    distance: "1.9 km",
    voucher: "Ưu đãi đến 45k",
    url: "/static/images/bundau.png",
  },
];

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
    <Box sx={{ position: "absolute", top: "10px", left: "5px", width: "100%" }}>
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
          zIndex: "-1",
          width: "80%",
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
    <Box
      component={"a"}
      href={`/restaurant/${item.id}`}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "25%",
        padding: "0 12px 24px",
        textAlign: "left",
        maxHeight: "350px",
        textDecoration: "none",
        color: "#000",
        position: "relative",
      }}
      onClick={handleGotoRestaurant}
    >
      <img
        src={item.url}
        style={{ height: "50%", objectFit: "cover", borderRadius: "8px" }}
      />
      <Typography
        variant="h6"
        sx={{ margin: "16px 0px 12px", fontWeight: "600" }}
      >
        {item.name}
      </Typography>
      <Typography sx={{ marginBottom: "4px", color: "#676767" }}>
        {item.type}
      </Typography>
      <Box display={"flex"} alignItems={"center"}>
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
      {item.info ? <Infor content={item.info} /> : <></>}
      <PromoTag />
    </Box>
  );
};

const FoodPromo = () => {
  return (
    <Box sx={{ width: "95%" }}>
      <Typography
        variant="h1"
        noWrap
        marginBottom={{}}
        sx={{
          fontWeight: "600",
          fontSize: "40px",
          textOverflow: "ellipsis",
          margin: "45px 18px 48px 18px",
        }}
      >
        <span>FDFood Promo in </span>
        <span
          style={{
            color: "var(--primary-color)",
          }}
        >
          43/53 Ngọa Long, P.Minh Khai, Q.Bắc Từ Liêm, Hà Nội, 10000, Vietnam
        </span>
      </Typography>
      <Box display={"flex"}>
        {data.map((item) => (
          <FoodPromoItem key={item.id} item={item} />
        ))}
      </Box>
    </Box>
  );
};

export default FoodPromo;
