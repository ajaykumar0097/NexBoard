import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import "./dropdownMenues.css";
import SettingsIcon from "@mui/icons-material/Settings";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationMsg from "./NotificationMsg";
// import Notificationdrop from "./dropdownMenues/Notificationdrop";

const Notificationdrop = ({
  notification,
  openNotification,
  handleMyNotificationClose,
}) => {
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
      <Menu
        anchorEl={notification}
        id="notification"
        className="notification p-4"
        open={openNotification}
        onClose={handleMyNotificationClose}
        //   onClick={handleMyNotificationClose}
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
        {/* <MenuItem onClick={handleMyNotificationClose}>
                      Order (12)
                    </MenuItem>
                     */}

        <div className="d-flex align-items-center ms-3 justify-content-between notification__show ">
          Notifications (34)
          <ListItemIcon onClick={onNotSettingOpen}>
            <Settings className="setting__icons" fontSize="small" />
          </ListItemIcon>
        </div>

        <Divider className="pb-2" />

        <div className="messages">
          <NotificationMsg />
          <NotificationMsg />
          <NotificationMsg />
          <NotificationMsg />
          <NotificationMsg />
          <NotificationMsg />
        </div>
      </Menu>

      <Menu
        anchorEl={sett}
        id="email"
        className="email"
        open={setting}
        // onClose={handleMyEmailClose}
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

export default Notificationdrop;
