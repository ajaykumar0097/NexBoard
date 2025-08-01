import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import FavoriteIcon from "@mui/icons-material/Favorite";

import Notificationdrop from "./dropdownMenues/Notificationdrop";
import ProfileMenu from "./dropdownMenues/ProfileMenu";
import CartMenu from "./dropdownMenues/CartMenu";
import EmailMenu from "./dropdownMenues/EmailMenu";
import { MyContext } from "../App";

const Headers = () => {



const context=useContext(MyContext)
console.log(context);

      const navigate=useNavigate()
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
    context.setIsToggleSideBar(false)
    navigate("/login")
  };

  const handleMyNotificationClick = (event) => {
    setNotification(event.currentTarget);
        handleMyEmailClose()
    handleMyCartClose()
  };
  const handleMyNotificationClose = () => {
    setNotification(null);
  };

  const handleMyEmailClick = (event) => {
    setEmail(event.currentTarget);

    handleMyNotificationClose()
    handleMyCartClose()
  };
  const handleMyEmailClose = () => {
    setEmail(null);
  };

  const handleMyCartClick = (event) => {
    setCart(event.currentTarget);
    handleMyEmailClose()
    handleMyNotificationClose()

  };
  const handleMyCartClose = () => {
    setCart(null);
  };



const onHandleSignIn=()=>{
navigate("/Login")
}


console.log(context.isToggleSideBar,"hhhhh");

  const [isLogIn,setIsLogin]=useState(false)
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
            <Button className="menu__btn me-2" onClick={()=>context.setIsToggleSideBar1(!context.isToggleSideBar1)}>
             {context.isToggleSideBar1? <MdMenuOpen className="menubtn__icon" />:<MdOutlineMenu className="menubtn__icon" />}
            </Button>
            <Searchbox />
          </div>

          <div className="col-md-7 d-flex align-items-center justify-content-end">
            <Button className="menu__btn me-2" onClick={()=>context.setThemeMode(!context.themeMode)}>
              <MdOutlineLightMode className="menubtn__icon" />
            </Button>

            <div className="position-relative">
              <Button className="menu__btn me-2" onClick={handleMyCartClick}>
                <MdOutlineShoppingCart className="menubtn__icon" />
                <div className="notification__icons p-1">12</div>
              </Button>
            </div>

            <div className="position-relative">
              <Button className="menu__btn me-2" onClick={handleMyEmailClick}>
                <MdOutlineMarkEmailRead className="menubtn__icon" />
              </Button>
              <div className="notification__icons p-1">23</div>
            </div>
            <div className="position-relative">
              <Button
                className="menu__btn me-2"
                onClick={handleMyNotificationClick}
              >
                <IoMdNotificationsOutline className="menubtn__icon" />
              </Button>
              <div className="notification__icons p-1">34</div>
            </div>

            {/* <Button className="menu__btn me-2"><MdMenuOpen className="menubtn__icon"/></Button> */}
            {!context.isToggleSideBar?<Button className="signin__btn px-1 mx-1" onClick={onHandleSignIn}>Sign In</Button>:

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
            }
          </div>
        </div>
      </div>

      {/* //----notification----------- */}
      {notification ? (
        <Notificationdrop
          notification={notification}
          openNotification={openNotification}
          handleMyNotificationClose={handleMyNotificationClose}
        />
      ) : null}
      {anchorEl ? (
        <ProfileMenu
          open={open}
          anchorEl={anchorEl}
          handleMyAccClose={handleMyAccClose}
        />
      ) : null}
      {cart ? (
        <CartMenu
          cart={cart}
          openCart={openCart}
          handleMyCartClose={handleMyCartClose}
        />
      ) : null}

      {email ? (
        <EmailMenu
          email={email}
          openEmail={openEmail}
          handleMyEmailClose={handleMyEmailClose}
        />
      ) : null}
    </header>
  );
};

export default Headers;
