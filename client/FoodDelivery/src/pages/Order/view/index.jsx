import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { Box, Button } from "@mui/material";

import Header from "src/layouts/common/Header";
import EmptyCartBackground from "src/pages/Order/EmptyCartBackground";

const Order = () => {
  const navigate = useNavigate();

  const handleGoToRestaurants = () => {
    navigate("/restaurants");
  };

  return (
    <>
      <Helmet>
        <title>Order | FD food</title>
      </Helmet>

      <Box>
        <Header unScroll={true} />
        <Box sx={{ paddingTop: "50px" }}>
          <EmptyCartBackground>
            <Button
              color="error"
              sx={{ marginTop: "20px" }}
              onClick={handleGoToRestaurants}
            >
              Find some restaurants
            </Button>
          </EmptyCartBackground>
        </Box>
      </Box>
    </>
  );
};

export default Order;
