import React from 'react'
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import CartMsg from './CartMsg';
const CartMenu = ({cart,openCart,handleMyCartClose}) => {
    
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
           anchorEl={cart}
           id="notification"
           className="notification p-4"
           open={openCart}
           onClose={handleMyCartClose}
           //   onClick={handleMyCartClose}
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
           {/* <MenuItem onClick={handleMyCartClose}>
                         Order (12)
                       </MenuItem>
                        */}
   
           
        
   
             <div className="d-flex align-items-center ms-3 justify-content-between notification__show">
              <span> Orders (12)</span>
               <ListItemIcon onClick={onNotSettingOpen}>
                 <Settings className="setting__icons" fontSize="small" />
               </ListItemIcon>
             </div>
           
           <Divider className="pb-2" />
   
           <div className="messages">
             <CartMsg />
             <CartMsg />
             <CartMsg />
             <CartMsg />
             <CartMsg />
             <CartMsg />
           </div>
         </Menu>
   
         <Menu
           anchorEl={sett}
           id="email"
           className="email"
           open={setting}
           // onClose={handleMyCartClose}
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
           <MenuItem >
             <ListItemIcon>
               <PersonAdd fontSize="small" />
             </ListItemIcon>
             My Account
           </MenuItem>
           <MenuItem >
             <ListItemIcon>
               <Settings fontSize="small" />
             </ListItemIcon>
             Reset Password
           </MenuItem>
           <MenuItem >
             <ListItemIcon>
               <Logout fontSize="small" />
             </ListItemIcon>
             Logout
           </MenuItem>
         </Menu>
       </>
  )
}

export default CartMenu
