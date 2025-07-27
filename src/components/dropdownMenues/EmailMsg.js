import React from "react";
import "./dropdownMenues.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

const EmailMsg = ({handleMyEmailClose}) => {
  const [sett, setSett] = React.useState(null);
  const setting = Boolean(sett);

  const onNotSettingOpen = (event) => {
    setSett(event.currentTarget);
  };
  const onNotSettingClose = () => {
    setSett(null);
  };
  return (
    <>
      <div className="d-flex  align-items-center notification__panel p-2 mx-2 my-1">
        <div className="d-flex  user__img notification__content">
          <div className="position-relative">
            <img
              src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
              className="profile__img"
              alt=""
            />
            <FavoriteIcon className="notif__icon p-1" />
          </div>
          <div className="d-flex align-items-center">
            <div className="content__not me-5">
            <h4 className="mx-1">
              <div>
                {" "}
                <b>Ajay Kumar</b>         ~ Now{" "}
              </div>

              <div>Leather belt steve madden</div>
            </h4>
          </div>
          <div className="vertical__dotted" onClick={onNotSettingOpen}>
            <MoreVertIcon fontSize="medium" />
          </div>
          </div>
        </div>
      </div>
      <Menu
        anchorEl={sett}
        id="email"
        className="email"
        open={setting}
        onClose={handleMyEmailClose}
        onClick={onNotSettingClose}
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
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          My Account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Reset Password
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default EmailMsg;
