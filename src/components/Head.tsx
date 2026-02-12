import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { theme } from "../theme";
import Button from "@mui/material/Button";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  borderColor: theme.palette.common.black,
  backgroundColor: theme.palette.common.white,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
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
  borderRadius: 4,
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
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
    <Box sx={{ flexGrow: 1, backgroundColor: theme.palette.primary.light }}>
      <AppBar position="static" elevation={0}>
        <Toolbar sx={{ backgroundColor: theme.palette.primary.light }}>
          <Typography
            variant="h6"
            color="primary"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            My Site
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          {/* <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="small"  color="info">
              Home
            </IconButton>
            <IconButton
              size="small"
              aria-label="show 17 new notifications"
              color="primary"
            >
              Stocks
            </IconButton>
            <IconButton
              size="small"
              aria-label="show 17 new notifications"
              color="primary"
            >
              Mutual Fund
            </IconButton>
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
          </Box> */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
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
        </Toolbar>
      </AppBar>

      {renderMenu}
    </Box>
  );
}
