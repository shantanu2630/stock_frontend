import { alpha, Box, Grid, InputBase, styled, TextField, Typography } from "@mui/material";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
export default function Header() {
  const now = new Date();

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          width: "100%",
          //maxWidth: 1400, // optional constraint
          padding: "0 10px",
          boxSizing: "border-box",
          height: 90,
          borderRadius: 2,
          margin: 2,
        }}
      >
        <Grid container sx={{ height: "100%" }}>
          <Grid size={2.1}>
            {/* LEFT PART */}
            <Typography
              color="primary.main"
              sx={{
                position: "fixed",
                left: 30,
                fontSize: 10,
                top: 10,
              }}
            >
              {now.toLocaleDateString(undefined, {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}{" "}
              |{" "}
              {now.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                position: "fixed",
                top: 30,
                left: 30,
                color: "primary.main",
                fontWeight: "bold",
              }}
            >
              Welcome,{" "}
              <Box component="span" color="success.main">
                {/* {userName} */}
                SHERA
              </Box>
            </Typography>
          </Grid>
          <Grid size={6}>
            {/* <TextField
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "primary.main" },
                  "&:hover fieldset": { borderColor: "secondary.main" },
                  "&.Mui-focused fieldset": { borderColor: "secondary.main" },
                },
              }}
              size="small"
              fullWidth
            /> */}
            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </Grid>
          <Grid ml={1} size={3.65} height={"10%"}>
            <Tabs
              value={value}
              onChange={handleChange}
              sx={{
                border: 1,
                borderColor: "#000000",
                borderRadius: 1,
                minHeight: 40,
                "& .MuiTab-root": { minHeight: 40, padding: "6px 12px" },
              }}
            >
              <Tab icon={<HomeOutlinedIcon />} aria-label="home" />
              <Tab icon={<AccountCircleOutlinedIcon />} aria-label="person" />
              <Tab icon={<LiveHelpOutlinedIcon />} aria-label="favorite" />
            </Tabs>
          </Grid>
        </Grid>
        <Grid size={8}></Grid>
      </Box>
    </>
  );
}
