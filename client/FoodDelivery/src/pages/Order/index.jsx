import { Box, Button } from "@mui/material";
import Header from "../../layouts/components/header/Header";
import EmptyCartBackground from "../../layouts/components/cart/EmptyCartBackground";
import { Navigate, useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();

  const handleGoToRestaurants = () => {
    navigate("/restaurants");
  };

  return (
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
  );
};

export default Order;
