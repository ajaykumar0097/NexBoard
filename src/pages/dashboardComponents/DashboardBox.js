import React from "react";
import "../../pages/Pages.css";
import { HiDotsVertical } from "react-icons/hi";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import HistoryIcon from "@mui/icons-material/History";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const DashboardBox = ({boxData}) => {
  console.log("boxData",boxData);
  
 const { color,mainHeading,totalCount,iconImage,perValue,time }=boxData
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      className="dashboardBox"
      style={{
        backgroundImage: `linear-gradient(270deg, ${color?.first},${color?.second})`,
      }}
    >
      <div className="chart">
        <TrendingUpIcon />
      </div>
      <div className="d-flex w-100">
        <div className="col1">
          <h4 className="text-white mb-0">{mainHeading}</h4>
          <span className="text-white">{totalCount}</span>
        </div>

        <div className="ms-auto">
          <span className="icon">
           {iconImage}
          </span>
        </div>
      </div>

      <div className="d-flex align-items-center">
        <div className="percentage">
          <h6>{perValue}</h6>
        </div>
        <h6 className="text-white mb-0 mt-0 mx-2"> {time}</h6>
        <span className=" toggleIcon ms-auto">
          <HiDotsVertical onClick={handleClick} />
        </span>
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
    </div>
  );
};

export default DashboardBox;
