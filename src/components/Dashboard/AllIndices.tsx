import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useNavigate } from "react-router-dom";

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
  console.log(data)
const navigate=useNavigate()
  return (
    <><Box
      sx={{
       display:"flex",
       gap:1
      }}
    >
      {data &&
        data.slice(0, 6).map((item, key) => (
          <Card key={key}>
            <CardActionArea
              onClick={() => setSelectedCard(item.indexSymbol)}
            >
              <CardHeader title={item.indexSymbol}></CardHeader>
              <CardContent>
                <Typography color="primary.main" m={0} p={0}>
                  {item.last}
                </Typography>
                <Typography
                  fontSize={12}
                  color={item.percentChange.toString().startsWith("-")
                    ? "error"
                    : "success"}
                >
                  {item.variation} ({item.percentChange}%)
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
        <Tooltip title='Click to see all index'>
        <IconButton onClick={()=>navigate("/allIndices")} size="small" ><ArrowForwardIosOutlinedIcon fontSize='medium' color="warning"/></IconButton>
        </Tooltip>
    </Box></>
  );
};

export default AllIndices;
