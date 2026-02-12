import { useParams } from "react-router-dom";
import StockDetailHeader from "../components/StockOverview/StockDetailHeader";

type StockRouteParams = {
  symbol: string;
};

const StockOverview = () => {
  const { symbol } = useParams<StockRouteParams>();

  return (
    <div>
      <StockDetailHeader symbol={symbol} />
    </div>
  );
};

export default StockOverview;
