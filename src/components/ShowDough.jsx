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
            align: 'center',
            labels: {
              borderColor: "#000",
              useBorderRadius: true,
              borderRadius: 2,
              boxWidth: 40
            }
        },
    },
    cutout: '80%',
    borderRadius: 10,
  };
  const userData={
    labels: doughChartData.map((data) => data.x),
        datasets: [
          {
            label: "Rate",
            data: doughChartData.map((data) => data.entries),
            backgroundColor: [
              "#7459D9",
              "rgba(116, 89, 217, 0.5)",
              "rgba(116, 89, 217, 0.2)",
            ],
          },
        ],
  };
    return (
        <div style={{ width: '500px',height: '145px' }}>
            <Doughnut data={userData} options={options} plugins={''} />
        </div>
    );
};