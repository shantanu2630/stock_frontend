import { Line } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";
import type { graphdata } from "../../Page/Dashboard";
import { OneDayEquityData } from "../../api/api";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

interface prop {
  indexName: string | null;
}

export type GraphDataPoint = [number, number, string];

const options: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    tooltip: { mode: "index", intersect: false },
  },
  scales: {
    x: {
      grid: {
        display: false, // removes vertical grid lines
      },
      ticks: {
        maxTicksLimit: 10,
      },
    },
    y: {
      grid: {
        display: false, // removes horizontal grid lines
      },
      ticks: {
        maxTicksLimit: 20,
      },
    },
  },
};

const IndicesInsights = ({ indexName }: prop) => {
  const [insightData, setInsightData] = useState<graphdata | null>(null);

  useEffect(() => {
    OneDayEquityData(indexName).then((data) => setInsightData(data));
  }, [indexName]);

  let time: string[] = [];
  let priceArray: number[] = [];

  const timeConversion = () => {
    if (insightData) {
      insightData.forEach(([timestamp]) => {
        const date = new Date(timestamp); // timestamp in ms
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        time.push(`${hours}:${minutes}`);
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
        label: indexName ? indexName : " ",
        data: priceConversion(),
        fill: false,
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
