import { CgProfile } from "react-icons/cg";
import { IoMdCart } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { MdHotelClass } from "react-icons/md";

export const CardsData = [
  {
    color: {
      first: "#4eda89",
      second: "#1a9f53",
    },
    mainHeading: "Total Users",
    totalCount: "277",
    iconImage: <CgProfile />,
    perValue: "+ 95%",
    time: "last month",
  },
  {
    color: {
      first: "#ed68ff",
      second: "#be0ee1",
    },
    mainHeading: "Total Orders",
    totalCount: "388",
    iconImage: <IoMdCart />,
    perValue: "+ 30%",
    time: "last month",
  },
  {
    color: {
      first: "#64b3f6",
      second: "#2b77e5",
    },
    mainHeading: "Total Products",
    totalCount: "557",
    iconImage: <FaShoppingBag />,
    perValue: "+ 25%",
    time: "last month",
  },
  {
    color: {
      first: "#f4d02b",
      second: "#e1940e",
    },
    mainHeading: "Total Reviews",
    totalCount: "166",
    iconImage: <MdHotelClass />,
    perValue: "+ 45%",
    time: "last month",
  },
];
