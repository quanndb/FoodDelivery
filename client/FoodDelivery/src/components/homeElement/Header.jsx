import { Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import UserBox from "./UserBox";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import DrawerManagerSlice from "../../redux/slices/DrawerManagerSlice";
import EmptyCart from "../cart/EmptyCartDrawer";
import UserMenuDrawer from "./UserMenuDrawer";
import "./index.css";

const Header = () => {
  const headerRef = useRef();

  const logoRef = useRef();

  const dispatch = useDispatch();

  const listLang = [
    { id: "1", lang: "VI", flang: "Tiếng Việt" },
    { id: "2", lang: "EN", flang: "English" },
  ];

  const [langAnchorEl, setLangAnchorEl] = useState(null);

  const [lang, setLang] = useState("VI");

  const openListLang = Boolean(langAnchorEl);

  const handleOpenLangMenu = (e) => {
    setLangAnchorEl(e.currentTarget);
  };

  const handleOpenCart = () => {
    dispatch(DrawerManagerSlice.actions.setOpenCartDrawer(true));
  };

  const handleSetLang = (e) => {
    const selectedLang = listLang.filter((lang) => {
      return lang.flang === e.target.outerText;
    });
    setLang(selectedLang[0].lang);
    setLangAnchorEl(null);
  };
  const handleClose = () => {
    setLangAnchorEl(null);
  };

  const handleChangeHeader = (state) => {
    if (state) {
      headerRef.current.classList.add("scrollHeader");
      logoRef.current.style.backgroundImage = "url(src/assets/logoRed.png)";
    } else {
      headerRef.current.classList.remove("scrollHeader");
      logoRef.current.style.backgroundImage = "url(src/assets/logoWhite.png)";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        handleChangeHeader(true);
      } else {
        handleChangeHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Box
      ref={headerRef}
      display={"flex"}
      sx={{
        width: "100%",
        justifyContent: "center",
        padding: "10px 0px 10px 0px",
        position: "fixed",
        top: 0,
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "95%",
          maxWidth: "1200px",
          justifyContent: "space-between",
        }}
      >
        <Box
          ref={logoRef}
          id="logo"
          sx={{ width: "150px", height: "50px", cursor: "pointer" }}
          onClick={() => {
            window.location.href = "/";
          }}
        />
        <Box
          display={"flex"}
          sx={{
            alignItems: "center",
          }}
        >
          <IconButton
            sx={{
              margin: "10px",
              backgroundColor: "#f0f0f0dd",
              "&:hover": { backgroundColor: "#e9e9e9dd" },
            }}
            aria-label="open cart"
            color="primary"
            onClick={handleOpenCart}
          >
            <ShoppingCartOutlinedIcon color="error" />
          </IconButton>
          <EmptyCart />
          <UserBox />
          <UserMenuDrawer />
          <Button
            onClick={handleOpenLangMenu}
            endIcon={<ArrowDropDownIcon />}
            sx={{
              margin: "10px",
              backgroundColor: "#f0f0f0dd",
              "&:hover": { backgroundColor: "#e9e9e9dd" },
            }}
            color="error"
            disableElevation
            variant="text"
          >
            {lang}
          </Button>
          <Menu
            open={openListLang}
            onClose={handleClose}
            anchorEl={langAnchorEl}
          >
            {listLang.map((lang) => {
              return (
                <MenuItem
                  key={lang.id}
                  onClick={handleSetLang}
                  sx={{ width: "150px" }}
                >
                  {lang.flang}
                </MenuItem>
              );
            })}
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
