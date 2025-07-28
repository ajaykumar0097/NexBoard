import React from "react";
import "./FeedbackChat.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { FaReply } from "react-icons/fa6";
const FeedbackChat = ({name,time}) => {
  return (

     <div className="chat__main__container p-4 w-100">
       <div className="row justify-content-between ">
        <div className="col-md-6">
          <div
            className="my__account d-flex align-items-center"
            // onClick={handleMyAccClick}
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
              <h1>{name}</h1>
              <p className="mb-0">{time}</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 d-flex justify-content-end">
          <Button size="medium" className="signin__btn px-3 mx-1"><span className="mx-1"><FaReply/></span> Reply</Button>
        </div>
      </div>
      <div className="my-2">
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
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas.</p>
      </div>
     </div>

  );
};

export default FeedbackChat;
