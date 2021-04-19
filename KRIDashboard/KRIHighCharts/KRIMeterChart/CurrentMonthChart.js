import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highcharts3d from "highcharts/highcharts-3d";

highcharts3d(Highcharts);

const DonutChart = () => {
  const options = {
    chart: {
      type: "pie",
      options3d: {
        enabled: true,
        alpha: 0,
      },
      width: "550",
      height: "366",
      backgroundColor: "#eef0f6",
    },
    colors: ["green", "red", "yellow"],
    title: {
      text: "KRI Meter - Current Month",
      align: "left",
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        color: "#2F3E88",
      },
    },
    tooltip: {
      backgroundColor: "#333333",
      borderRadius: "20",
      followPointer: true,
      style: {
        color: "#ffffff",
        fontWeight: "normal",
      },
    },

    plotOptions: {
      pie: {
        innerSize: 100,
        depth: 45,
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
        },
        showInLegend: true,
        size: "100%",
      },
    },
    series: [
      {
        type: "pie",
        name: "KRI Meter",
        innerSize: "50%",
        data: [
          ["Green", 17],
          ["Red", 26],
          ["Amber", 57],
        ],
      },
    ],
  };
  return (
    <div className='Highcharts row'>
      <div className='col-md-12'>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};

export default DonutChart;
