import { RxDashboard } from "react-icons/rx";
import { IoMdLock } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineProduct } from "react-icons/ai";
import { TbFileInvoice, TbPageBreak } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";

export const sidebarData = [
  {
    id: 1,
    mainMenu: "Dashboard",
    icon: <RxDashboard />,
    subMenus: ["Ecommerce", "Analytics", "CRM"],
  },
  {
    id: 2,
    mainMenu: "Authentication",
    icon: <IoMdLock />,
    subMenus: ["Login", "Registration", "Forgot Password"],
  },
  {
    id: 3,
    mainMenu: "Users",
    icon: <FaRegCircleUser />,
    subMenus: ["User List", "User Profile", "My Account"],
  },
  {
    id: 4,
    mainMenu: "Products",
    icon: <AiOutlineProduct />,
    subMenus: ["Product List", "Product View", "Product Upload"],
  },
  {
    id: 5,
    mainMenu: "Invoices",
    icon: <TbFileInvoice />,
    subMenus: ["Invoice List", "Invoice Details"],
  },
  {
    id: 6,
    mainMenu: "Orders",
    icon: <MdOutlineShoppingCart />,
    route: "/orders",
  },
  {
    id: 7,
    mainMenu: "Messages",
    icon: <FaRegEnvelope />,
    route: "/messages",
  },
  {
    id: 8,
    mainMenu: "Notifications",
    icon: <IoMdNotificationsOutline />,
    route: "/notifications",
  },
  {
    id: 9,
    mainMenu: "Settings",
    icon: <IoSettingsOutline />,
    route: "/settings",
  },
  {
    id: 10,
    mainMenu: "Blank Page",
    icon: <TbPageBreak />,
    route: "/blank",
  },
];
