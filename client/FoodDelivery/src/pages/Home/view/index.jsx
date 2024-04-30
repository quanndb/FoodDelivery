import { Helmet } from "react-helmet-async";

import { Box, Container, Divider } from "@mui/material";

import Header from "src/layouts/common/Header";
import FindLocation from "src/components/locationInput/FindLocation";
import Footer from "src/layouts/common/Footer";
import FoodPromo from "src/components/foodItem/FoodPromo";
import FoodType from "src/components/foodItem/FoodType";
import HomeInfo from "src/pages/Home/HomeInfo";
import BannerGroup from "src/pages/Home/BannerGroup";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | FD food</title>
      </Helmet>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <BannerGroup />
        <Divider
          sx={{ margin: "80px 0px 16px 0px", border: "1px solid #e5e9f0" }}
        />
        <Header isShowCartButton={true} />
        <Container
          disableGutters={true}
          sx={{
            maxWidth: "1200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          <FindLocation />
          <FoodPromo />
          <FoodType />
          <HomeInfo />
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default Home;
