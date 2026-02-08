import { Line } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";

import { graphdata } from "../../Page/Dashboard";
import { Box } from "@mui/material";

interface prop {
  indexName: string | null;
  insightData: graphdata | null;
  interval: string | null;
}

const options: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    tooltip: { mode: "index", intersect: false },
    
  },
  scales: {
    x: {
      ticks: {
        maxTicksLimit: 10, // ✅ X-axis labels
        autoSkip: true, // important for large datasets
      },
      grid: { display: false },
    },
    y: {
      ticks: {
        maxTicksLimit: 20, // ✅ Y-axis labels
      },
      grid: { display: false },
      
    },
  },
};

const IndicesInsights = ({ indexName, insightData, interval }: prop) => {
  let time: string[] = [];
  let priceArray: number[] = [];

  const timeConversion = () => {
    if (insightData) {
      insightData.forEach(([timestamp]) => {
        
          time.push(
            interval === "1D"
              ? new Date(timestamp).toLocaleTimeString("en-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })
              : new Date(timestamp).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "short",
                }),
          );
        
      });
    }

    return time;
  };

  const priceConversion = () => {
    if (insightData) {
      insightData.forEach(([, price]) => {
        
          priceArray.push(price);
        
      });
    }
    return priceArray;
  };

  const tempdata: ChartData<"line", number[], string> = {
    labels: timeConversion(),
    datasets: [
      {
        label: indexName ?? " ",
        data: priceConversion(),
        fill: true,
        backgroundColor: "rgb(122, 199, 243)",
        borderColor: "rgb(191, 189, 189)",
        tension: 0.1,
      },
    ],
  };
  return (
    <Box style={{ height: '74%', width: "100.5%" }}>
      <Line height={'100%'} data={tempdata} options={options} />
    </Box>
  );
};

export default IndicesInsights;
