import { Box, Container } from "@mui/material";
import Header from "../../components/homeElement/Header";
import "./index.css";
import FindLocation from "../../components/homeElement/FindLocation";

const Home = () => {
  return (
    <>
      <Box id="banner"></Box>
      <Header />
      <Container
        disableGutters={true}
        sx={{
          maxWidth: "1200px",
          display: "flex",
          position: "relative",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <FindLocation />
      </Container>
    </>
  );
};

export default Home;
