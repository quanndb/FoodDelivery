import Header from "../../layouts/components/header/Header";
import Footer from "../../layouts/components/footer/Footer";

import {
  Box,
  Typography,
  Breadcrumbs,
  Container,
  Button,
  IconButton,
  Divider,
  Tabs,
  Tab,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Chip,
  Paper,
} from "@mui/material";
import { emphasize, styled } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useRef, useState } from "react";

const menu = [
  {
    id: 1,
    name: "Ưu đãi hôm nay",
    product: [
      {
        id: 1,
        name: "Cơm bò sốt nấm",
        price: "48.000",
        url: "/static/images/product.jpg",
        oldPrice: "60.000",
        description: "Bánh mì đen thăn heo nướng + đồ uống bất kì",
        active: true,
      },
      {
        id: 2,
        name: "Cơm bò sốt nấm",
        price: "48.000",
        url: "/static/images/product.jpg",
        oldPrice: "60.000",
        description: "Bánh mì đen thăn heo nướng + đồ uống bất kì",
        active: true,
      },
      {
        id: 3,
        name: "Cơm bò sốt nấm",
        price: "48.000",
        url: "/static/images/product.jpg",
        oldPrice: "60.000",
        description: "Bánh mì đen thăn heo nướng + đồ uống bất kì",
        active: true,
      },
      {
        id: 4,
        name: "Cơm bò sốt nấm",
        price: "48.000",
        url: "/static/images/product.jpg",
        oldPrice: "60.000",
        description: "Bánh mì đen thăn heo nướng + đồ uống bất kì",
        active: true,
      },
      {
        id: 5,
        name: "Cơm bò sốt nấm",
        price: "48.000",
        url: "/static/images/product.jpg",
        oldPrice: "60.000",
        description: "Bánh mì đen thăn heo nướng + đồ uống bất kì",
        active: true,
      },
      {
        id: 6,
        name: "Cơm bò sốt nấm",
        price: "48.000",
        url: "/static/images/product.jpg",
        oldPrice: "60.000",
        description: "Bánh mì đen thăn heo nướng + đồ uống bất kì",
        active: true,
      },
      {
        id: 7,
        name: "Cơm bò sốt nấm",
        price: "48.000",
        url: "/static/images/product.jpg",
        oldPrice: "60.000",
        description: "Bánh mì đen thăn heo nướng + đồ uống bất kì",
        active: true,
      },
      {
        id: 8,
        name: "Cơm bò sốt nấm",
        price: "48.000",
        url: "/static/images/product.jpg",
        oldPrice: "60.000",
        description: "Bánh mì đen thăn heo nướng + đồ uống bất kì",
        active: false,
      },
    ],
  },
  {
    id: 2,
    name: "Combo Giảm Giá",
    product: [
      {
        id: 9,
        name: "Cơm bò sốt nấm",
        price: "48.000",
        url: "/static/images/product.jpg",
        oldPrice: "60.000",
        description: "Bánh mì đen thăn heo nướng + đồ uống bất kì",
        active: true,
      },
      {
        id: 10,
        name: "Cơm bò sốt nấm",
        price: "48.000",
        url: "/static/images/product.jpg",
        oldPrice: "60.000",
        description: "Bánh mì đen thăn heo nướng + đồ uống bất kì",
        active: true,
      },
      {
        id: 11,
        name: "Cơm bò sốt nấm",
        price: "48.000",
        url: "/static/images/product.jpg",
        oldPrice: "60.000",
        description: "Bánh mì đen thăn heo nướng + đồ uống bất kì",
        active: true,
      },
      {
        id: 12,
        name: "Cơm bò sốt nấm",
        price: "48.000",
        url: "/static/images/product.jpg",
        oldPrice: "60.000",
        description: "Bánh mì đen thăn heo nướng + đồ uống bất kì",
        active: true,
      },
      {
        id: 13,
        name: "Cơm bò sốt nấm",
        price: "48.000",
        url: "/static/images/product.jpg",
        oldPrice: "60.000",
        description: "Bánh mì đen thăn heo nướng + đồ uống bất kì",
        active: true,
      },
      {
        id: 14,
        name: "Cơm bò sốt nấm",
        price: "48.000",
        url: "/static/images/product.jpg",
        oldPrice: "60.000",
        description: "Bánh mì đen thăn heo nướng + đồ uống bất kì",
        active: true,
      },
    ],
  },
  {
    id: 3,
    name: "Bánh Mì",
    product: [
      {
        id: 15,
        name: "Cơm bò sốt nấm",
        price: "48.000",
        url: "/static/images/product.jpg",
        oldPrice: "60.000",
        description: "Bánh mì đen thăn heo nướng + đồ uống bất kì",
        active: false,
      },
      {
        id: 16,
        name: "Cơm bò sốt nấm",
        price: "48.000",
        url: "/static/images/product.jpg",
        oldPrice: "60.000",
        description: "Bánh mì đen thăn heo nướng + đồ uống bất kì",
        active: true,
      },
      {
        id: 17,
        name: "Cơm bò sốt nấm",
        price: "48.000",
        url: "/static/images/product.jpg",
        oldPrice: "60.000",
        description: "Bánh mì đen thăn heo nướng + đồ uống bất kì",
        active: true,
      },
      {
        id: 18,
        name: "Cơm bò sốt nấm",
        price: "48.000",
        url: "/static/images/product.jpg",
        oldPrice: "60.000",
        description: "Bánh mì đen thăn heo nướng + đồ uống bất kì",
        active: true,
      },
      {
        id: 19,
        name: "Cơm bò sốt nấm",
        price: "48.000",
        url: "/static/images/product.jpg",
        oldPrice: "60.000",
        description: "Bánh mì đen thăn heo nướng + đồ uống bất kì",
        active: true,
      },
      {
        id: 20,
        name: "Cơm bò sốt nấm",
        price: "48.000",
        url: "/static/images/product.jpg",
        oldPrice: "60.000",
        description: "Bánh mì đen thăn heo nướng + đồ uống bất kì",
        active: true,
      },
      {
        id: 21,
        name: "Cơm bò sốt nấm",
        price: "48.000",
        url: "/static/images/product.jpg",
        oldPrice: "60.000",
        description: "Bánh mì đen thăn heo nướng + đồ uống bất kì",
        active: true,
      },
      {
        id: 22,
        name: "Cơm bò sốt nấm",
        price: "48.000",
        url: "/static/images/product.jpg",
        oldPrice: "60.000",
        description: "Bánh mì đen thăn heo nướng + đồ uống bất kì",
        active: true,
      },
    ],
  },
  {
    id: 4,
    name: "Bánh Mì Sốt Bơ",
    product: [
      {
        id: 23,
        name: "Cơm bò sốt nấm",
        price: "48.000",
        url: "/static/images/product.jpg",
        oldPrice: "60.000",
        description: "Bánh mì đen thăn heo nướng + đồ uống bất kì",
        active: true,
      },
      {
        id: 24,
        name: "Cơm bò sốt nấm",
        price: "48.000",
        url: "/static/images/product.jpg",
        oldPrice: "60.000",
        description: "Bánh mì đen thăn heo nướng + đồ uống bất kì",
        active: false,
      },
      {
        id: 25,
        name: "Cơm bò sốt nấm",
        price: "48.000",
        url: "/static/images/product.jpg",
        oldPrice: "60.000",
        description: "Bánh mì đen thăn heo nướng + đồ uống bất kì",
        active: true,
      },
      {
        id: 26,
        name: "Cơm bò sốt nấm",
        price: "48.000",
        url: "/static/images/product.jpg",
        oldPrice: "60.000",
        description: "Bánh mì đen thăn heo nướng + đồ uống bất kì",
        active: true,
      },
      {
        id: 27,
        name: "Cơm bò sốt nấm",
        price: "48.000",
        url: "/static/images/product.jpg",
        oldPrice: "60.000",
        description: "Bánh mì đen thăn heo nướng + đồ uống bất kì",
        active: true,
      },
      {
        id: 28,
        name: "Cơm bò sốt nấm",
        price: "48.000",
        url: "/static/images/product.jpg",
        oldPrice: "60.000",
        description: "Bánh mì đen thăn heo nướng + đồ uống bất kì",
        active: true,
      },
      {
        id: 29,
        name: "Cơm bò sốt nấm",
        price: "48.000",
        url: "/static/images/product.jpg",
        oldPrice: "60.000",
        description: "Bánh mì đen thăn heo nướng + đồ uống bất kì",
        active: true,
      },
      {
        id: 30,
        name: "Cơm bò sốt nấm",
        price: "48.000",
        url: "/static/images/product.jpg",
        oldPrice: "60.000",
        description: "Bánh mì đen thăn heo nướng + đồ uống bất kì",
        active: true,
      },
      {
        id: 31,
        name: "Cơm bò sốt nấm",
        price: "48.000",
        url: "/static/images/product.jpg",
        oldPrice: "60.000",
        description: "Bánh mì đen thăn heo nướng + đồ uống bất kì",
        active: true,
      },
      {
        id: 32,
        name: "Cơm bò sốt nấm",
        price: "48.000",
        url: "/static/images/product.jpg",
        oldPrice: "60.000",
        description: "Bánh mì đen thăn heo nướng + đồ uống bất kì",
        active: true,
      },
    ],
  },
  {
    id: 5,
    name: "Thức Uống",
    product: [
      {
        id: 33,
        name: "Cơm bò sốt nấm",
        price: "48.000",
        url: "/static/images/product.jpg",
        oldPrice: "60.000",
        description: "Bánh mì đen thăn heo nướng + đồ uống bất kì",
        active: true,
      },
      {
        id: 34,
        name: "Cơm bò sốt nấm",
        price: "48.000",
        url: "/static/images/product.jpg",
        oldPrice: "60.000",
        description: "Bánh mì đen thăn heo nướng + đồ uống bất kì",
        active: false,
      },
      {
        id: 35,
        name: "Cơm bò sốt nấm not",
        price: "48.000",
        url: "/static/images/product.jpg",
        oldPrice: "60.000",
        description: "Bánh mì đen thăn heo nướng + đồ uống bất kì",
        active: true,
      },
    ],
  },
];

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

const Closed = () => {
  return (
    <span
      style={{
        backgroundColor: "var(--primary-color)",
        color: "white",
        padding: "5px",
        borderRadius: "6px",
      }}
    >
      Closed
    </span>
  );
};

const PromoDialog = ({ open, setOpen }) => {
  return (
    <Dialog
      open={open}
      keepMounted
      onClose={() => setOpen(false)}
      aria-describedby="alert-dialog-slide-description"
    >
      <IconButton
        onClick={() => setOpen(false)}
        sx={{ position: "absolute", right: "0" }}
        color="error"
      >
        <CloseIcon />
      </IconButton>

      <Box sx={{ minWidth: "500px" }}>
        <DialogTitle
          sx={{ marginTop: "30px", display: "flex", alignItems: "center" }}
        >
          <Typography fontWeight={"500"} fontSize={"25px"}>
            Promotions
          </Typography>
          <SellOutlinedIcon color="error" sx={{ marginLeft: "8px" }} />
        </DialogTitle>
        <DialogContent>
          <DialogContentText fontWeight={"600"}>
            Enjoy discounts on items
          </DialogContentText>
          <DialogContentText>• 5.000₫ off selected items</DialogContentText>
          <Divider sx={{ margin: "20px" }} variant="fullwidth" />
          <DialogContentText>🍽️Deal trưa 0Đ🍽️</DialogContentText>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

const TabFood = ({ value, setValue, listElementRef, setIsScroll }) => {
  const handleChange = (event, newValue) => {
    listElementRef.current[newValue].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        bgcolor: "background.paper",
        margin: "auto",
        paddingTop: "30px",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        textColor="secondary"
        indicatorColor="secondary"
      >
        {menu.map((item) => (
          <Tab key={item.id} label={item.name} />
        ))}
      </Tabs>
    </Box>
  );
};

const ExtendedHeader = ({ value, setValue, listElementRef, setIsScroll }) => {
  const [isClosed, setIsClosed] = useState(true);

  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        marginTop: "120px",
        position: "sticky",
        top: "-200px",
        boxShadow: "0 3px 6px rgba(28, 28, 28, 0.1)",
        backgroundColor: "#fff",
        zIndex: "1",
      }}
    >
      <Container sx={{ maxWidth: "1300px" }}>
        <Box role="presentation" alignSelf={"start"}>
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
            <StyledBreadcrumb label="Bún Bò Huế 65 & Bánh Mì Cay Hải Phòng" />
          </Breadcrumbs>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: "25px",
                fontWeight: "700",
                textAlign: "left",
                margin: "15px 0px",
              }}
            >
              Bún Bò Huế 65 & Bánh Mì Cay Hải Phòng
            </Typography>
            <Typography sx={{ textAlign: "left" }}>Bún - Phở - Cháo</Typography>

            <Box
              display={"flex"}
              alignItems={"center"}
              flexWrap={"wrap"}
              margin={"10px 0px"}
            >
              <Box display={"flex"} alignItems={"center"}>
                <StarRoundedIcon
                  color="warning"
                  sx={{ marginRight: "4px", opacity: "0.6" }}
                />
                <Typography>4.8</Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                color={"#676767"}
                margin={"4px 0px 4px 20px"}
                flexWrap={"wrap"}
              >
                <ScheduleIcon sx={{ margin: "0px 8px 0px 14px " }} />
                <Typography noWrap>35 mins</Typography>
                <span style={{ margin: "0px 8px" }}>•</span>
                <Typography noWrap>3.1 kms</Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
              }}
            >
              <Typography>Open time</Typography>
              <Typography sx={{ color: "#676767", marginLeft: "30px" }}>
                <span style={{ marginRight: "5px" }}>Today </span>
                {isClosed ? <Closed /> : <>05:00-23:00</>}
              </Typography>
            </Box>

            <Typography
              display={"flex"}
              alignItems={"center"}
              marginTop={"20px"}
            >
              <SellOutlinedIcon sx={{ marginRight: "10px" }} color="error" />
              Enjoy discounts on items
            </Typography>
            <Typography
              display={"flex"}
              alignItems={"center"}
              marginTop={"10px"}
            >
              <SellOutlinedIcon sx={{ marginRight: "10px" }} color="error" />
              Discounts up to 46k
              <Button
                sx={{ marginLeft: "50px" }}
                color="error"
                onClick={() => setOpen(true)}
              >
                See details
              </Button>
              <PromoDialog open={open} setOpen={setOpen} />
            </Typography>
          </Box>
        </Box>
        <TabFood
          value={value}
          setValue={setValue}
          listElementRef={listElementRef}
          setIsScroll={setIsScroll}
        />
      </Container>
    </Box>
  );
};

const Product = ({ data }) => {
  return (
    <Paper
      sx={{
        margin: "16px",
        padding: "10px 20px 10px 0px ",
        position: "relative",
        border: "solid 1px transparent",
        cursor: "pointer",
        "&:hover": {
          border: "solid 1px var(--primary-color)",
          scale: "1.02",
        },
      }}
      style={data.active ? {} : { opacity: "0.5", backgroundColor: "#ddd" }}
    >
      <Box display={"flex"}>
        <Box
          sx={{
            height: "100px",
            width: "100px",
            margin: "20px",
            backgroundImage: `url(${data.url})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Typography noWrap variant="h6" textAlign={"left"}>
            {data.name}
          </Typography>
          <Typography variant="subtitle1">{data.description}</Typography>
          <Box display={"flex"}>
            <Typography
              sx={{
                padding: "2px",
                borderRadius: "4px",
                backgroundColor: "rgba(243,134,33,.3)",
                color: "#f38621",
              }}
            >
              Save {eval(data.oldPrice - data.price)}.000 ₫
            </Typography>
            <Typography
              sx={{
                textDecoration: "line-through",
                marginLeft: "10px",
                color: "#aaa",
              }}
            >
              {data.oldPrice}
            </Typography>
          </Box>
          <Box>
            <Typography
              color={"error"}
              sx={{ fontWeight: "700", textAlign: "left" }}
            >
              {data.price} ₫
            </Typography>
          </Box>
        </Box>
      </Box>

      <IconButton
        sx={{
          position: "absolute",
          bottom: "0",
          right: "0",
          padding: "5px",
          margin: "10px",
          color: "white",
          backgroundColor: "var(--primary-color)",

          "&:hover": {
            backgroundColor: "var(--primary-color)",
            opacity: "0.6",
          },
        }}
      >
        <AddIcon />
      </IconButton>
    </Paper>
  );
};

const Section = ({ value, setValue, listElementRef, isScroll }) => {
  useEffect(() => {
    if (!isScroll) {
      const isInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
          rect.top < 245 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        );
      };

      const handleScroll = () => {
        listElementRef.current.forEach((el, index) => {
          if (isInViewport(el)) {
            setValue(index);
          }
        });
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <>
      {menu.map((item, index) => (
        <Box key={item.id}>
          <Typography
            ref={(item) => (listElementRef.current[index] = item)}
            sx={{
              textAlign: "left",
              fontSize: "30px",
              fontWeight: "700",
              margin: "30px 0px",
            }}
            variant="h3"
          >
            {item.name}
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            {item.product.map((productItem) => (
              <Product key={productItem.id} data={productItem} />
            ))}
          </Box>
        </Box>
      ))}
    </>
  );
};

const Restaurant = () => {
  const [value, setValue] = useState(0);

  const listElementRef = useRef([]);

  const [isScroll, setIsScroll] = useState(false);

  return (
    <>
      <Box sx={{ backgroundColor: "#f8f8f8" }}>
        <Header
          unScroll={true}
          isShowInputLocation={true}
          isShowCartButton={true}
          style={{ boxShadow: "none" }}
        />
        <ExtendedHeader
          value={value}
          setValue={setValue}
          listElementRef={listElementRef}
          setIsScroll={setIsScroll}
        />
        <Container
          sx={{ maxWidth: "1300px", marginTop: "72px", paddingBottom: "72px" }}
        >
          <Section
            value={value}
            setValue={setValue}
            listElementRef={listElementRef}
            isScroll={isScroll}
          />
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Restaurant;
