import { Box, Divider, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "var(--primary-color)",
      }}
    >
      <Box
        sx={{
          width: "1200px",
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          justifyContent: "flex-start",
          padding: "40px",
          color: "#ffffff",
          textAlign: "left",
          fontWeight: "bold",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <img
            alt="logo"
            id="logo"
            src="/static/images/logoWhite.png"
            style={{ height: "60px" }}
          />
        </Box>

        <Divider
          variant="full-width"
          sx={{
            border: "1px solid white",
            opacity: "0.6",
            margin: "24px 0px 16px 0px",
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{ height: "52px", alignItems: "center" }}
            >
              About FDFood
            </Typography>
            <Typography
              variant="h6"
              sx={{ height: "52px", alignItems: "center" }}
            >
              About FD
            </Typography>
            <Typography
              variant="h6"
              sx={{ height: "52px", alignItems: "center" }}
            >
              Blog
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h6"
              sx={{ height: "52px", alignItems: "center" }}
            >
              Start a restaurant with FDFood
            </Typography>
            <Typography
              variant="h6"
              sx={{ height: "52px", alignItems: "center" }}
            >
              Become a FDFood's driver
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h6"
              sx={{ height: "52px", alignItems: "center" }}
            >
              Start a restaurant with FDFood
            </Typography>
            <Typography
              variant="h6"
              sx={{ height: "52px", alignItems: "center" }}
            >
              Become a FDFood's driver
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h6"
              sx={{ height: "52px", alignItems: "center" }}
            >
              Support center
            </Typography>
            <Typography
              variant="h6"
              sx={{ height: "52px", alignItems: "center" }}
            >
              Frequently asked questions
            </Typography>
          </Box>
          <Box>
            <FacebookIcon sx={{ marginRight: "20px" }} />
            <InstagramIcon sx={{ marginRight: "20px" }} />
            <TwitterIcon />
          </Box>
        </Box>

        <Divider
          variant="full-width"
          sx={{
            border: "1px solid white",
            opacity: "0.6",
            margin: "24px 0px 16px 0px",
          }}
        />

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <img
              style={{ marginRight: "24px" }}
              src="/static/images/logo-appstore.svg"
            />
            <img src="/static/images/logo-playstore.svg" />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ marginRight: "32px" }}>@ 2024 FDFood</Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography>Terms</Typography>
              <span style={{ margin: "8px" }}>•</span>
              <Typography>Privacy</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
