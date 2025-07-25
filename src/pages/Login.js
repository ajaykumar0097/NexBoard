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
const Login = () => {
const navigate =useNavigate()
  const context=useContext(MyContext)

  const onSignIn=()=>{
context.setIsToggleSideBar(true)
navigate("/")
  }
  return (
    <section className="loginSection">
      <div className="loginBox">
        <div className="login__logo text-center">
          <img src={Logo} alt="" />
          <h4>Login To NextGen</h4>
        </div>

        <div className="d-flex align-items-center justify-content-center">
          <form className="login__form" action="">
            <div className="input__fields">
              <IoMdMail />
              <input
                type="email"
                className="w-100 px-1 mx-1"
                placeholder="enter your email"
                autoFocus
              />
            </div>

            <div className="input__fields">
              <FaLock />
              <input
                type="password"
                className="w-100 px-1 mx-1"
                placeholder="enter your password"
              />
            </div>

            <div className="input__fields">
              <IoShieldCheckmark />
              <select className="w-100 px-1 mx-1">
                <option value="">Select</option>
              </select>
            </div>
            <div className="login__button">
              <Button onClick={onSignIn}>Sign In</Button>
            </div>
            <div className="text-center">
              <Link to="/ForgotPassword">Forgot Password</Link>
            </div>

            <div className="or__line">
              <span>or</span>
            </div>

            <div className="login__button twitter my-2">
              <Button>
                <span>
                  <FaTwitter className="mx-2" />{" "}
                </span>{" "}
                Continue with Twitter
              </Button>
            </div>

            <div className="login__button facebook">
              <Button>
                <span>
                  <FaFacebookF className="mx-2" />{" "}
                </span>{" "}
                Continue with Facebook
              </Button>
            </div>
          </form>
        </div>

        <div className="d-flex align-items-center justify-content-center   mt-2">
          <div className=" login__register text-center">
            Don't have an account?{" "}
            <span>
              <Link to="/register">Register</Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
