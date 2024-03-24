import { Box, Container } from "@mui/material";
import Header from "../../layouts/components/header/Header";
import FindLocation from "../../layouts/components/homeElement/FindLocation";
import Footer from "../../layouts/components/footer/Footer";

const Home = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box id="banner"></Box>
      <Header isShowCartButton={true} />
      <Container
        disableGutters={true}
        sx={{
          maxWidth: "1200px",
          display: "flex",
          position: "relative",
          justifyContent: "center",
          height: "800px",
        }}
      >
        <FindLocation />
      </Container>
      <Footer />
    </Box>
  );
};

export default Home;
