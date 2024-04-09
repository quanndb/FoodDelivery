import { Box, Button, Typography } from "@mui/material";
import "swiper/css";
import SwiperGroup from "./SwiperGroup";
import { useNavigate } from "react-router-dom";

const SeeMoreBtn = () => {
  const navigate = useNavigate();

  const handleGoToPromos = () => {
    navigate("/promos-delivery");
  };

  return (
    <Button
      sx={{
        marginTop: "50px",
        width: "93%",
        height: "50px",
        fontSize: "18px",
        fontWeight: "600",
      }}
      color="error"
      variant="outlined"
      onClick={handleGoToPromos}
    >
      See more promotions
    </Button>
  );
};

const FoodPromo = () => {
  return (
    <Box sx={{ width: "100%", position: "relative" }}>
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

      <SwiperGroup />

      <SeeMoreBtn />
    </Box>
  );
};

export default FoodPromo;
