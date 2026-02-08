// import React from 'react'

import { Grid } from "@mui/material";

import { useEffect, useState } from "react";
import { EquityList, intervalEquityData } from "../api/api";
import IndicesInsights from "../components/Dashboard/IndicesInsights";
import AllIndices from "../components/Dashboard/AllIndices";
import IntervalButton from "../components/Dashboard/IntervalButton";
import IndicesList from "../components/Dashboard/IndicesList";

export type ResponseData = {
  indexSymbol: string;
  last: number;
  percentChange: number;
  variation: number;
};
export type InsightData = [time: string, price: number];

export type graphdata = InsightData[] | null;

const Dashboard = () => {
  const [data, setData] = useState<ResponseData[] | null>(null);
  const [selectedCard, setSelectedCard] = useState<string | null>(
    data?.[0].indexSymbol ?? "NIFTY 50",
  );

  const [interval, setInterval] = useState<string | null>("1D");
  const [insightData, setInsightData] = useState<graphdata | null>(null);


  useEffect(() => {
    const res = EquityList();
    res.then((data: any) => setData(data));
  }, []);

  useEffect(() => {
    intervalEquityData(selectedCard,interval).then((data) => setInsightData(data));
  }, [selectedCard,interval]);

  return (
    <Grid
      container
      width={"100vw"}
      height={'100vh'}
      sx={{ position: "fixed", top: 90,marginLeft:2}}
    >
      <Grid size={8} >
        <AllIndices data={data} setSelectedCard={setSelectedCard} />
        <IntervalButton  interval={interval} handleSetInterval={setInterval} />
        <IndicesInsights indexName={selectedCard} insightData={insightData} interval={interval} />
      </Grid>
      <Grid
        size={4}
      >
       <IndicesList data={data}/>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
