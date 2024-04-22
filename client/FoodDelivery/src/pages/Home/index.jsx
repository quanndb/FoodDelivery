import { Box, Container, Divider } from "@mui/material";
import Header from "src/layouts/components/header/Header";
import FindLocation from "src/layouts/components/homeElement/FindLocation";
import Footer from "src/layouts/components/footer/Footer";
import FoodPromo from "src/layouts/components/homeElement/FoodPromo";
import FoodType from "src/layouts/components/homeElement/FoodType";
import HomeInfo from "src/layouts/components/homeElement/HomeInfo";
import BannerGroup from "src/layouts/components/homeElement/BannerGroup";

const Home = () => {
  return (
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
  );
};

export default Home;
