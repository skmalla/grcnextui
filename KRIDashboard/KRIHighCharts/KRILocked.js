import React from "react";
import Highcharts from "highcharts/highcharts.js";
import highchartsMore from "highcharts/highcharts-more.js";
import solidGauge from "highcharts/modules/solid-gauge.js";
import HighchartsReact from "highcharts-react-official";
import KriLockedModal from "../KRITables/KRILockedTable/LockedModal";

highchartsMore(Highcharts);
solidGauge(Highcharts);

const GaugeChart = () => {
  const options = {
    chart: {
      type: "gauge",
      height: "315",
      backgroundColor: "#eef0f6",
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

    title: {
      text: "KRI Locked",
      align: "left",
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        color: "#2F3E88",
      },
    },

    pane: {
      startAngle: -150,
      endAngle: 150,
    },

    yAxis: [
      {
        min: 0,
        max: 200,
        lineColor: "#339",
        tickColor: "#339",
        minorTickColor: "#339",
        offset: -25,
        lineWidth: 2,
        labels: {
          distance: -20,
          rotation: "auto",
        },
        tickLength: 5,
        minorTickLength: 5,
        endOnTick: false,
      },
      {
        min: 0,
        max: 124,
        tickPosition: "outside",
        lineColor: "#933",
        lineWidth: 2,
        minorTickPosition: "outside",
        tickColor: "#933",
        minorTickColor: "#933",
        tickLength: 5,
        minorTickLength: 5,
        labels: {
          distance: 12,
          rotation: "auto",
        },
        offset: -20,
        endOnTick: false,
      },
    ],

    series: [
      {
        name: "KRI Locked",
        data: [20],
      },
    ],
  };

  return (
    <div className='Highcharts'>
      <HighchartsReact highcharts={Highcharts} options={options} />
      <div className='text-center'>
        <p className='panel-heading'>Q1 2021</p>
      </div>
      {/* <KriLockedModal /> */}
    </div>
  );
};

export default GaugeChart;
