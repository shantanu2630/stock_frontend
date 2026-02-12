import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { StockDetails } from "../../api/api";
import { ListItem,  Stack } from "@mui/material";


const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

type StockProps = {
  symbol: string | undefined;
};

export type StockDetailData = {
  indexSymbol: string;
  isin: string;
  value: number;
  low: number;
  high: number;
  open: number;
  close: number;
  prevClose: number;
  change: number;
  percentChange: number;
  identifier: string;
};


const StockDetailHeader: React.FC<StockProps> = ({ symbol }) => {
  const [stockDetails, setStockDetails] = useState<StockDetailData | null>(
    null,
  );

  useEffect(() => {
    StockDetails(symbol).then((data) => setStockDetails(data));
  }, [symbol]);

  console.log(stockDetails);
  // console.log(setStockDetails)

  return (
    <Card
      sx={{
        minWidth: 275,
        backgroundColor: "main.primary",
        top: 90,
        position: "fixed",
        width: "90vw",
        minHeight: "30vh",
        marginLeft: 2,
      }}
    >
      <CardContent>
        <Typography variant="h5" gutterBottom color="primary.main">
          {stockDetails?.indexSymbol}({stockDetails?.isin})
        </Typography>
        <Typography
          variant="h4"
          gutterBottom
          color="primary.main"
          sx={{ display: "flex" }}
        >
          {stockDetails?.prevClose}
          <Typography
            variant="h5"
            gutterBottom
            color="primary.main"
            sx={{ paddingTop: 0.5, pl: 1 }}
          >
            {" "}
            {stockDetails?.change} ( {stockDetails?.percentChange.toFixed(2)}%)
          </Typography>
        </Typography>
        <Stack direction="row" spacing={2} sx={{ color: "primary.main" }}>
          <ListItem sx={{ display: "flex", flexDirection: "column" }}>
            {" "}
            <Typography variant="h6" gutterBottom>
              Prev. Close{" "}
            </Typography>
            <Typography variant="h5" gutterBottom>
              {stockDetails?.prevClose}
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "column" }}>
            {" "}
            <Typography variant="h6" gutterBottom>
              Prev. Close{" "}
            </Typography>
            <Typography variant="h5" gutterBottom>
              {stockDetails?.open}
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "column" }}>
            {" "}
            <Typography variant="h6" gutterBottom>
              Prev. Close{" "}
            </Typography>
            <Typography variant="h5" gutterBottom>
              {stockDetails?.high}
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "column" }}>
            {" "}
            <Typography variant="h6" gutterBottom>
              Prev. Close{" "}
            </Typography>
            <Typography variant="h5" gutterBottom>
              {stockDetails?.low}
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "column" }}>
            {" "}
            <Typography variant="h6" gutterBottom>
              Prev. Close{" "}
            </Typography>
            <Typography variant="h5" gutterBottom>
              {stockDetails?.close}
            </Typography>
          </ListItem>
          
        </Stack>
      </CardContent>
    </Card>
  );
};

export default StockDetailHeader;
