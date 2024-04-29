import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import UserBox from "../homeElement/UserBox";
import EastIcon from "@mui/icons-material/East";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import DrawerManagerSlice from "src/redux/slices/DrawerManagerSlice";
import EmptyCartDrawer from "../cart/EmptyCartDrawer";
import UserMenuDrawer from "../homeElement/UserMenuDrawer";
import CartButton from "./CartButton";
import InputLocation from "../homeElement/InputLocation";

const Header = ({
  isShowCartButton,
  isShowInputLocation,
  unScroll,
  children,
  style,
}) => {
  const dispatch = useDispatch();

  const headerRef = useRef();

  const logoRedRef = useRef();

  const logoWhiteRef = useRef();

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

  const handleCloseCart = () => {
    dispatch(DrawerManagerSlice.actions.setOpenCartDrawer(false));
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
      logoRedRef.current.classList.remove("hide");
      logoWhiteRef.current.classList.add("hide");
    } else {
      headerRef.current.classList.remove("scrollHeader");
      logoRedRef.current.classList.add("hide");
      logoWhiteRef.current.classList.remove("hide");
    }
  };

  useEffect(() => {
    if (!unScroll) {
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
    } else {
      handleChangeHeader(true);
    }
  }, []);

  return (
    <Box
      ref={headerRef}
      sx={{
        display: "flex",
        width: "100%",
        position: "fixed",
        top: "0",
        justifyContent: "center",
        padding: "10px 0px 0px 0px",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 2,
        boxShadow: style?.boxShadow,
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
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              cursor: "pointer",
              marginRight: "50px",
            }}
            onClick={() => {
              window.location.href = "/";
            }}
          >
            <img
              alt="logo"
              id="logo"
              src="/static/images/logoWhite.png"
              ref={logoWhiteRef}
            />
            <img
              alt="logo"
              id="logo"
              className="hide"
              src="/static/images/logoRed.png"
              ref={logoRedRef}
            />
          </Box>
          {isShowInputLocation ? <InputLocation /> : <></>}
        </Box>

        <Box
          display={"flex"}
          sx={{
            alignItems: "center",
          }}
        >
          {isShowCartButton ? <CartButton /> : <></>}
          <EmptyCartDrawer>
            <Button
              color="error"
              sx={{ marginTop: "20px" }}
              endIcon={<EastIcon />}
              onClick={handleCloseCart}
            >
              Countinue shopping
            </Button>
          </EmptyCartDrawer>
          <UserBox />
          <UserMenuDrawer />
          <Button
            onClick={handleOpenLangMenu}
            endIcon={<ArrowDropDownIcon />}
            sx={{
              margin: "10px",
              backgroundColor: "#f0f0f0dd",
              "&:hover": { backgroundColor: "#e9e9e9dd" },
              borderRadius: "65px",
              padding: "12px",
            }}
            color="error"
            disableElevation
            variant="text"
          >
            <Typography variant="h6" fontSize={"16px"}>
              {lang}
            </Typography>
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
      {children}
    </Box>
  );
};

export default Header;
