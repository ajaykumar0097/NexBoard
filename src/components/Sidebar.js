import React, { useState } from "react";
import Button from "@mui/material/Button";
import { RxDashboard } from "react-icons/rx";
import { FaAngleRight } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineProduct } from "react-icons/ai";
import { TbFileInvoice } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { TbPageBreak } from "react-icons/tb";
import { Link } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isToggle, setIsToggle] = useState(false);

  const isSubmenuOpen = (index) => {
    setActiveTab(index);
    setIsToggle(!isToggle);
  };
  return (
    <>
      <div className="sidebar">
        <ul className="sidebar__list py-2 px-3  ">
          <li>
            <Button
              className={`w-100 ${activeTab === 0 && isToggle ? "active" : ""}`}
              onClick={() => isSubmenuOpen(0)}
            >
              <span className="icon">
                <RxDashboard />
              </span>
              Dashboard
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                activeTab === 0 && isToggle ? "colapse" : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to="#">Ecommerce</Link>
                </li>
                <li>
                  <Link to="#">Analytics</Link>
                </li>
                <li>
                  <Link to="#">CRM</Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Button
              className={`w-100 ${activeTab === 1 && isToggle ? "active" : ""}`}
              onClick={() => isSubmenuOpen(1)}
            >
              <span className="icon">
                <IoMdLock />
              </span>
              Authentication
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                activeTab === 1 && isToggle ? "colapse" : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to="#">Loging</Link>
                </li>
                <li>
                  <Link to="#">Registration</Link>
                </li>
                <li>
                  <Link to="#">Forgot Password</Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Button
              className={`w-100 ${activeTab === 2 && isToggle ? "active" : ""}`}
              onClick={() => isSubmenuOpen(2)}
            >
              <span className="icon">
                <FaRegCircleUser />
              </span>
              Users
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>

            <div
              className={`submenuWrapper ${
                activeTab === 2 && isToggle ? "colapse" : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to="#">User List</Link>
                </li>
                <li>
                  <Link to="#">User Profile</Link>
                </li>
                <li>
                  <Link to="#">My Account</Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Button
              className={`w-100 ${activeTab === 3 && isToggle ? "active" : ""}`}
              onClick={() => isSubmenuOpen(3)}
            >
              <span className="icon">
                <AiOutlineProduct />
              </span>
              Products
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>

            <div
              className={`submenuWrapper ${
                activeTab === 3 && isToggle ? "colapse" : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to="#">Product List</Link>
                </li>
                <li>
                  <Link to="#">Product View</Link>
                </li>
                <li>
                  <Link to="#">Product Upload</Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Button
              className={`w-100 ${activeTab === 4 && isToggle ? "active" : ""}`}
              onClick={() => isSubmenuOpen(4)}
            >
              <span className="icon">
                <TbFileInvoice />
              </span>
              Invoices
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>

            <div
              className={`submenuWrapper ${
                activeTab === 4 && isToggle ? "colapse" : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to="#">Invoice List</Link>
                </li>
                <li>
                  <Link to="#">Invoice Details</Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            {" "}
            <Link>
              <Button
                className={`w-100 ${activeTab === 5 ? "active" : ""}`}
                onClick={() => isSubmenuOpen(5)}
              >
                <span className="icon">
                  <MdOutlineShoppingCart />
                </span>
                Orders
              </Button>{" "}
            </Link>
          </li>

          <li>
            {" "}
            <Link>
              <Button
                className={`w-100 ${activeTab === 6 ? "active" : ""}`}
                onClick={() => isSubmenuOpen(6)}
              >
                <span className="icon">
                  <FaRegEnvelope />
                </span>
                Mesages
              </Button>{" "}
            </Link>
          </li>

          <li>
            {" "}
            <Link>
              <Button
                className={`w-100 ${activeTab === 7 ? "active" : ""}`}
                onClick={() => isSubmenuOpen(7)}
              >
                <span className="icon">
                  <IoMdNotificationsOutline />
                </span>
                Notifications
              </Button>{" "}
            </Link>
          </li>

          <li>
            {" "}
            <Link>
              <Button
                className={`w-100 ${activeTab === 8 ? "active" : ""}`}
                onClick={() => isSubmenuOpen(8)}
              >
                <span className="icon">
                  <IoSettingsOutline />
                </span>
                Settings
              </Button>{" "}
            </Link>
          </li>

          <li>
            {" "}
            <Link>
              <Button
                className={`w-100 ${activeTab === 9 ? "active" : ""}`}
                onClick={() => isSubmenuOpen(9)}
              >
                <span className="icon">
                  <TbPageBreak />
                </span>
                Blank Page
              </Button>{" "}
            </Link>
          </li>
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
    </>
  );
};

export default Sidebar;
