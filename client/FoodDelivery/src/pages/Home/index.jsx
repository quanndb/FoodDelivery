import { Box, Container, Divider } from "@mui/material";
import Header from "../../layouts/components/header/Header";
import FindLocation from "../../layouts/components/homeElement/FindLocation";
import Footer from "../../layouts/components/footer/Footer";
import FoodPromo from "../../layouts/components/homeElement/FoodPromo";
import FoodType from "../../layouts/components/homeElement/FoodType";
import HomeInfo from "../../layouts/components/homeElement/HomeInfo";

const Home = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box id="banner"></Box>
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
