import { Box, Button, IconButton, Typography } from "@mui/material";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import "swiper/css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import FoodPromoItem from "./FoodPromoItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

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

const FoodPromoBtn = ({ preBtn, nextBtn }) => {
  const swiper = useSwiper();
  return (
    <Box
      className={"promoBtn"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        position: "absolute",
        top: "50%",
      }}
    >
      {preBtn ? (
        <IconButton
          onClick={() => {
            swiper.slidePrev();
          }}
        >
          <ArrowBackIosRoundedIcon />
        </IconButton>
      ) : (
        <div style={{ width: "40px", height: "40px" }} />
      )}
      {nextBtn ? (
        <IconButton
          onClick={() => {
            swiper.slideNext();
          }}
        >
          <ArrowForwardIosRoundedIcon />
        </IconButton>
      ) : (
        <div style={{ width: "40px", height: "40px" }} />
      )}
    </Box>
  );
};

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
  const [preBtn, setPreBtn] = useState(false);
  const [nextBtn, setNextBtn] = useState(true);

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

      <Box sx={{ display: "flex", alignItems: "center", position: "relative" }}>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          style={{
            display: "flex",
            justifyContent: "center",
            position: "static",
            margin: "0px 30px",
          }}
          onSlideChange={(e) => {
            setNextBtn(!e.isEnd);
            setPreBtn(!e.isBeginning);
          }}
          slidesPerView={4}
          spaceBetween={0}
          breakpoints={{
            "@0.0": {
              slidesPerView: "auto",
            },
            "@0.6": {
              slidesPerView: "2",
            },
            "@0.8": {
              slidesPerView: "3",
            },
            "@1.0": {
              slidesPerView: "4",
            },
          }}
        >
          {data.map((item) => {
            return (
              <SwiperSlide
                style={{
                  padding: "10px",
                  height: "auto",
                  paddingBottom: "5px",
                }}
                key={item.id}
              >
                <FoodPromoItem item={item} />
              </SwiperSlide>
            );
          })}
          <FoodPromoBtn preBtn={preBtn} nextBtn={nextBtn} />
        </Swiper>
      </Box>

      <SeeMoreBtn />
    </Box>
  );
};

export default FoodPromo;
