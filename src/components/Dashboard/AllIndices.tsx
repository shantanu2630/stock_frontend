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
}

const AllIndices = () => {
  const [data, setData] = useState<ResponseData[] | null>(null);

  useEffect(() => {
    const res = EquityList();
    res.then((data: any) => setData(data));
    
  }, []);
  console.log("data", data);
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
        gap: 2,
        border: "2px solid white",
      }}
    >
      {data &&
        data.slice(0, 5).map((item, key) => (
          <Card key={key}>
            <CardActionArea
              //   onClick={() => setSelectedCard(index)}
              //   data-active={selectedCard === index ? "" : undefined}
              sx={{
                height: "100%",
                "&[data-active]": {
                  backgroundColor: "action.selected",
                  "&:hover": {
                    backgroundColor: "action.selectedHover",
                  },
                },
              }}
            >
              <CardHeader title={item.indexSymbol} />
              <CardContent sx={{ height: "100%" }}>
                <Typography variant="h5" component="div">
                  {item.last}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.percentChange}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
    </Box>
  );
};

export default AllIndices;
