import { Line } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";
import type { graphdata } from "../../Page/Dashboard";


interface prop {
  indexName: string | null;
  insightData: graphdata | null;
}

const options: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    tooltip: { mode: "index", intersect: false },
  },
};

const IndicesInsights = ({indexName, insightData}:prop) => {


console.log(indexName);
console.log(insightData)
    
  const labels: string[] = [
    
  ];
  const tempdata: ChartData<"line", number[], string> = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  return (
    <div style={{ height: 300 }}>
      <Line data={tempdata} options={options} />
    </div>
  );
};

export default IndicesInsights;
