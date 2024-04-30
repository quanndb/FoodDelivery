import { Box, Typography } from "@mui/material";

const EmptyCartBackground = ({ children }) => {
  return (
    <Box
      sx={{
        alignSelf: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box className="emptyCart"></Box>
      <Typography variant="h5" textAlign={"center"}>
        Oops! Your cart is empty
      </Typography>
      <Typography marginTop={"10px"} textAlign={"center"}>
        Let's add some foods to your cart and start order now.
      </Typography>
      {children}
    </Box>
  );
};

export default EmptyCartBackground;
