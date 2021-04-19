import React, { Component } from "react";
import GridLayout from "react-grid-layout";
import KRISelectComponent from "./KRISelectComponent.js";
import "../Dashboard/Dashboard.css";
import KRIBreaches from "././KRIHighCharts/KRIBreaches";
import KRILocked from "././KRIHighCharts/KRILocked";
import KRIStatusChart from "././KRIHighCharts/KRIStatusChart";
import KRIPreviousMonthMeterChart from "././KRIHighCharts/KRIMeterChart/PreviousMonthChart";
import KRICurrentMonthMeterChart from "././KRIHighCharts/KRIMeterChart/CurrentMonthChart";
import KRIBreachByBusinessUnitChart from "././KRIHighCharts/KRIBreachBusinessUnitChart";
import BreachesModal from "./KRITables/KRIBreachesTable/BreachesModal";
import KriLockedModal from "./KRITables/KRILockedTable/LockedModal";
import KriStatusModal from "./KRITables/KRIStatusTable/KRIStatusModal";
import KriBreachesByBusinessUnitModal from "./KRITables/KRIBreachByBusinessUnitTable/BreachByBusinessUnitModal";

class Dashboard extends Component {
  render() {
    const layout = [
      { i: "a", x: 0, y: 0, w: 3, h: 10 },
      { i: "b", x: 3, y: 0, w: 3, h: 10 },
      { i: "c", x: 6, y: 0, w: 6, h: 10 },
      { i: "d", x: 0, y: 10, w: 6, h: 10 },
      { i: "e", x: 6, y: 10, w: 6, h: 10 },
      { i: "f", x: 0, y: 20, w: 12, h: 11 },
    ];
    return (
      <div className='myDashboard'>
        <span className='panel-heading'>KRI Dashboard</span>
        <KRISelectComponent />
        <GridLayout
          className='layout'
          layout={layout}
          cols={12}
          rowHeight={30}
          width={1115}
        >
          <div
            key='a'
            className='5 mr-5'
            style={{
              height: "auto",
              width: "auto",
              overflow: "hidden",
            }}
          >
            <KRIBreaches />
            <div onMouseDown={(e) => e.stopPropagation()}>
              <BreachesModal />
            </div>
          </div>
          <div
            key='b'
            className='5 mr-5'
            style={{
              height: "auto",
              width: "auto",
              overflow: "hidden",
            }}
          >
            <KRILocked />
            <div onMouseDown={(e) => e.stopPropagation()}>
              <KriLockedModal />
            </div>
          </div>
          <div
            key='c'
            className='5 mr-5'
            style={{
              height: "auto",
              width: "auto",
              overflow: "hidden",
            }}
          >
            <KRIStatusChart />
            <div onMouseDown={(e) => e.stopPropagation()}>
              <KriStatusModal />
            </div>
          </div>
          <div
            key='d'
            className='5 mr-5'
            style={{
              height: "auto",
              width: "auto",
              overflow: "hidden",
            }}
          >
            <KRIPreviousMonthMeterChart />
          </div>
          <div
            key='e'
            className='5 mr-5'
            style={{
              height: "auto",
              width: "auto",
              overflow: "hidden",
            }}
          >
            <KRICurrentMonthMeterChart />
          </div>
          <div
            key='f'
            className='5 mr-5'
            style={{
              height: "auto",
              width: "auto",
              overflow: "hidden",
            }}
          >
            <KRIBreachByBusinessUnitChart />
            <div onMouseDown={(e) => e.stopPropagation()}>
              <KriBreachesByBusinessUnitModal />
            </div>
          </div>
        </GridLayout>
      </div>
    );
  }
}

export default Dashboard;
