import "../Pages.css";

import { FaEye } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Button from "@mui/material/Button";

import React from "react";
import { EcomTableData } from "./EcomTableData";

const EcomTable = () => {
  return (
    <>
      <div className="table-responsive mt-3 table__container">
        <table className="table table-bordered v-align fixed__header__table ">
          <thead className="thead-dark">
            <tr>
              <th>
                {" "}
                <div className="d-flex align-items-center">
                  <input type="checkbox" className="me-1" name="" id="" />
                  <label htmlFor="">UID</label>
                </div>
              </th>
              <th>PRODUCT</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th>PRICE</th>
              <th>STOCK</th>
              <th>RATING</th>
              <th>ORDER</th>
              <th>SALES</th>
              <th>ACTION</th>
            </tr>
          </thead>

          <tbody>
            {EcomTableData?.map((item) => {
              return (
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <input type="checkbox" className="me-1" name="" id="" />
                      <label htmlFor="">#{item?.id}</label>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src={item?.productImg}
                        className="product__img me-1"
                        alt=""
                      />

                      <div className="d-flex flex-column">
                        <h6>{item?.product?.productName}</h6>
                        <label>{item?.product?.productDetails}</label>
                      </div>
                    </div>
                  </td>
                  <td>{item?.category}</td>
                  <td>{item?.brand}</td>
                  <td>
                    <div className="d-flex flex-column">
                      <del className="old">{item?.price?.originalPrice}</del>
                      <span className="new text-danger">
                        {item?.price?.discountedPrice}
                      </span>
                    </div>
                  </td>
                  <td>{item?.stock}</td>
                  <td>{item?.rating}</td>
                  <td>{item?.order}</td>
                  <td>{item?.sales}</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button color="secondary" className="eye">
                        {" "}
                        <FaEye />
                      </Button>
                      <Button color="success" className="pencil mx-1">
                        <FaPencil />
                      </Button>
                      <Button color="error" className="delete">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
           
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EcomTable;
