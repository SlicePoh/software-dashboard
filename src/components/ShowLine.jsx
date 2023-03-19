///import {React , useState} from "react";
import { Line } from "react-chartjs-2";
import { UserData } from "../data/data";
import { Chart as ChartJS,LineElement,Legend, Tooltip,Title, CategoryScale, LinearScale, PointElement, Filler } from "chart.js/auto";
ChartJS.register(
  LineElement,Legend, Tooltip,Title,CategoryScale,LinearScale, PointElement,Filler
);

export const ShowLine=()=> {
    const options={
        maintainAspectRatio: false,
        indexAxis: 'x',
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: "#d8b4fe",
                bodyColor: "#000",
            },
        },
        scales: {
            y:{
                ticks:{
                    maxTicksLimit: 5
                },
            },
            x:{
                ticks:{
                    maxTicksLimit: 8
                },
            }
        },
    };
    const userData = {
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: "Users Gained",
                data: UserData.map((data) => data.userGain),
                backgroundColor: [
                "#4c1d95",
                ],
                borderColor: "#4c1d95",
                borderWidth: 2,
                tension: 0.4,
                pointStyle: false,
            },
            {
                label: "Users Lost",
                data: UserData.map((data) => data.userLost),
                backgroundColor: [
                "#e2e8f0",
                ],
                borderColor: "#e2e8f0",
                borderWidth: 2,
                tension: 0.4,
                pointStyle: false,
            },
        ],
        
    };
    return (
        <div style={{ width: '1000px', height: '250px'}}>
            <Line data={userData} options={options} />
        </div>
    );
};
// import {React , useState} from "react";
// import {LineChart} from "./LineChart";
// import { UserData } from "../data/data";
// import { Chart as ChartJS,LineElement,Legend, Tooltip,Title, CategoryScale, LinearScale, PointElement, Filler } from "chart.js/auto";
// ChartJS.register(
//   LineElement,Legend, Tooltip,Title,CategoryScale,LinearScale, PointElement,Filler
// )
// export const ShowLine=({ chartData })=> {
//     const options={
//         indexAxis: 'x',
//         plugins: {
//             tooltip: {
//                 backgroundColor: "#fff",
//                 bodyColor: "#000",

//             }
//         }
//     }
//     const [userData] = useState({
//         labels: UserData.map((data) => data.year),
//         datasets: [
//             {
//                 label: "Users Gained",
//                 data: UserData.map((data) => data.userGain),
//                 backgroundColor: [
//                 "#4c1d95",
//                 ],
//                 borderColor: "#4c1d95",
//                 borderWidth: 2,
//                 tension: 0.4,
//                 pointStyle: false,
//             },
//             {
//                 label: "Users Lost",
//                 data: UserData.map((data) => data.userLost),
//                 backgroundColor: [
//                 "#e2e8f0",
//                 ],
//                 borderColor: "#e2e8f0",
//                 borderWidth: 2,
//                 tension: 0.4,
//                 pointStyle: false,
//             },
//         ],
        
//     });
//     return (
//         <div style={{ width: '700px' }}>
//             <LineChart chartData={userData} />
//         </div>
//     );
// };