import React from "react";
import { FaStoreAlt } from "react-icons/fa";
import { MdOutlinePix } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoIosColorPalette } from "react-icons/io";
import { SiZerodha } from "react-icons/si";
import { FaTag } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { MdHotelClass } from "react-icons/md";
import { MdVerified } from "react-icons/md";

import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import FeedbackChat from "./feedbackChat/FeedbackChat";
import { HiDotsVertical } from "react-icons/hi";
import Button from "@mui/material/Button";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const ProductView = () => {
  return (
    <div className="main__productview__container">
      <div className="row">
        <div className="col-md-5">
          <h6 className="pro__heading">Product Gallery</h6>
          <div>
            <img
              className="view__img my-3"
              src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
              alt="https://mironcoder-hotash.netlify.app/images/product/01.webp"
            />
          </div>
          <div className="d-flex align-items-center justify-content-between gap-1">
            <img
              className="product__multi__img"
              src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
              alt="https://mironcoder-hotash.netlify.app/images/product/01.webp"
            />
            <img
              className="product__multi__img"
              src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
              alt="https://mironcoder-hotash.netlify.app/images/product/01.webp"
            />
            <img
              className="product__multi__img"
              src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
              alt="https://mironcoder-hotash.netlify.app/images/product/01.webp"
            />
            <img
              className="product__multi__img"
              src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
              alt="https://mironcoder-hotash.netlify.app/images/product/01.webp"
            />
          </div>
        </div>
        <div className="col-md-7">
          <h6 className="pro__heading">Product Details</h6>
          <div className="product__details mt-3">
            <h2>
              Formal suits for men wedding slim fit 3 piece dress business party
              jacket
            </h2>
            <div className="product__specification d-flex align-items-center">
              <FaStoreAlt className="me-3 mt-1" />
              <h5>Brand</h5>
              <span className="ms-5 me-3">:</span>
              <p>Ecstasy</p>
            </div>
            <div className="product__specification d-flex align-items-center">
              <MdOutlinePix className="me-3 mt-1" />
              <h5>category</h5>
              <span className="ms-5 me-3">:</span>
              <p>man's</p>
            </div>
            <div className="product__specification d-flex align-items-center">
              <IoSettings className="me-3 mt-1" />
              <h5>tags</h5>
              <span className="ms-5 me-3">:</span>
              <div className="d-flex align-items-center">
                <p className="boxes">suit</p>
                <p className="boxes">party</p>
                <p className="boxes">dress</p>
                <p className="boxes">smart</p>
                <p className="boxes">man</p>
                <p className="boxes">styles</p>
              </div>
            </div>
            <div className="product__specification d-flex align-items-center">
              <IoIosColorPalette className="me-3 mt-1" />
              <h5>color</h5>
              <span className="ms-5 me-3">:</span>
              <div className="d-flex align-items-center">
                <p className="boxes">Red</p>
                <p className="boxes">blue</p>
                <p className="boxes">green</p>
                <p className="boxes">black</p>
                <p className="boxes">grey</p>
              </div>
            </div>
            <div className="product__specification d-flex align-items-center">
              <SiZerodha className="me-3 mt-1" />
              <h5>size</h5>
              <span className="ms-5 me-3">:</span>
              <div className="d-flex align-items-center">
                <p className="boxes">SM</p>
                <p className="boxes">MD</p>
                <p className="boxes">LG</p>
                <p className="boxes">XL</p>
                <p className="boxes">XXL</p>
              </div>
            </div>
            <div className="product__specification d-flex align-items-center">
              <FaTag className="me-3 mt-1" />
              <h5>price</h5>
              <span className="ms-5 me-3">:</span>
              <p className="d-flex">
                <span>$37.00</span>{" "}
                <del className="mx-2" style={{ color: "tomato" }}>
                  $42.00
                </del>
              </p>
            </div>
            <div className="product__specification d-flex align-items-center">
              <IoMdCart className="me-3 mt-1" />
              <h5>stock</h5>
              <span className="ms-5 me-3">:</span>
              <p>(68) piece</p>
            </div>
            <div className="product__specification d-flex align-items-center">
              <MdHotelClass className="me-3 mt-1" />
              <h5>review</h5>
              <span className="ms-5 me-3">:</span>
              <p>(03) review</p>
            </div>
            <div className="product__specification d-flex align-items-center">
              <MdVerified className="me-3 mt-1" />
              <h5>published</h5>
              <span className="ms-5 me-3">:</span>
              <p>02 feb 2020</p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 mx-2">
        <h6 className="pro__heading">product description</h6>
      </div>
      <div className="mx-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          reprehenderit repellendus expedita esse cupiditate quos doloremque
          rerum, corrupti ab illum est nihil, voluptate ex dignissimos! Sit
          voluptatem delectus nam, molestiae, repellendus ab sint quo aliquam
          debitis amet natus doloremque laudantium? Repudiandae, consequuntur,
          officiis quidem quo deleniti, autem non laudantium sequi error
          molestiae ducimus accusamus facere velit consectetur vero dolore natus
          nihil temporibus aspernatur quia consequatur? Consequuntur voluptate
          deserunt repellat tenetur debitis molestiae doloribus dicta. In rem
          illum dolorem atque ratione voluptates asperiores maxime doloremque
          laudantium magni neque ad quae quos quidem, quaerat rerum ducimus
          blanditiis reiciendis
        </p>
      </div>

      <div className="my-4 mx-2">
        <h6 className="pro__heading">rating analytics</h6>

        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-6">
            <div className="d-flex align-items-center rating__panel">
              <span>5 Star</span>
              <div className="mx-2 star__rating__bar">
                <span className="" style={{ width: "90%" }}></span>
              </div>
              <span>(22)</span>
            </div>
            <div className="d-flex align-items-center rating__panel">
              <span>4 Star</span>
              <div className="mx-2 star__rating__bar">
                <span className="" style={{ width: "80%" }}></span>
              </div>
              <span>(20)</span>
            </div>
            <div className="d-flex align-items-center rating__panel">
              <span>3 Star</span>
              <div className="mx-2 star__rating__bar">
                <span className="" style={{ width: "50%" }}></span>
              </div>
              <span>(15)</span>
            </div>
            <div className="d-flex align-items-center rating__panel">
              <span>2 Star</span>
              <div className="mx-2 star__rating__bar">
                <span className="" style={{ width: "20%" }}></span>
              </div>
              <span>(10)</span>
            </div>
            <div className="d-flex align-items-center rating__panel">
              <span>1 Star</span>
              <div className="mx-2 star__rating__bar">
                <span className="" style={{ width: "5%" }}></span>
              </div>
              <span>(5)</span>
            </div>
          </div>
          <div className="col-md-4 text-center rating__div">
            <h3>Total Review (38)</h3>
            <h4>4.9</h4>
            <div className="d-flex justify-content-end me-2">
              <Box sx={{ width: 200, display: "flex", alignItems: "center" }}>
                <Rating
                  name="text-feedback"
                  value={4.5}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
              </Box>
            </div>
            <p>Your Average Rating Star</p>
          </div>
          <div className="col-md-1"></div>
        </div>
        <div className="my-4 mx-2">
          <h6 className="pro__heading">Customer Reviews</h6>
        </div>
        <div className="my-4 mx-2 ">
          <div className="d-flex justify-content-between">
            <div className="w-100 px-3">
              <FeedbackChat name={"Ajay Kumar"} time={"25 minutes ago!"} />
            </div>
            <div className="vertical__dots">
              <HiDotsVertical />
            </div>
          </div>
        </div>

        <div className="my-4 px-2 ">
          <div className="d-flex justify-content-between">
            <div className="w-100 px-3 ms-5">
              <FeedbackChat name={"Ram"} time={"1 week ago"} />
            </div>
            <div className="vertical__dots">
              <HiDotsVertical />
            </div>
          </div>
        </div>

        <div className="my-4 px-2 ">
          <div className="d-flex justify-content-between">
            <div className="w-100 px-3 ms-5">
              <FeedbackChat name={"Ram"} time={"1 week ago"} />
            </div>
            <div className="vertical__dots">
              <HiDotsVertical />
            </div>
          </div>
        </div>

        <div className="my-4 mx-2 ">
          <div className="d-flex justify-content-between">
            <div className="w-100 px-3">
              <FeedbackChat name={"Ajay Kumar"} time={"25 minutes ago!"} />
            </div>
            <div className="vertical__dots">
              <HiDotsVertical />
            </div>
          </div>
        </div>

        <div className="my-4 px-2 ">
          <div className="d-flex justify-content-between">
            <div className="w-100 px-3 ms-5">
              <FeedbackChat name={"Ram"} time={"1 week ago"} />
            </div>
            <div className="vertical__dots">
              <HiDotsVertical />
            </div>
          </div>
        </div>
      </div>

      <div className="my-4 mx-2">
        <h6 className="pro__heading">review reply form</h6>
      </div>

      <div className="my-4 mx-2">
        <textarea
          className="feedback__textarea w-100 p-3"
          name=""
          placeholder="Type here...."
          id=""
        ></textarea>
      </div>
      <div className="my-4 mx-2">
        <Button className="w-100 dro__btn py-3">Drop Your Replies</Button>{" "}
      </div>
    </div>
  );
};

export default ProductView;
