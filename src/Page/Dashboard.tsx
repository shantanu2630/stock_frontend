// import React from 'react'

import { Grid } from "@mui/material";
import AllIndices from "../components/Dashboard/AllIndices";


const Dashboard = () => {
  return (
    <Grid
      container
      width={"100vw"}
      sx={{ position: "fixed", top: 90,}}
    >
      <Grid size={8}>
        <AllIndices/>
      </Grid>
      <Grid
        size={4}
       
      >
       <></>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
