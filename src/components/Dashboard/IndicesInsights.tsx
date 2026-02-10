import { Line } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";
import { Chart as ChartJS } from "chart.js";
import { graphdata } from "../../Page/Dashboard";
import { Box } from "@mui/material";
import { theme } from "../../theme";
import zoomPlugin from "chartjs-plugin-zoom";
// import { useRef } from "react";

ChartJS.register(zoomPlugin);

interface prop {
  indexName: string | null;
  insightData: graphdata | null;
  interval: string | null;
}

const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  
  plugins: {
    legend: { display: false, // ✅ hides the label/legend 
    },
    zoom: {
      zoom: {
        wheel: {
          enabled: true, // ✅ zoom with mouse wheel
        },
        pinch: {
          enabled: true, // ✅ zoom with pinch gesture
        },
        mode: "x", // zoom only on X axis (use "xy" for both axes)
      },
    },
    tooltip: { mode: "nearest", intersect: false,displayColors: false,},
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
      const date = new Date(timestamp);

      time.push(
        interval === "1D"
          ? `${String(date.getUTCHours()).padStart(2, "0")}:${String(
              date.getUTCMinutes()
            ).padStart(2, "0")}`
          : `${String(date.getUTCDate()).padStart(2, "0")} ${date.toLocaleString(
              "en-US",
              { month: "short", timeZone: "UTC" }
            )}`
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
        fill: false,
        backgroundColor: "rgb(122, 199, 243)",
        segment: {
          borderColor: (ctx) =>
            ctx.p0.parsed.y &&
            ctx.p1.parsed.y &&
            ctx.p0.parsed.y > ctx.p1.parsed.y
              ? theme.palette.error.main
              : theme.palette.secondary.main,
        },
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  // const chartRef = useRef<any>(null);
  // const resetZoom = () => {
  //   if (chartRef.current) {
  //     chartRef.current.resetZoom();
  //   }
  // };
  return (
    <Box style={{ height: 480, width: "100%" }}>
      {/* <Line ref={chartRef} height={"100%"} data={tempdata} options={options} /> */}
      <Line  data={tempdata} options={options} />
      {/* <button onClick={resetZoom}>Reset Zoom</button> */}
    </Box>
  );
};

export default IndicesInsights;
