import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import type { ResponseData } from "../../Page/Dashboard";


interface prop {
  data: ResponseData[] | null;
  setSelectedCard: React.Dispatch<React.SetStateAction<string | null>>;
}

const AllIndices = ({ data, setSelectedCard }: prop) => {

  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
        gap: 2,
        // border: "2px solid white",
      }}
    >
      {data &&
        data.slice(0, 5).map((item, key) => (
          <Card key={key} sx={{ width: 180, height: 90 }}>
            <CardActionArea
                onClick={() => setSelectedCard(item.indexSymbol)}
                // data-active={selectedCard === item.indexSymbol ? "" : undefined} 
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
              <CardHeader
                title={item.indexSymbol}
                sx={{
                  p: 1,
                  "& .MuiCardHeader-title": {
                    fontSize: "0.8rem",
                  },
                }}
              />
              <CardContent sx={{ height: "100%", p: 1, pt: 0 }}>
                <Typography
                  variant="subtitle1"
                  sx={{ fontSize: "0.9rem" }}
                  component="div"
                >
                  {item.last}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ fontSize: "0.7rem" }}
                >
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
