import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,     // Y-axis
  CategoryScale,   // X-axis (months)
  Tooltip,
  Legend,
  Filler
);
