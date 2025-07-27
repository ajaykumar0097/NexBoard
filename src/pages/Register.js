import React, { useEffect } from "react";
import Logo from "../assets/images/nd-removebg-preview.png";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { IoMdHome } from "react-icons/io";

const Register = () => {
  const navigate = useNavigate();

  const onClickHome = () => {
    navigate("/");
  };

  const onSignUp = () => {
    navigate("/login");
  };
  
    useEffect(()=>{
      window.scrollTo(0,0)
    //   context.setIsToggleSideBar1(false)
    },[])
  return (
    <>
      <div className="row container-fluid m-0 p-0">
        <div className="col-md-8 register__main">
          <img
            src="https://mironcoder-hotash.netlify.app/images/pattern.webp"
            alt=""
            className="register__background__img"
          />
          <div className="main__content">
            <h2>Best ux/ui fashion <span className="text-secondary">ecommerce dashboard</span> & admin panel</h2>
            <p>
              Elit Iusto dolore libero recusandae dolor dolores explicabo ullam
              cum facilis aperiam alias odio quam excepturi molestiae omnis
              inventore. Repudiandae officia placeat amet consectetur dicta
              dolorem quo
            </p>
            <div className="home__btn  my-2">
              <Button className="w-100" onClick={onClickHome}>
                <span>
                  <IoMdHome className="mx-2" />{" "}
                </span>{" "}
                Home
              </Button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <section className="loginSection w-100">
            <div className="loginBox">
              <div className="login__logo text-center">
                <img src={Logo} alt="" />
                <h4>Login To NextGen</h4>
              </div>

              <div className="d-flex align-items-center justify-content-center">
                <form className=" sign__up w-100 " action="">
                  <div className="input__fields">
                    <MdAccountCircle />
                    <input
                      type="text"
                      className="w-100 px-1 mx-1"
                      placeholder="enter your name"
                      autoFocus
                    />
                  </div>
                  <div className="input__fields">
                    <IoMdMail />
                    <input
                      type="email"
                      className="w-100 px-1 mx-1"
                      placeholder="enter your email"
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
                    <input
                      type="password"
                      className="w-100 px-1 mx-1"
                      placeholder="confirm your password"
                    />
                  </div>

                  <div className="d-flex align-items-center mb-2">
                    <input type="checkbox" className="me-2" />
                    <span>I agree to the all Terms & Condiotions</span>
                  </div>

                  {/* <div className="input__fields">
                          <IoShieldCheckmark />
                          <select className="w-100 px-1 mx-1">
                            <option value="">Select</option>
                          </select>
                        </div> */}
                  <div className="login__button">
                    <Button onClick={onSignUp}>Sign Up</Button>
                  </div>
                  {/* <div className="text-center">
                          <Link>Forgot Password</Link>
                        </div> */}

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
                  <div className="  text-center">
                    Already have an account?
                    <span>
                      <Link to={"/Login"}>Login</Link>
                    </span>
                  </div>
                </form>
              </div>

              {/* <div className="d-flex align-items-center justify-content-center   mt-2">
                      
                    </div> */}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Register;
