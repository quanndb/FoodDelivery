import { Helmet } from "react-helmet-async";

import {
  Box,
  InputBase,
  Container,
  IconButton,
  Typography,
  Breadcrumbs,
  Chip,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { emphasize, styled } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";

import Header from "src/layouts/common/Header";
import Footer from "src/layouts/common/Footer";
import FoodPromoItem from "src/components/foodItem/FoodPromoItem";

const data = [
  {
    id: 1,
    name: "Cơm thố Anh Quan - Cầu Diễn",
    type: "Rice",
    rate: "4.3",
    deliTime: "15 mins",
    distance: "1.9 km",
    voucher: "Ưu đãi đến 45k",
    url: "/static/images/bundau.png",
  },
  {
    id: 2,
    name: "Cơm thố Anh Quan - Cầu Diễn",
    type: "Rice",
    rate: "4.3",
    deliTime: "15 mins",
    distance: "1.9 km",
    voucher: "Ưu đãi đến 45k",
    url: "/static/images/bundau.png",
    info: "Closing soon - order before 10 PM",
  },
  {
    id: 3,
    name: "Cơm thố Anh Quan - Cầu Diễn",
    type: "Rice",
    rate: "4.3",
    deliTime: "15 mins",
    distance: "1.9 km",
    voucher: "Ưu đãi đến 45k",
    url: "/static/images/bundau.png",
    info: "Closing soon - order before 10 PM",
  },
  {
    id: 4,
    name: "Cơm thố Anh Quan - Cầu Diễn",
    type: "Rice",
    rate: "4.3",
    deliTime: "15 mins",
    distance: "1.9 km",
    voucher: "Ưu đãi đến 45k",
    url: "/static/images/bundau.png",
  },
  {
    id: 5,
    name: "Cơm thố Anh Quan - Cầu Diễn",
    type: "Rice",
    rate: "4.3",
    deliTime: "15 mins",
    distance: "1.9 km",
    voucher: "Ưu đãi đến 45k",
    url: "/static/images/bundau.png",
    info: "Closing soon - order before 10 PM",
  },
  {
    id: 6,
    name: "Cơm thố Anh Quan - Cầu Diễn",
    type: "Rice",
    rate: "4.3",
    deliTime: "15 mins",
    distance: "1.9 km",
    voucher: "Ưu đãi đến 45k",
    url: "/static/images/bundau.png",
  },
  {
    id: 7,
    name: "Cơm thố Anh Quan - Cầu Diễn",
    type: "Rice",
    rate: "4.3",
    deliTime: "15 mins",
    distance: "1.9 km",
    voucher: "Ưu đãi đến 45k",
    url: "/static/images/bundau.png",
    info: "Closing soon - order before 10 PM",
  },
  {
    id: 8,
    name: "Cơm thố Anh Quan - Cầu Diễn",
    type: "Rice",
    rate: "4.3",
    deliTime: "15 mins",
    distance: "1.9 km",
    voucher: "Ưu đãi đến 45k",
    url: "/static/images/bundau.png",
    info: "Closing soon - order before 10 PM",
  },
  {
    id: 9,
    name: "Cơm thố Anh Quan - Cầu Diễn",
    type: "Rice",
    rate: "4.3",
    deliTime: "15 mins",
    distance: "1.9 km",
    voucher: "Ưu đãi đến 45k",
    url: "/static/images/bundau.png",
    info: "Closing soon - order before 10 PM",
  },
  {
    id: 10,
    name: "Cơm thố Anh Quan - Cầu Diễn",
    type: "Rice",
    rate: "4.3",
    deliTime: "15 mins",
    distance: "1.9 km",
    voucher: "Ưu đãi đến 45k",
    url: "/static/images/bundau.png",
    info: "Closing soon - order before 10 PM",
  },
  {
    id: 11,
    name: "Cơm thố Anh Quan - Cầu Diễn",
    type: "Rice",
    rate: "4.3",
    deliTime: "15 mins",
    distance: "1.9 km",
    voucher: "Ưu đãi đến 45k",
    url: "/static/images/bundau.png",
    info: "Closing soon - order before 10 PM",
  },
  {
    id: 12,
    name: "Cơm thố Anh Quan - Cầu Diễn",
    type: "Rice",
    rate: "4.3",
    deliTime: "15 mins",
    distance: "1.9 km",
    voucher: "Ưu đãi đến 45k",
    url: "/static/images/bundau.png",
    info: "Closing soon - order before 10 PM",
  },

  {
    id: 13,
    name: "Cơm thố Anh Quan - Cầu Diễn",
    type: "Rice",
    rate: "4.3",
    deliTime: "15 mins",
    distance: "1.9 km",
    voucher: "Ưu đãi đến 45k",
    url: "/static/images/bundau.png",
    info: "Closing soon - order before 10 PM",
  },
  {
    id: 14,
    name: "Cơm thố Anh Quan - Cầu Diễn",
    type: "Rice",
    rate: "4.3",
    deliTime: "15 mins",
    distance: "1.9 km",
    voucher: "Ưu đãi đến 45k",
    url: "/static/images/bundau.png",
    info: "Closing soon - order before 10 PM",
  },
  {
    id: 15,
    name: "Cơm thố Anh Quan - Cầu Diễn",
    type: "Rice",
    rate: "4.3",
    deliTime: "15 mins",
    distance: "1.9 km",
    voucher: "Ưu đãi đến 45k",
    url: "/static/images/bundau.png",
    info: "Closing soon - order before 10 PM",
  },
  {
    id: 16,
    name: "Cơm thố Anh Quan - Cầu Diễn",
    type: "Rice",
    rate: "4.3",
    deliTime: "15 mins",
    distance: "1.9 km",
    voucher: "Ưu đãi đến 45k",
    url: "/static/images/bundau.png",
    info: "Closing soon - order before 10 PM",
  },
];

const SearchField = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#eee",
        height: "auto",
        marginTop: "100px",
        display: "flex",
        borderRadius: "50px",
      }}
    >
      <IconButton>
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, width: "100%" }}
        placeholder="Search for a dish or a restaurant"
        inputProps={{ "aria-label": "search google maps" }}
      />
    </Box>
  );
};

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

const Section = () => {
  const data = [
    { id: 1, title: "Nearby", url: "/static/images/background.jpg" },
    { id: 2, title: "Tuần lễ món cơm", url: "/static/images/background.jpg" },
    {
      id: 3,
      title: "Quán ngon đặc quyền",
      url: "/static/images/background.jpg",
    },
    {
      id: 4,
      title: "5 ưu đãi cùng 1 đơn",
      url: "/static/images/background.jpg",
    },
  ];

  return (
    <Box display={"flex"} sx={{ margin: "20px 0px" }}>
      {data.map((item) => (
        <Box
          key={item.id}
          sx={{
            height: "112px",
            width: "200px",
            backgroundImage: `url(${item.url})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            margin: "10px",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              backgroundColor: "#000",
              opacity: "0.4",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ color: "white", fontWeight: "400" }}>
              {item.title}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

const Content = () => {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component="a"
          href="/"
          label="Home"
          icon={<HomeIcon fontSize="small" />}
        />
        <StyledBreadcrumb
          component="a"
          href="/restaurants"
          label="Restaurants"
        />
        <StyledBreadcrumb label="Promotions" />
      </Breadcrumbs>
      <Typography
        variant="h1"
        noWrap
        marginBottom={{}}
        sx={{
          fontWeight: "600",
          fontSize: "40px",
          textOverflow: "ellipsis",
          margin: "45px 18px 48px 18px",
        }}
      >
        <span>FDFood Promo in </span>
        <span
          style={{
            color: "var(--primary-color)",
          }}
        >
          43/53 Ngọa Long, P.Minh Khai, Q.Bắc Từ Liêm, Hà Nội, 10000, Vietnam
        </span>
      </Typography>

      <Box display={"flex"} sx={{ flexWrap: "wrap", marginBottom: "70px" }}>
        <Grid
          container
          spacing={4}
          columns={{ xs: 4, sm: 6, md: 12 }}
          sx={{ padding: "0px 20px" }}
        >
          {data.map((item) => (
            <Grid key={item.id} item xs={2} sm={2} md={3}>
              <FoodPromoItem item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

const PromoDelivery = () => {
  return (
    <>
      <Helmet>
        <title>Promo delivery | FD food</title>
      </Helmet>

      <Box>
        <Header
          unScroll={true}
          isShowInputLocation={true}
          isShowCartButton={true}
        />
        <Container sx={{ maxWidth: "1300px" }}>
          <SearchField />
          <Section />
          <Content />
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default PromoDelivery;
