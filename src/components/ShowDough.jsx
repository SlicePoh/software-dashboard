import {React} from "react";
import { Doughnut } from 'react-chartjs-2'
import { doughChartData } from "../data/dummy";
import { Chart as ChartJS,LineElement,Legend, Tooltip,Title, CategoryScale, LinearScale, PointElement, Filler } from "chart.js/auto";
ChartJS.register(
  LineElement,Legend, Tooltip,Title,CategoryScale,LinearScale, PointElement,Filler
)
export const ShowDough=()=> {
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
    labels: doughChartData.map((data) => data.x),
        datasets: [
          {
            label: "Rate",
            data: doughChartData.map((data) => data.entries),
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
            <Doughnut data={userData} options={options} />
        </div>
    );
};