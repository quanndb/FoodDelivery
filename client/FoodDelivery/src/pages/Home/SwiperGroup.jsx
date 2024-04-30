import "swiper/css";
import "swiper/css/pagination";

import { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination } from "swiper/modules";

import { Box, IconButton } from "@mui/material";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import FoodPromoItem from "src/components/foodItem/FoodPromoItem";

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

const SwiperGroup = () => {
  const [preBtn, setPreBtn] = useState(false);
  const [nextBtn, setNextBtn] = useState(true);
  return (
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
  );
};

export default SwiperGroup;
