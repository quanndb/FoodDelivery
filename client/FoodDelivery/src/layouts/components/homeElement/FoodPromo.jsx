import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import "swiper/css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import FoodPromoItem from "./FoodPromoItem";
import { useState } from "react";

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
  {
    id: 5,
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
    id: 6,
    name: "Cơm thố Anh Quan - Cầu Diễn",
    type: "Rice",
    rate: "4.3",
    deliTime: "15 mins",
    distance: "1.9 km",
    voucher: "Ưu đãi đến 45k",
    url: "/static/images/bundau.png",
  },
  {
    id: 7,
    name: "Cơm thố Anh Quan - Cầu Diễn",
    type: "Rice",
    rate: "4.3",
    deliTime: "15 mins",
    distance: "1.9 km",
    voucher: "Ưu đãi đến 45k",
    url: "/static/images/bundau.png",
    info: "Closing soon - order before 10 PM",
  },
];

const FooPromoGroup = ({}) => {
  const [preBtn, setPreBtn] = useState(false);
  const [nextBtn, setNextBtn] = useState(true);

  const swiper = useSwiper();
  return (
    <Box>
      <IconButton
        sx={{ height: "40px" }}
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <ArrowBackIosRoundedIcon />
      </IconButton>
      <IconButton
        sx={{ height: "40px" }}
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <ArrowForwardIosRoundedIcon />
      </IconButton>
    </Box>
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
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.map((item) => (
            <SwiperSlide
              style={{ height: "500px", padding: "10px" }}
              key={item.id}
            >
              <FoodPromoItem item={item} />
            </SwiperSlide>
          ))}
          <FooPromoGroup />
        </Swiper>
      </Box>
    </Box>
  );
};

export default FoodPromo;
