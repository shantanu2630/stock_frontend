import { Box, Grid, TextField, Typography } from "@mui/material";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';

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
          <Grid size={3}>
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
            <TextField  size="small" fullWidth/>
          </Grid>
          <Grid size={3}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="icon tabs example"
            >
              <Tab icon={<HomeOutlinedIcon />} aria-label="home" />
              <Tab icon={<AccountCircleOutlinedIcon />} aria-label="person" />
              <Tab icon={<LiveHelpOutlinedIcon/>} aria-label="favorite" />
            </Tabs>
          </Grid>
        </Grid>
        <Grid size={8}></Grid>
      </Box>
    </>
  );
}
