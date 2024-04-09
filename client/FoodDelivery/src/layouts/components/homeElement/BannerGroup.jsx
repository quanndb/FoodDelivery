import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const data = [
  {
    id: 1,
    url: "/static/images/banner.jpg",
    alt: "banner1",
  },
  {
    id: 2,
    url: "/static/images/banner2.jpg",
    alt: "banner2",
  },
  {
    id: 3,
    url: "/static/images/banner3.jpg",
    alt: "banner3",
  },
  {
    id: 4,
    url: "/static/images/banner4.jpg",
    alt: "banner4",
  },
];

const BannerGroup = () => {
  return (
    <Box>
      <Swiper
        id="banner"
        slidesPerView={1}
        cssMode={true}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {data.map((item) => (
          <SwiperSlide
            key={item.id}
            style={{ backgroundImage: `url(${item.url})` }}
          />
        ))}
      </Swiper>
    </Box>
  );
};

export default BannerGroup;
