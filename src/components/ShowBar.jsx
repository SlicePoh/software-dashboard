import {React} from "react";
import { Bar } from 'react-chartjs-2'
import { barChartData } from "../data/dummy";
import { Chart as ChartJS,LineElement,Legend, Tooltip,Title, CategoryScale, LinearScale, PointElement, Filler } from "chart.js/auto";
ChartJS.register(
  LineElement,Legend, Tooltip,Title,CategoryScale,LinearScale, PointElement,Filler
)
export const ShowBar=()=> {
  const options ={
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'right',
            align: 'start',
            labels: {
              backgroundColor: "red",
              borderColor: "#000",
              useBorderRadius: true,
              borderRadius: 5,
              boxWidth: 40
            }
        },
    },
    cutout: '80%',
    borderRadius: 15,
  };
  const userData={
    labels: barChartData.map((data) => data.x),
        datasets: [
          {
            label: "Rate",
            data: barChartData.map((data) => data.entries),
            backgroundColor: [
              "#9333ea",
              "#d8b4fe",
              "#f3e8ff",
            ],
          },
        ],
  };
    return (
        <div style={{ width: '400px',height: '100px' }}>
            <Bar data={userData} options={options} />
        </div>
    );
};