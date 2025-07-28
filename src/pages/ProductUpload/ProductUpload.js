import React from "react";
import "./ProductUpload.css";
import { HiDotsHorizontal } from "react-icons/hi";
import Button from "@mui/material/Button";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdCollections } from "react-icons/md";
import { ImCross } from "react-icons/im";

const ProductUpload = () => {
  return (
    <>
      <div className="row ">
        <div className="col-md-7  m-0">
          <div className="main__productview__container py-4 px-4 m-2">
            <div className="d-flex align-items-center justify-content-between main__h4">
              <h4 className="">Basic Information</h4>
              <HiDotsHorizontal />
            </div>
            <div className="input__container mt-3">
              <label className="text__label" htmlFor="">
                Title
              </label>
              <input
                className="text__inputs mt-1 p-1 px-3"
                type="text"
                placeholder="Type here..."
              />
            </div>

            <div className="input__container mt-3">
              <label className="text__label" htmlFor="">
                description
              </label>
              <textarea
                className="text__inputs mt-1 p-3"
                placeholder="Type here..."
                style={{ height: "120px" }}
              />
            </div>

            <div className="row ">
              <div className="col-md-6 input__container mt-3">
                <label className="text__label" htmlFor="">
                  category
                </label>
                <input
                  className="text__inputs mt-1 p-1 px-2"
                  type="text"
                  placeholder="Type here..."
                />
              </div>
              <div className="col-md-6 input__container mt-3">
                <label className="text__label" htmlFor="">
                  brand
                </label>
                <input
                  className="text__inputs mt-1 p-1 px-2"
                  type="text"
                  placeholder="Type here..."
                />
              </div>
            </div>
            <div className="row ">
              <div className="col-md-6 input__container mt-3">
                <label className="text__label" htmlFor="">
                  Regular price
                </label>
                <input
                  className="text__inputs mt-1 p-1 px-2"
                  type="text"
                  placeholder="Type here..."
                />
              </div>
              <div className="col-md-6 input__container mt-3">
                <label className="text__label" htmlFor="">
                  discount price
                </label>
                <input
                  className="text__inputs mt-1 p-1 px-2"
                  type="text"
                  placeholder="Type here..."
                />
              </div>
            </div>
            <div className="row ">
              <div className="col-md-6 input__container mt-3">
                <label className="text__label" htmlFor="">
                  shipping fee
                </label>
                <input
                  className="text__inputs mt-1 p-1 px-2"
                  type="text"
                  placeholder="Type here..."
                />
              </div>
              <div className="col-md-6 input__container mt-3">
                <label className="text__label" htmlFor="">
                  tax rate
                </label>
                <input
                  className="text__inputs mt-1 p-1 px-2"
                  type="text"
                  placeholder="Type here..."
                />
              </div>
            </div>
            <div className="input__container mt-3">
              <label className="text__label" htmlFor="">
                Tags
              </label>
              <textarea
                className="text__inputs mt-1 p-3"
                placeholder="Type here..."
                style={{ height: "120px" }}
              />
            </div>
          </div>
        </div>
        <div className="col-md-5   m-0">
          <div className="main__productview__container py-4 px-4 m-2">
            <div className="d-flex align-items-center justify-content-between main__h4">
              <h4 className="">organization</h4>
              <HiDotsHorizontal />
            </div>
            <div className="input__container mt-3">
              <label className="text__label" htmlFor="">
                Add category
              </label>
              <div className="d-flex align-items-center">
                <input
                  className="text__inputs mt-1 p-1 px-2 w-75"
                  type="text"
                  placeholder="Type here..."
                />
                <Button className="add__btn  ms-2 mt-1">Add</Button>
              </div>
            </div>
            <div className="input__container mt-3">
              <label className="text__label" htmlFor="">
                add brand
              </label>
              <div className="d-flex align-items-center">
                <input
                  className="text__inputs mt-1 p-1 px-2 w-75"
                  type="text"
                  placeholder="Type here..."
                />
                <Button className="add__btn  ms-2 mt-1">Add</Button>
              </div>
            </div>
            <div className="input__container mt-3">
              <label className="text__label" htmlFor="">
                add color
              </label>
              <div className="d-flex align-items-center">
                <input
                  className="text__inputs mt-1 p-1 px-2 w-75"
                  type="text"
                  placeholder="Type here..."
                />
                <Button className="add__btn  ms-2 mt-1">Add</Button>
              </div>
            </div>
            <div className="input__container mt-3">
              <label className="text__label" htmlFor="">
                add size
              </label>
              <div className="d-flex align-items-center">
                <input
                  className="text__inputs mt-1 p-1 px-2 w-75"
                  type="text"
                  placeholder="Type here..."
                />
                <Button className="add__btn  ms-2 mt-1">Add</Button>
              </div>
            </div>
          </div>

          <div className="main__productview__container py-4 px-4 m-2">
            <div className="d-flex align-items-center justify-content-between main__h4">
              <h4 className="">specification</h4>
              <HiDotsHorizontal />
            </div>
            <div className="row">
              <div className="w-50 input__container mt-3">
                <label className="text__label" htmlFor="">
                  size
                </label>

                <select
                  className="text__inputs mt-1 p-1 px-2 "
                  multiple
                  size={5}
                  style={{ height: "100px", overflowY: "auto" }}
                ></select>
              </div>
              <div className="input__container mt-3 w-50">
                <label className="text__label" htmlFor="">
                  color
                </label>
                <select
                  className="text__inputs mt-1 p-1 px-2 "
                  multiple
                  size={5}
                  style={{ height: "100px", overflowY: "auto" }}
                ></select>
              </div>
            </div>

            <div className="row">
              <div className="w-50 input__container mt-3">
                <label className="text__label" htmlFor="">
                  stock
                </label>

                <input
                  className="text__inputs mt-1 p-1 px-2 "
                  type="text"
                  placeholder="Type here..."
                />
              </div>
              <div className="input__container mt-3 w-50">
                <label className="text__label" htmlFor="">
                  weight
                </label>
                <input
                  className="text__inputs mt-1 p-1 px-2 "
                  type="text"
                  placeholder="Type here..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main__productview__container py-4 px-4 m-2">
        <div className="d-flex justify-content-between ">
       
          <div className="position-relative">
            <img
            className="add__product__img "
            src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
            alt=""
          />
          <ImCross className="position-absolute "/>
          </div>
           <div className="position-relative">
            <img
            className="add__product__img "
            src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
            alt=""
          />
          <ImCross className="position-absolute cross__icon "/>
          </div>
          <div className="position-relative">
            <img
            className="add__product__img "
            src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
            alt=""
          />
          <ImCross className="position-absolute cross__icon"/>
          </div>
         <div className="position-relative">
            <img
            className="add__product__img "
            src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
            alt=""
          />
          <ImCross className="position-absolute cross__icon "/>
          </div>
          <div className="add__product__img upload__img position-relative">
            <input type="file" id="uploadImg" className="upload__input" />
            <label htmlFor="uploadImg" className="upload__label">
              <MdCollections />
              <span>Image Upload</span>
            </label>
          </div>
        </div>{" "}
      </div>
      <div className="me-3">
        <Button className="py-4 m-2  w-100 add__btn">
          <FaCloudUploadAlt className="mx-2" />
          Publish and View
        </Button>
      </div>
    </>
  );
};

export default ProductUpload;
