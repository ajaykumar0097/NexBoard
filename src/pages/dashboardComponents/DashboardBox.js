import React from "react";
import "../../pages/Pages.css";
import { FaUserCircle } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import HistoryIcon from '@mui/icons-material/History';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const DashboardBox = ({ color }) => {
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
        backgroundImage: `linear-gradient(270deg, ${color?.[0]},${color?.[1]})`,
      }}
    >
      <div className="chart">
        <TrendingUpIcon />
      </div>
      <div className="d-flex w-100">
        <div className="col1">
          <h4 className="text-white mb-0">Total Users</h4>
          <span className="text-white"> 277</span>
        </div>

        <div className="ms-auto">
          <span className="icon">
            <FaUserCircle />
          </span>
        </div>
      </div>

      <div className="d-flex align-items-center">
        <div className="percentage">
          {" "}
          <h6>95%</h6>
        </div>
        <h6 className="text-white mb-0 mt-0 mx-2"> Last Month</h6>
        <span className=" toggleIcon ms-auto">
          <HiDotsVertical         onClick={handleClick}/>
        </span>
      </div>

 <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <MenuItem onClick={handleClose} className=" d-flex align-items-center history__icons"><HistoryIcon className="me-2"/>Last Day</MenuItem>
        <MenuItem onClick={handleClose} className=" d-flex align-items-center history__icons"><HistoryIcon className="me-2"/>Last Week</MenuItem>
        <MenuItem onClick={handleClose} className=" d-flex align-items-center history__icons"><HistoryIcon className="me-2"/>Last Month</MenuItem>
        <MenuItem onClick={handleClose} className=" d-flex align-items-center history__icons"><HistoryIcon className="me-2"/>Last Year</MenuItem>

      </Menu>
    </div>
  );
};

export default DashboardBox;
