import {React} from "react";
import { Doughnut } from 'react-chartjs-2'
import { dough2ChartData } from "../data/dummy";
import { Chart as ChartJS,ArcElement,Legend, Tooltip,Title, CategoryScale, LinearScale, PointElement, Filler } from "chart.js/auto";
ChartJS.register(
  ArcElement,Legend, Tooltip,Title,CategoryScale,LinearScale, PointElement,Filler
)

export const Show2Dough=()=> {
    const options ={
        plugins: {
            legend: {
                display: false
            },
        },
        cutout: 23,
    };
    
    const data = {
        labels: dough2ChartData.map((data) => data.x),
        datasets: [
          {
            label: "Rate",
            data: dough2ChartData.map((data) => data.y),
            backgroundColor: [
              "#7459D9",
              "rgba(116, 89, 217, 0.2)",
            ],
            borderWidth: 0,
          },
        ],
    };
    const textCenter ={
        id:'textCenter',
        beforeDatasetDraw(chart){
            const{ctx,data}=chart;
            ctx.save();
            ctx.font='bolder';
            ctx.textAlign='middle';
            ctx.fillText(data,chart.getDatasetMeta(0).data[0].y)
        }
    };

    
    return (
        <div style={{ width: 60 }}>
            <Doughnut data={data} options={options} plugins={textCenter}  />
        </div>
    );
};