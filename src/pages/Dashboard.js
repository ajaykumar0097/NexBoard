import React from "react";
import Headers from "../components/Headers";
import DashboardBox from "./dashboardComponents/DashboardBox";
// import Header from '../components/Header'
import { HiDotsHorizontal } from "react-icons/hi";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import HistoryIcon from "@mui/icons-material/History";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Chart } from "react-google-charts";
import { FaEye } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Button from "@mui/material/Button";
import Pagination from '@mui/material/Pagination';

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

export const options = {
  title: "Company Performance",
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "80%", height: "70%" },
  backgroundColor: "transparent",
};

const Dashboard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className="right-content w-100">
        <div className="row dashboardWrapperRow">
          <div className="col-md-8 dashboardBoxWrapper d-flex">
            {/*    
              <div className="dashboardBox"></div>
              <div className="dashboardBox"></div>
              <div className="dashboardBox"></div>
              <div className="dashboardBox"></div> */}
            <DashboardBox color={["#1a9f53", "#4eda89"]} />
            <DashboardBox color={["#ed68ff", "#be0ee1"]} />
            <DashboardBox color={["#64b3f6", "#2b77e5"]} />
            <DashboardBox color={["#f4d02b", "#e1940e"]} />
          </div>

          <div className="col-md-4">
            <div className="box graphBox">
              <div className="d-flex align-items-center justify-content-between">
                <div className="col1">
                  <h4 className="text-white mb-0">Total Users</h4>
                </div>

                <HiDotsHorizontal
                  className="text-white dotted__svg"
                  onClick={handleClick}
                />
              </div>

              <div className="d-flex align-items-center">
                <h3 className="text-white font-weight-bold">$3,787,681.00</h3>
                <div className="green__texts d-flex align-items-center ms-2 mt-2">
                  <p>40.63%tr</p>
                  <TrendingUpIcon />
                </div>
              </div>
              <p className="green__text">$3,578.90 in last month</p>
              <div>
                <Chart
                  chartType="AreaChart"
                  width="100%"
                  height="200px"
                  data={data}
                  options={options}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="card shadow border-0 p-3 mt-4">
          <h3 className="table__heading"> Best selling Product</h3>

          <div className="row my-2 ps-1">
            <div className="col-md-3 dropdow__label">Show By</div>
            <div className="col-md-3 dropdow__label ">Role By</div>
            <div className="col-md-3 dropdow__label ">Status By</div>
            <div className="col-md-3 dropdow__label">Search By</div>
          </div>
          <div className="row mb-1">
            <div className="col-md-3 pe-1 ">
              <select className="select__input w-100" name="" id="" disabled>
                <option value="">12 Rows</option>
              </select>
            </div>
            <div className="col-md-3 pe-1">
              <select className="select__input w-100" name="" id="" disabled>
                <option value="">12 Rows</option>
              </select>
            </div>
            <div className="col-md-3 pe-1">
              <select className="select__input w-100" name="" id="" disabled>
                <option value="">12 Rows</option>
              </select>
            </div>
            <div className="col-md-3 pe-1">
              <select className="select__input w-100" name="" id="" disabled>
                <option value="">12 Rows</option>
              </select>
            </div>
          </div>

          <div className="table-responsive mt-3">
            <table className="table table-bordered v-align">
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
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <input type="checkbox" className="me-1" name="" id="" />
                      <label htmlFor="">#1</label>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                        className="product__img me-1"
                        alt=""
                      />

                      <div className="d-flex flex-column">
                        <h6>Tops and skirt </h6>
                        <label>Skirts are very expensive</label>
                      </div>
                    </div>
                  </td>
                  <td>summer Tops and skirt</td>
                  <td>richman</td>
                  <td>
                    <div className="d-flex flex-column">
                      <del className="old">$20.00</del>
                      <span className="new text-danger">$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>star 4.9 (16)</td>
                  <td>380</td>
                  <td>$38k</td>
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
                  <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <input type="checkbox" className="me-1" name="" id="" />
                      <label htmlFor="">#1</label>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                        className="product__img me-1"
                        alt=""
                      />

                      <div className="d-flex flex-column">
                        <h6>Tops and skirt </h6>
                        <label>Skirts are very expensive</label>
                      </div>
                    </div>
                  </td>
                  <td>summer Tops and skirt</td>
                  <td>richman</td>
                  <td>
                    <div className="d-flex flex-column">
                      <del className="old">$20.00</del>
                      <span className="new text-danger">$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>star 4.9 (16)</td>
                  <td>380</td>
                  <td>$38k</td>
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
                
                
                
  <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <input type="checkbox" className="me-1" name="" id="" />
                      <label htmlFor="">#1</label>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                        className="product__img me-1"
                        alt=""
                      />

                      <div className="d-flex flex-column">
                        <h6>Tops and skirt </h6>
                        <label>Skirts are very expensive</label>
                      </div>
                    </div>
                  </td>
                  <td>summer Tops and skirt</td>
                  <td>richman</td>
                  <td>
                    <div className="d-flex flex-column">
                      <del className="old">$20.00</del>
                      <span className="new text-danger">$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>star 4.9 (16)</td>
                  <td>380</td>
                  <td>$38k</td>
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
                  <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <input type="checkbox" className="me-1" name="" id="" />
                      <label htmlFor="">#1</label>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                        className="product__img me-1"
                        alt=""
                      />

                      <div className="d-flex flex-column">
                        <h6>Tops and skirt </h6>
                        <label>Skirts are very expensive</label>
                      </div>
                    </div>
                  </td>
                  <td>summer Tops and skirt</td>
                  <td>richman</td>
                  <td>
                    <div className="d-flex flex-column">
                      <del className="old">$20.00</del>
                      <span className="new text-danger">$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>star 4.9 (16)</td>
                  <td>380</td>
                  <td>$38k</td>
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
                  <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <input type="checkbox" className="me-1" name="" id="" />
                      <label htmlFor="">#1</label>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                        className="product__img me-1"
                        alt=""
                      />

                      <div className="d-flex flex-column">
                        <h6>Tops and skirt </h6>
                        <label>Skirts are very expensive</label>
                      </div>
                    </div>
                  </td>
                  <td>summer Tops and skirt</td>
                  <td>richman</td>
                  <td>
                    <div className="d-flex flex-column">
                      <del className="old">$20.00</del>
                      <span className="new text-danger">$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>star 4.9 (16)</td>
                  <td>380</td>
                  <td>$38k</td>
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
                  <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <input type="checkbox" className="me-1" name="" id="" />
                      <label htmlFor="">#1</label>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                        className="product__img me-1"
                        alt=""
                      />

                      <div className="d-flex flex-column">
                        <h6>Tops and skirt </h6>
                        <label>Skirts are very expensive</label>
                      </div>
                    </div>
                  </td>
                  <td>summer Tops and skirt</td>
                  <td>richman</td>
                  <td>
                    <div className="d-flex flex-column">
                      <del className="old">$20.00</del>
                      <span className="new text-danger">$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>star 4.9 (16)</td>
                  <td>380</td>
                  <td>$38k</td>
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
                  <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <input type="checkbox" className="me-1" name="" id="" />
                      <label htmlFor="">#1</label>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                        className="product__img me-1"
                        alt=""
                      />

                      <div className="d-flex flex-column">
                        <h6>Tops and skirt </h6>
                        <label>Skirts are very expensive</label>
                      </div>
                    </div>
                  </td>
                  <td>summer Tops and skirt</td>
                  <td>richman</td>
                  <td>
                    <div className="d-flex flex-column">
                      <del className="old">$20.00</del>
                      <span className="new text-danger">$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>star 4.9 (16)</td>
                  <td>380</td>
                  <td>$38k</td>
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
                  <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <input type="checkbox" className="me-1" name="" id="" />
                      <label htmlFor="">#1</label>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                        className="product__img me-1"
                        alt=""
                      />

                      <div className="d-flex flex-column">
                        <h6>Tops and skirt </h6>
                        <label>Skirts are very expensive</label>
                      </div>
                    </div>
                  </td>
                  <td>summer Tops and skirt</td>
                  <td>richman</td>
                  <td>
                    <div className="d-flex flex-column">
                      <del className="old">$20.00</del>
                      <span className="new text-danger">$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>star 4.9 (16)</td>
                  <td>380</td>
                  <td>$38k</td>
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
                  <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <input type="checkbox" className="me-1" name="" id="" />
                      <label htmlFor="">#1</label>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                        className="product__img me-1"
                        alt=""
                      />

                      <div className="d-flex flex-column">
                        <h6>Tops and skirt </h6>
                        <label>Skirts are very expensive</label>
                      </div>
                    </div>
                  </td>
                  <td>summer Tops and skirt</td>
                  <td>richman</td>
                  <td>
                    <div className="d-flex flex-column">
                      <del className="old">$20.00</del>
                      <span className="new text-danger">$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>star 4.9 (16)</td>
                  <td>380</td>
                  <td>$38k</td>
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
                  <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <input type="checkbox" className="me-1" name="" id="" />
                      <label htmlFor="">#1</label>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                        className="product__img me-1"
                        alt=""
                      />

                      <div className="d-flex flex-column">
                        <h6>Tops and skirt </h6>
                        <label>Skirts are very expensive</label>
                      </div>
                    </div>
                  </td>
                  <td>summer Tops and skirt</td>
                  <td>richman</td>
                  <td>
                    <div className="d-flex flex-column">
                      <del className="old">$20.00</del>
                      <span className="new text-danger">$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>star 4.9 (16)</td>
                  <td>380</td>
                  <td>$38k</td>
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
                
                
              </tbody>
            </table>


          </div>

          <div className="d-flex tableFooter">
             <Pagination count={10} color="primary" className="pagination"  showFirstButton showLastButton/>
          </div>
        </div>
      </div>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        <MenuItem
          onClick={handleClose}
          className=" d-flex align-items-center history__icons"
        >
          <HistoryIcon className="me-2" />
          Last Day
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          className=" d-flex align-items-center history__icons"
        >
          <HistoryIcon className="me-2" />
          Last Week
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          className=" d-flex align-items-center history__icons"
        >
          <HistoryIcon className="me-2" />
          Last Month
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          className=" d-flex align-items-center history__icons"
        >
          <HistoryIcon className="me-2" />
          Last Year
        </MenuItem>
      </Menu>
    </>
  );
};

export default Dashboard;
