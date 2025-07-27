import React, { useContext, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { MyContext } from "../App";
import DashBoardEcom from "./dashboardComponents/DashBoardEcom";
import EcomTable from "./dashboardComponents/EcomTable";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const context = useContext(MyContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    context.setIsToggleSideBar1(false);
  }, []);
  return (
    <>
      <div className="right-content w-100">
        <div className="row dash__heading my-3 w-100 p-1">
          <div className="col-md-6 d-flex align-items-center mt-1">
            <h3 className="main__h3__heading">Ecommerce</h3>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-end mt-3">
            <p className="sub__link">
              <Link>Home ~</Link>
            </p>
            <p className="mx-2 sub__link">
              <Link>Dashboard</Link>
            </p>
            <p className="sub__link"> ~ Ecommerce</p>
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
