import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { theme } from "../theme";
import Button from "@mui/material/Button";
import logo from "../assets/LOGO.png";
import {  Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  borderRadius: 10,
  borderColor: theme.palette.common.black,
  backgroundColor: theme.palette.common.white,
 

}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(1, 2),
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.black,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.common.black,
  border: `1px solid ${theme.palette.common.black}`,
  borderRadius: 50,
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 1),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    
    
  },
}));

export default function Head() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <Box >
      <AppBar elevation={0}>
        <Toolbar
          sx={{ backgroundColor: theme.palette.primary.light,height:"2vh"}}
        >
          <Grid flex={1} container spacing={2} >
            <Grid size={{ xs: 3}} p={2}>
              <img src={logo} alt="Logo" width="150" />
            </Grid>
            <Grid size={5.25} pt={9}>
             
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  
                />
              </Search>
            </Grid>
            <Grid size={2.5} pt={7}>
              <Box sx={{ flexGrow: 1, display: { xs: "flex"} }}>
                <Link style={{textDecoration:"none"}} to='/'>
                <Button
                  sx={{
                    my: 2,
                    fontWeight: "bold",
                    color: "primary.main",
                    display: "block",
                  }}
                >
                  Home
                </Button>
                </Link>
                 <Link to='/stocks' style={{textDecoration:"none"}} >
                <Button
                  sx={{
                    my: 2,
                    fontWeight: "bold",
                    color: "primary.main",
                    display: "block",
                  }}
                >
                  Stocks
                </Button>
                </Link>
                  <Link to='/funds' style={{textDecoration:"none"}}>
                <Button
                  sx={{
                    my: 2,
                    fontWeight: "bold",
                    color: "primary.main",
                    display: "block",
                  }}
                >
                  
                  Fund
                </Button>
                </Link>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="primary"
                >
                  <AccountCircle />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      {renderMenu}
    </Box>
  );
}
