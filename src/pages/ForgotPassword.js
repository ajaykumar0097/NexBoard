import React, { useContext } from "react";
import Logo from "../assets/images/nd-removebg-preview.png";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { MyContext } from "../App";
const ForgotPassword = () => {
const navigate =useNavigate()
  const context=useContext(MyContext)

  const onGetLink=()=>{
// context.setIsToggleSideBar(true)
// navigate("/")
  }
  return (
    <section className="loginSection">
      <div className="loginBox">
        <div className="login__logo text-center">
          <img src={Logo} alt="" />
          <h4>Reset the password</h4>
        </div>

        <div className="d-flex align-items-center justify-content-center">
          <form className="forgot__form" action="">
            <div className="input__fields">
              <IoMdMail />
              <input
                type="email"
                className="w-100 px-1 mx-1"
                placeholder="enter your email"
              />
            </div>


            <div className="login__button">
              <Button onClick={onGetLink}>GET LINK</Button>
            </div>
   

            

          

          </form>
        </div>

        <div className="d-flex align-items-center justify-content-center   mt-2">
          <div className=" login__register text-center">
           Remember the password?
            <span>
              <Link to="/login">Login</Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
