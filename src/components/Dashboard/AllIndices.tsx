import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

interface ResponseData {
  indexSymbol: string;
  last: number;
  percentChange: number;
  variation: number;
}

interface prop {
  data: ResponseData[] | null;
  setSelectedCard: React.Dispatch<React.SetStateAction<string | null>>;
}

const AllIndices = ({ data, setSelectedCard }: prop) => {

  return (
    <Box
      sx={{
        gridTemplateColumns: "repeat(auto-fill, minmax(min(15%, 100%), 1fr))",
        gap: 1,
        display: "grid",
      }}
    >
      {data &&
        data.slice(0,6).map((item, key) => (
          <Card key={key}>
            <CardActionArea
              onClick={() => setSelectedCard(item.indexSymbol)}
              //   data-active={selectedCard === index ? "" : undefined}
            >
              <CardHeader title={item.indexSymbol}></CardHeader>
              <CardContent>
                <Typography color="primary.main" m={0} p={0}>
                  {item.last}
                </Typography>
                <Typography
                  fontSize={12}
                  color={
                    item.percentChange.toString().startsWith("-")
                      ? "error"
                      : "success"
                  }
                >
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
