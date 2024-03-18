import { Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import UserBox from "./UserBox";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import { useDispatch } from "react-redux";
import DrawerManagerSlice from "../../redux/slices/DrawerManagerSlice";
import EmptyCart from "../cart/EmptyCartDrawer";
import UserMenuDrawer from "./UserMenuDrawer";

const Header = () => {
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

  const handleOpenUserDrawer = () => {
    console.log("ncssss");
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
  return (
    <Box
      display={"flex"}
      sx={{
        width: "100%",
        justifyContent: "center",
        marginTop: "10px",
        position: "fixed",
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
              backgroundColor: "#ffff",
              "&:hover": { backgroundColor: "#e9e9e9dd" },
            }}
            aria-label="open cart"
            color="primary"
            onClick={handleOpenCart}
          >
            <ShoppingCartOutlinedIcon />
          </IconButton>
          <EmptyCart />
          <UserBox />
          <UserMenuDrawer />
          <Button
            onClick={handleOpenLangMenu}
            endIcon={<ArrowDropDownIcon />}
            sx={{
              margin: "10px",
              backgroundColor: "#ffff",
              "&:hover": { backgroundColor: "#e9e9e9dd" },
            }}
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
