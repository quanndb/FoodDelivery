import { Box, Container, Paper } from "@mui/material";

const AuthLayout = ({ children }) => {
  return (
    <div id="login-container">
      <Container
        maxWidth="lg"
        sx={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            padding: " 6px 0px",
            width: "450px",
            minWidth: "350px",
            height: "60%",
          }}
        >
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifySelf: "center",
              height: "100%",
              borderRadius: 4,
              maxWidth: "500px",
              overflowY: "auto",
            }}
          >
            {children}
          </Paper>
        </Box>
      </Container>
    </div>
  );
};

export default AuthLayout;
