import React from "react";
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
const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <ul className="sidebar__list py-2 px-3  ">
          <li>
         
            <Button className=" w-100">
              <span className="icon">
                <RxDashboard />
              </span>
              Dashboard
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
            <ul className="submenu">
                <li><Link to='#'>Product List</Link></li>
                <li><Link to='#'>Product View</Link></li>
                <li><Link to='#'>Product Upload</Link></li>
            </ul>
  
          </li>

          <li>  
            <Button className=" w-100">
              <span className="icon">
                <IoMdLock />
              </span>
              Authentication
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
          </li>

          <li>  
            <Button className=" w-100">
              <span className="icon">
                <FaRegCircleUser />
              </span>
              Users
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button> 
          </li>

          <li>  
            <Button className=" w-100">
              <span className="icon">
                <AiOutlineProduct />
              </span>
              Products
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button> 
          </li>

          <li>  
            <Button className=" w-100">
              <span className="icon">
                <TbFileInvoice />
              </span>
              Invoices
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button> 
          </li>

          <li>  <Link>
            <Button className=" w-100">
              <span className="icon">
                <MdOutlineShoppingCart />
              </span>
              Orders
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button> </Link>
          </li>

          <li>  <Link>
            <Button className=" w-100">
              <span className="icon">
                <FaRegEnvelope />
              </span>
              Mesages
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button> </Link>
          </li>

          <li>  <Link>
            <Button className=" w-100">
              <span className="icon">
                <IoMdNotificationsOutline />
              </span>
              Notifications
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button> </Link>
          </li>

          <li>  <Link>
            <Button className=" w-100">
              <span className="icon">
                <IoSettingsOutline />
              </span>
              Settings
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button> </Link>
          </li>

          <li>  <Link>
            <Button className=" w-100">
              <span className="icon">
                <TbPageBreak />
              </span>
              Blank Page
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button> </Link>
          </li>

          <li>  <Link>
            <Button className=" w-100">
              <span className="icon">
                <FaRegEnvelope />
              </span>
              Mesages
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button> </Link>
          </li>

          <li>  <Link>
            <Button className=" w-100">
              <span className="icon">
                <IoMdNotificationsOutline />
              </span>
              Notifications
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button> </Link>
          </li>

          <li>  <Link>
            <Button className=" w-100">
              <span className="icon">
                <IoSettingsOutline />
              </span>
              Settings
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button> </Link>
          </li>

          <li>  <Link>
            <Button className=" w-100">
              <span className="icon">
                <TbPageBreak />
              </span>
              Blank Page
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button> </Link>
          </li>
          <li>  <Link>
            <Button className=" w-100">
              <span className="icon">
                <FaRegEnvelope />
              </span>
              Mesages
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button> </Link>
          </li>

          <li>  <Link>
            <Button className=" w-100">
              <span className="icon">
                <IoMdNotificationsOutline />
              </span>
              Notifications
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button> </Link>
          </li>

          <li>  <Link>
            <Button className=" w-100">
              <span className="icon">
                <IoSettingsOutline />
              </span>
              Settings
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button> </Link>
          </li>

          <li>  <Link>
            <Button className=" w-100">
              <span className="icon">
                <TbPageBreak />
              </span>
              Blank Page
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button> </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
