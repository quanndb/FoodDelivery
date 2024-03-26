import { Box, Divider, Link, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const LinkItem = ({ variant, href, content, style }) => {
  return (
    <Box style={style} sx={{ margin: "10px 20px 10px 0px", height: "52px" }}>
      <Typography
        variant={variant}
        noWrap
        sx={{
          height: "52px",
          alignItems: "center",
          textDecoration: "none",
          color: "#fff",
        }}
        component={"a"}
        href={href}
        target="_blank"
      >
        {content}
      </Typography>
    </Box>
  );
};

const FooterDivider = () => {
  return (
    <Divider
      variant="full-width"
      sx={{
        border: "1px solid white",
        opacity: "0.6",
        margin: "24px 0px 16px 0px",
      }}
    />
  );
};

const IconLink = ({ children, href }) => {
  return (
    <a target="_blank" href={href} style={{ color: "#fff" }}>
      {children}
    </a>
  );
};

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

        <FooterDivider />

        <Box
          className="footerContent"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Box>
            <LinkItem variant={"h6"} href={"/"} content={"About FDFood"} />
            <LinkItem variant={"h6"} href={"/"} content={"About FD"} />
            <LinkItem variant={"h6"} href={"/"} content={"Blog"} />
          </Box>
          <Box>
            <LinkItem
              variant={"h6"}
              href={"/"}
              content={"Start a restaurant with FDFood"}
            />
            <LinkItem
              variant={"h6"}
              href={"/"}
              content={"Become a FDFood's driver"}
            />
          </Box>
          <Box>
            <LinkItem variant={"h6"} href={"/"} content={"Support center"} />
            <LinkItem
              variant={"h6"}
              href={"/"}
              content={"Frequently asked questions"}
            />
          </Box>
          <Box sx={{ margin: "10px 20px 10px 0px" }}>
            <IconLink href={"/"}>
              <FacebookIcon sx={{ marginRight: "20px" }} fontSize="large" />
            </IconLink>
            <IconLink href={"/"}>
              <InstagramIcon sx={{ marginRight: "20px" }} fontSize="large" />
            </IconLink>
            <IconLink href={"/"}>
              <TwitterIcon fontSize="large" />
            </IconLink>
          </Box>
        </Box>

        <FooterDivider />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Box>
            <a href="/" target="_blank">
              <img
                style={{ margin: "0px 24px 10px 0px" }}
                src="/static/images/logo-appstore.svg"
              />
            </a>
            <a href="/" target="_blank">
              <img
                style={{ margin: "0px 24px 10px 0px" }}
                src="/static/images/logo-playstore.svg"
              />
            </a>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography marginRight={"32px"}>@ 2024 FDFood</Typography>
            <Box sx={{ display: "flex" }}>
              <LinkItem
                href={"/"}
                content={"Terms"}
                style={{ margin: "0px" }}
              />
              <span style={{ margin: "2px 8px" }}>•</span>
              <LinkItem
                href={"/"}
                content={"Privacy"}
                style={{ margin: "0px" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
