// import React from 'react'

import { Grid } from "@mui/material";

import { useEffect, useState } from "react";
import { EquityList} from "../api/api";
import IndicesInsights from "../components/Dashboard/IndicesInsights";
import AllIndices from "../components/Dashboard/AllIndices";

export type ResponseData = {
  indexSymbol: string;
  last: number;
  percentChange: number;
  variation: number;
}
export type InsightData = [
  time: string,
  price: number,
]
export type graphdata = InsightData[] | null;

const Dashboard = () => {

    const [data, setData] = useState<ResponseData[] | null>(null);
    const [selectedCard,setSelectedCard] = useState<string | null >(data?.[0].indexSymbol ?? "NIFTY 50")
    

  useEffect(() => {
    const res = EquityList();
    res.then((data: any) => setData(data));
  }, []);

  return (
    <Grid
      container
      width={"100vw"}
      sx={{ position: "fixed", top: 90,}}
    >
      <Grid size={8} >
        <AllIndices data={data} setSelectedCard={setSelectedCard} />
        <IndicesInsights indexName={selectedCard}  />
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
