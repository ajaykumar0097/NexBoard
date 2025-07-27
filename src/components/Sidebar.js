import React, { useState } from "react";
import Button from "@mui/material/Button";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { sidebarData } from "./SidebarData";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [isToggle, setIsToggle] = useState(false);

  const handleMenuClick = (index, hasSubmenus) => {
    if (hasSubmenus) {
      setIsToggle(index === activeTab ? !isToggle : true);
      setActiveTab(index);
    } else {
      setActiveTab(index);
    }
  };

  return (
    <div className="sidebar">
      <ul className="sidebar__list py-2 px-3">
        {sidebarData.map((item, index) => (
          <li key={index}>
            <Button
              className={`w-100 ${activeTab === index && isToggle ? "active" : ""}`}
              onClick={() => handleMenuClick(index, !!item.subMenus)}
            >
              <span className="icon sidebar__icons">{item.icon}</span>
              {item.mainMenu}
              {item.subMenus && (
                <span className="arrow">
                  <FaAngleRight />
                </span>
              )}
            </Button>

            {/* Show submenu if exists */}
            {item.subMenus && (
              <div
                className={`submenuWrapper ${
                  activeTab === index && isToggle ? "colapse" : "colapsed"
                }`}
              >
                <ul className="submenu">
                  {item.subMenus.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link to="#">{subItem}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Direct route (no submenus) */}
            {!item.subMenus && item.route && (
              <Link to={item.route}></Link>
            )}
          </li>
        ))}
      </ul>

      <div className="logoutWrapper">
        <div className="logoutBox">
          <Button variant="contained">
            <AiOutlineLogout className="m-1" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
