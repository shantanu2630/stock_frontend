import { Box, Grid, Typography } from "@mui/material";
import React from "react";

interface KPI {
  label: string;
  value: string;
  delta?: string;
  positive?: boolean;
}

interface HeaderProps {
  userName: string;
  liveStatusText: string;
  kpis: KPI[];
}

function Header({ userName, liveStatusText, kpis }: HeaderProps) {
  const now = new Date();

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",

          width: "100%",
          //maxWidth: 1400, // optional constraint
          padding: "0 10px",
          boxSizing: "border-box",

          height: 120,
          borderRadius: 2,
        }}
      >
        <Grid container sx={{ height: "100%" }}>
          <Grid size={8}>
            {/* LEFT PART */}
            <Typography
              variant="caption"
              color="white"
              sx={{
                position: "fixed",
                left: 30,
                fontSize: 10,
                top: 10,
                fontFamily: "monospace",
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
                fontFamily: "monospace",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Good evening,{" "}
              <Box component="span" color="success.main">
                {/* {userName} */}
                SHERA
              </Box>
            </Typography>
          </Grid>
          <Grid size={4} >
            {/* RIGHT PART */}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Header;
