import { Box, Container } from "@mui/material";
import Header from "../../layouts/components/header/Header";
import "./index.css";
import FindLocation from "../../layouts/components/homeElement/FindLocation";

const Home = () => {
  return (
    <>
      <Box id="banner"></Box>
      <Header isShowCartButton={true} />
      <Container
        disableGutters={true}
        sx={{
          maxWidth: "1200px",
          display: "flex",
          position: "relative",
          justifyContent: "center",
          height: "2000px",
        }}
      >
        <FindLocation />
      </Container>
    </>
  );
};

export default Home;
