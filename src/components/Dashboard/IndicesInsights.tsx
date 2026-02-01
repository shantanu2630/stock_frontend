import { Line } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";
import type { graphdata } from "../../Page/Dashboard";
import { OneDayEquityData } from "../../api/api";
import { useEffect, useState } from "react";

interface prop {
  indexName: string | null;
}

export type GraphDataPoint = [number, number, string];

const options: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    tooltip: { mode: "index", intersect: false },
  },
};

const IndicesInsights = ({ indexName }: prop) => {
  const [insightData, setInsightData] = useState<graphdata | null>(null);

  useEffect(() => {
    OneDayEquityData(indexName).then((data) => setInsightData(data));
  }, [indexName]);

  // console.log(indexName);
  // console.log(insightData);

  let time: string[] = [];
  let priceArray: number[] = [];

  const timeConversion = () => {
    if (insightData) {
      insightData.forEach(([timestamp], key) => {
        if (key % 15 === 0) {
          time.push(
            new Date(timestamp).toLocaleString("en-IN", {
              timeZone: "Asia/Kolkata",
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            }),
          );
        }
      });
    }
    return time;
  };

  const priceConversion = () => {
    if (insightData) {
      insightData.forEach(([, price], key) => {
        if (key % 3 === 0) {
          priceArray.push(price);
        }
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
    <div style={{ height: 850, width: "100%" }}>
      <Line data={tempdata} options={options} />
    </div>
  );
};

export default IndicesInsights;
