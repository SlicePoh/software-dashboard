import {React} from "react";
import { Doughnut } from 'react-chartjs-2'
import { doughChartData } from "../data/dummy";
import { Chart as ChartJS,LineElement,Legend, Tooltip,Title, CategoryScale, LinearScale, PointElement, Filler } from "chart.js/auto";
ChartJS.register(
  LineElement,Legend, Tooltip,Title,CategoryScale,LinearScale, PointElement,Filler
)
export const ShowDough=()=> {

  // const plugins = [{
  //   beforeDraw: function(chart) {
  //    var width = chart.width,
  //        height = chart.height,
  //        ctx = chart.ctx;
  //        ctx.restore();
  //        var fontSize = (height / 100).toFixed(2);
  //        ctx.font = fontSize + "em sans-serif";
  //        ctx.textBaseline = "top";
  //        var text = "Foo-bar",
  //        textX = Math.round((width - ctx.measureText(text).width) / 2),
  //        textY = height / 2;
  //        ctx.fillText(text, textX, textY);
  //        ctx.save();
  //   } 
  // }]
 

  const options ={
    centerText: {
      display: true,
      text: `90%`
    },
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
        <div style={{ width: '500px',height: '150px' }}>
            <Doughnut data={userData} options={options} plugins={''} />
        </div>
    );
};