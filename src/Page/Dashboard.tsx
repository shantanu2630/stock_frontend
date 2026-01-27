// import React from 'react'

import { Grid } from "@mui/material";
import AllIndices from "../components/Dashboard/AllIndices";


const Dashboard = () => {
  return (
    <Grid
      container
      width={"100vw"}
      minHeight={700}
      sx={{ position: "fixed", top: 90,}}
    >
      <Grid size={8} sx={{ border: "2px solid white" }}>
        <AllIndices/>
      </Grid>
      <Grid
        size={4}
        // sx={{ border: "2px solid white"}}
      >
        grid 2
      </Grid>
    </Grid>
  );
};

export default Dashboard;
