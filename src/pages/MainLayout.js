import React from "react";
import Headers from "../components/Headers";
import Sidebar from "../components/Sidebar";
import Dashboard from "./Dashboard";
import "./Pages.css"

const MainLayout = () => {
  return (
    <>
<div className="position-fixed w-100">
          <Headers />

</div>
      <div className="main d-flex">
        <div className="side__content">
          <Sidebar />
        </div>
        <div className="content">
          <Dashboard />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
