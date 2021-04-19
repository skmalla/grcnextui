// import React from "react";
// import ActivitySearch from "./ActivitySearch/ActivitySearch";
// import "./Dashboard.css";
// import DashboardOverview from "./DashboardOverview/DashboardOverview";
// import TaskOverview from "./TaskOverview/TaskOverview";
// import DashboardSelectComponent from "./DashboardSelectComponent/SelectComponent";

// const Dashboard = () => {
//   return (
//     // <div className='dashboard'>
//     //   <div className='dashboard-first-col'>
//     //     <div className='dashboard-overview'>
//     //       <DashboardOverview />
//     //     </div>
//     //     <div className='task-overview'>
//     //       <TaskOverview />
//     //     </div>
//     //   </div>
//     //   <div className='dashboard-second-col'>
//     //     <ActivitySearch />
//     //   </div>
//     // </div>
//     <div className='mydashboard'>
//       <div className='row'>
//         <div className='col-md-10'>
//           <h3>Dashboard</h3>
//         </div>
//         <div className='col-md-2 text-right'>
//           <button>Configure Dashboard</button>
//         </div>
//       </div>
//       <DashboardSelectComponent />
//       <div className='row'>
//         <div className='col-md-6'></div>
//         <div className='col-md-6'>
//           <TaskOverview />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from "react";
import DashboardOverview from "../DashboardOverview/DashboardOverview";
import LDMDashboard from "../LDMDashboard/LDMDashboard";
import RCSADashboard from "../RCSADashboard/RCSADashboard";
import KRIDashboard from "../KRIDashboard/KRIDashboard";
import "./Dashboard.css";

const Dashboard = () => {
  const [dashboard, setDashboard] = useState("");
  const [activeOption, setActiveOption] = useState("");
  const [isOverview, setOverView] = useState(true);
  const [isRcsa, setRcsa] = useState(false);
  const [isLDM, setLDM] = useState(false);
  const [isKRI, setKRI] = useState(false);

  const onInputChangeHandler = (e) => {
    setDashboard({ ...dashboard, [e.target.name]: e.target.value });
    setActiveOption(e.target.value);
  };

  const { dashboardType } = dashboard;

  useEffect(() => {
    setActiveOption(dashboardType);
    switch (activeOption) {
      case "overview":
        setOverView(true);
        setRcsa(false);
        setLDM(false);
        setKRI(false);
        break;
      case "rcsaDashboard":
        setOverView(false);
        setRcsa(true);
        setLDM(false);
        setKRI(false);
        break;
      case "ldmDashboard":
        setOverView(false);
        setRcsa(false);
        setLDM(true);
        setKRI(false);
        break;
      case "kriDashboard":
        setOverView(false);
        setRcsa(false);
        setLDM(false);
        setKRI(true);
        break;
    }
  }, [dashboard]);

  return (
    <div>
      <div className='row d-type'>
        <div className='col-md-9'></div>
        <div className='col-md-3'>
          <div className='form-group'>
            <select
              className='form-control dashboardtype'
              value={dashboardType}
              name='dashboardType'
              onChange={(e) => onInputChangeHandler(e)}
            >
              <option value='overview'>Dashboard Overview</option>
              <option value='rcsaDashboard'>RCSA Dashboard</option>
              <option value='ldmDashboard'>LDM Dashboard</option>
              <option value='kriDashboard'>KRI Dashboard</option>
            </select>
          </div>
        </div>
      </div>
      {isOverview && <DashboardOverview />}
      {isRcsa && <RCSADashboard />}
      {isLDM && <LDMDashboard />}
      {isKRI && <KRIDashboard />}
    </div>
  );
};

export default Dashboard;
