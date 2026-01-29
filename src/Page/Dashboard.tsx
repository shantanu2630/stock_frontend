// import React from 'react'

import { Grid } from "@mui/material";
import AllIndices from "../components/Dashboard/AllIndices";
import { useEffect, useState } from "react";
import { EquityList, OneDayEquityData } from "../api/api";
import IndicesInsights from "../components/Dashboard/IndicesInsights";

export type ResponseData = {
  indexSymbol: string;
  last: number;
  percentChange: number;
}
export type InsightData = [
  time: string,
  price: number,
]
export type graphdata = InsightData[] | null;

const Dashboard = () => {

    const [data, setData] = useState<ResponseData[] | null>(null);
    const [selectedCard,setSelectedCard] = useState<string | null >(data?.[0].indexSymbol ?? null)
    const [insightData,setInsightData] = useState<graphdata | null >(null);

  useEffect(() => {
    const res = EquityList();
    res.then((data: any) => setData(data));
  }, []);

  useEffect(() => {
    OneDayEquityData(selectedCard).then((data) => setInsightData(data));
  }, [selectedCard]);



  return (
    <Grid
      container
      width={"100vw"}
      minHeight={700}
      sx={{ position: "fixed", top: 90,}}
    >
      <Grid size={8} sx={{ border: "2px solid white" }}>
        <AllIndices data={data} setSelectedCard={setSelectedCard} />
        <IndicesInsights indexName={selectedCard} insightData={insightData} />
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
