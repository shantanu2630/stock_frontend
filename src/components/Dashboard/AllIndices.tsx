import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { EquityList } from "../../api/equityList";
import { useEffect, useState } from "react";

interface ResponseData {
  indexSymbol: string;
  last: number;
  percentChange: number;
  variation:number;
}

const AllIndices = () => {
  const [data, setData] = useState<ResponseData[] | null>(null);

  useEffect(() => {
    const res = EquityList();
    res.then((data: any) => setData(data));
    
  }, []);
  
  return (
    <Box
      sx={{
        gridTemplateColumns: "repeat(auto-fill, minmax(min(15%, 100%), 1fr))",
        gap: 1,
        display:"grid"
      }}
    >
      {data &&
        data.map((item, key) => (
          <Card key={key}>
            <CardActionArea
              //   onClick={() => setSelectedCard(index)}
              //   data-active={selectedCard === index ? "" : undefined}

            >
              <CardHeader title={item.indexSymbol}></CardHeader>
              <CardContent >
                <Typography m={0} p={0}>
                  {item.last}
                </Typography>
                <Typography fontSize={12} color={item.percentChange.toString().startsWith('+')?'error':'success'}>
                  {item.variation} ({item.percentChange}%)
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
    </Box>
  );
};

export default AllIndices;
