import Header from "../common/Header";
import Footer from "../common/Footer";
import { Box } from "@mui/material";

const DefaultLayout = ({
  children,
  isShowCartButton,
  isShowInputLocation,
  unScroll,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: "#Fafafa",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        backgroundImage: "url(/static/images/p6.png)",
      }}
    >
      <Header
        unScroll={unScroll}
        isShowCartButton={isShowCartButton}
        isShowInputLocation={isShowInputLocation}
      />
      {children}
      <Footer />
    </Box>
  );
};

export default DefaultLayout;
