import React, { useContext } from "react";
import { Chart } from "react-google-charts";
import DashboardBox from "./DashboardBox";
import { HiDotsHorizontal } from "react-icons/hi";
import { MyContext } from "../../App";
import { CardsData } from "../../constants/CardsData";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import HistoryIcon from "@mui/icons-material/History";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import '../Pages.css'


export const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

export const options = {
  title: "Company Performance",
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "80%", height: "70%" },
  backgroundColor: "transparent",
};

const DashBoardEcom = () => {

     const [anchorEl, setAnchorEl] = React.useState(null);
      const context = useContext(MyContext);
      const open = Boolean(anchorEl);
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
  return (
    <>
      <div className="row dashboardWrapperRow">
        <div className="col-md-8 dashboardBoxWrapper d-flex">
          {CardsData?.map((item) => {
            return <DashboardBox boxData={item} />;
          })}
        </div>

        <div className="col-md-4">
          <div className="box graphBox">
            <div className="d-flex align-items-center justify-content-between">
              <div className="col1">
                <h4 className="text-white mb-0">Total Users</h4>
              </div>

              <HiDotsHorizontal
                className="text-white dotted__svg"
                onClick={handleClick}
              />
            </div>

            <div className="d-flex align-items-center">
              <h3 className="text-white font-weight-bold">$3,787,681.00</h3>
              <div className="green__texts d-flex align-items-center ms-2 mt-2">
                <p>40.63%tr</p>
                <TrendingUpIcon />
              </div>
            </div>
            <p className="green__text">$3,578.90 in last month</p>
            <div>
              <Chart
                chartType="AreaChart"
                width="100%"
                height="200px"
                data={data}
                options={options}
              />
            </div>
          </div>
        </div>
      </div>

            <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        <MenuItem
          onClick={handleClose}
          className=" d-flex align-items-center history__icons"
        >
          <HistoryIcon className="me-2" />
          Last Day
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          className=" d-flex align-items-center history__icons"
        >
          <HistoryIcon className="me-2" />
          Last Week
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          className=" d-flex align-items-center history__icons"
        >
          <HistoryIcon className="me-2" />
          Last Month
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          className=" d-flex align-items-center history__icons"
        >
          <HistoryIcon className="me-2" />
          Last Year
        </MenuItem>
      </Menu>
    </>
  );
};

export default DashBoardEcom;
