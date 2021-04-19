import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import KriStatusModal from "../KRITables/KRIStatusTable/KRIStatusModal";
import highcharts3d from "highcharts/highcharts-3d";
highcharts3d(Highcharts);

const ColumnChart = () => {
  const options = {
    chart: {
      type: "column",
      width: "550",
      height: "366",
      backgroundColor: "#eef0f6",
      options3d: {
        enabled: true,
        alpha: 0,
      },
    },
    colors: ["#167DB8"],
    title: {
      text: "KRI Status",
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

    xAxis: {
      categories: ["Approved", "Assigned", "Locked", "Approval Pending"],
      title: {
        text: "Status",
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Count",
      },
      labels: {
        overflow: "justify",
      },
    },

    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
        },
      },
    },

    credits: {
      enabled: false,
    },

    series: [
      {
        name: "KRI Status",
        data: [50, 31, 42, 67],
      },
    ],
  };
  return (
    <div className='Highcharts row'>
      <div className='col-md-12'>
        <HighchartsReact highcharts={Highcharts} options={options} />
        {/* <KriStatusModal /> */}
      </div>
    </div>
  );
};

export default ColumnChart;
