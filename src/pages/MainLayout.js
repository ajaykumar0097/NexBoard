import React, { useContext } from "react";
import Headers from "../components/Headers";
import Sidebar from "../components/Sidebar";
import Dashboard from "./Dashboard";
import "./Pages.css";
import { MyContext } from "../App";

const MainLayout = () => {
  const context=useContext(MyContext)
  return (
    <>
      <div className="position-fixed w-100 header__z">
        <Headers />
      </div>
      <div className="main d-flex">
        <div className={` ${context.isToggleSideBar?"sidebar__toggle":"side__content"}`}>
          <Sidebar />
        </div>
        <div className={` ${context.isToggleSideBar?"main__toggle":"content"}`}>
          <Dashboard />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
