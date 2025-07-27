import React from "react";
import Pagination from "@mui/material/Pagination";
import { MyContext } from "../App";
import DashBoardEcom from "./dashboardComponents/DashBoardEcom";
import EcomTable from "./dashboardComponents/EcomTable";
const Ecommerce = () => {
  return (
    <>
      <DashBoardEcom />

      <div className="card shadow border-0 p-3 mt-4">
        <h3 className="table__heading"> Best selling Product</h3>

        <div className="row my-2 ps-1">
          <div className="col-md-3 dropdow__label">Show By</div>
          <div className="col-md-3 dropdow__label ">Role By</div>
          <div className="col-md-3 dropdow__label ">Status By</div>
          <div className="col-md-3 dropdow__label">Search By</div>
        </div>
        <div className="row mb-1">
          <div className="col-md-3 pe-1 ">
            <select className="select__input w-100" name="" id="" disabled>
              <option value="">12 Rows</option>
            </select>
          </div>
          <div className="col-md-3 pe-1">
            <select className="select__input w-100" name="" id="" disabled>
              <option value="">12 Rows</option>
            </select>
          </div>
          <div className="col-md-3 pe-1">
            <select className="select__input w-100" name="" id="" disabled>
              <option value="">12 Rows</option>
            </select>
          </div>
          <div className="col-md-3 pe-1">
            <select className="select__input w-100" name="" id="" disabled>
              <option value="">12 Rows</option>
            </select>
          </div>
        </div>

        <div className=" my-2">
          <EcomTable />
        </div>

        <div className="d-flex tableFooter mt-2">
          <Pagination
            count={10}
            color="primary"
            className="pagination"
            showFirstButton
            showLastButton
          />
        </div>
      </div>
    </>
  );
};

export default Ecommerce;
