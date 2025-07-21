import React from "react";
import Headers from "../components/Headers";
import DashboardBox from "./dashboardComponents/DashboardBox";
// import Header from '../components/Header'

const Dashboard = () => {
  return (
    <>
      <div className="right-content w-100">
        <div className="row dashboardWrapperRow" >
          <div className="col-md-8 dashboardBoxWrapper d-flex">
{/*    
              <div className="dashboardBox"></div>
              <div className="dashboardBox"></div>
              <div className="dashboardBox"></div>
              <div className="dashboardBox"></div> */}
              <DashboardBox color={["#1a9f53","#4eda89"]}/>
              <DashboardBox color={["#ed68ff","#be0ee1"]}/>
              <DashboardBox color={["#64b3f6","#2b77e5"]}/>
              <DashboardBox color={["#f4d02b","#e1940e"]}/>
          
          </div>
          
          <div className="col-md-4">
            <div className="box graphBox">

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
