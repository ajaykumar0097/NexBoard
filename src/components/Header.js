import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/nd-removebg-preview.png";
import Button from "@mui/material/Button";
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import "./component.css";
import Searchbox from "./Searchbox";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [notification, setNotification] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [cart, setCart] = React.useState(null);
  const open = Boolean(anchorEl);
  const openEmail = Boolean(email);
  const openNotification = Boolean(notification);
  const openCart = Boolean(cart);
  const handleMyAccClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMyAccClose = () => {
    setAnchorEl(null);
  };

  const handleMyNotificationClick = (event) => {
    setNotification(event.currentTarget);
  };
  const handleMyNotificationClose = () => {
    setNotification(null);
  };

  const handleMyEmailClick = (event) => {
    setEmail(event.currentTarget);
  };
  const handleMyEmailClose = () => {
    setEmail(null);
  };

  const handleMyCartClick = (event) => {
    setCart(event.currentTarget);
  };
  const handleMyCartClose = () => {
    setCart(null);
  };

  return (
    <header className="main__header">
      <div className="container-fluid w-100">
        <div className="row  align-items-center m-0">
          <div className="col-md-2 d-flex align-items-center">
            <Link to={"/"} className="d-flex align-items-center logo__link">
              <img src={Logo} className="logo_img" />
              <span className="logo__text">NextDash</span>
            </Link>
          </div>

          <div className="col-md-3 d-flex align-items-center">
            <Button className="menu__btn me-2">
              <MdMenuOpen className="menubtn__icon" />
            </Button>
            <Searchbox />
          </div>

          <div className="col-md-7 d-flex align-items-center justify-content-end">
            <Button className="menu__btn me-2">
              <MdOutlineLightMode className="menubtn__icon" />
            </Button>
            <Button className="menu__btn me-2" onClick={handleMyCartClick}>
              <MdOutlineShoppingCart className="menubtn__icon" />
            </Button>

            <Button className="menu__btn me-2" onClick={handleMyEmailClick}>
              <MdOutlineMarkEmailRead className="menubtn__icon" />
            </Button>
            <Button
              className="menu__btn me-2"
              onClick={handleMyNotificationClick}
            >
              <IoMdNotificationsOutline className="menubtn__icon" />
            </Button>

            {/* <Button className="menu__btn me-2"><MdMenuOpen className="menubtn__icon"/></Button> */}

            <Button
              className="my__account d-flex align-items-center"
              onClick={handleMyAccClick}
            >
              <div className="user__img">
                <span className="rounded-circle">
                  <img
                    src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                    alt=""
                    className="profile__img"
                  />
                </span>
              </div>

              <div className="profile__details">
                <h1>Ajay Kumar</h1>
                <p className="mb-0">@ajaykumar</p>
              </div>
            </Button>
          </div>
        </div>
      </div>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleMyAccClose}
        onClick={handleMyAccClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {/* <Divider /> */}
        <MenuItem onClick={handleMyAccClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          My Account
        </MenuItem>
        <MenuItem onClick={handleMyAccClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Reset Password
        </MenuItem>
        <MenuItem onClick={handleMyAccClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>

      <Menu
        anchorEl={email}
        id="email"
        className="email"
        open={openEmail}
        onClose={handleMyEmailClose}
        onClick={handleMyEmailClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {/* <Divider /> */}
        <MenuItem onClick={handleMyEmailClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          My Account
        </MenuItem>
        <MenuItem onClick={handleMyEmailClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Reset Password
        </MenuItem>
        <MenuItem onClick={handleMyEmailClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>

      <Menu
        anchorEl={cart}
        id="cart"
        className="cart"
        open={openCart}
        onClose={handleMyCartClose}
        onClick={handleMyCartClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {/* <Divider /> */}

        <MenuItem onClick={handleMyCartClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Cart
        </MenuItem>
        <MenuItem onClick={handleMyCartClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Reset Password
        </MenuItem>
        <MenuItem onClick={handleMyCartClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>

      {/* //----notification----------- */}
      <Menu
        anchorEl={notification}
        id="notification"
        className="notification"
        open={openNotification}
        onClose={handleMyNotificationClose}
        onClick={handleMyNotificationClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {/* <MenuItem onClick={handleMyNotificationClose}>
                Order (12)
              </MenuItem>
               */}

        <div className="notification__header ps-3 pb-0">
          <h4>Order (10)</h4>
        </div>
        <Divider className="pb-2" />
        <MenuItem onClick={handleMyNotificationClose}>
          <div className="d-flex align-items-center">
            <span className="rounded-circle"></span>
          </div>
        </MenuItem>
        <MenuItem onClick={handleMyNotificationClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleMyNotificationClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </header>
  );
};

export default Header;
