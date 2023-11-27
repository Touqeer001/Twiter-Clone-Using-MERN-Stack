import React, { useState } from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreIcon from "@mui/icons-material/More";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DoneIcon from '@mui/icons-material/Done';
import Divider from '@mui/material/Divider';
const Sidebar = ({handleLogout, user}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    console.log(e.currentTarget);
  };
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon"></TwitterIcon>
      <SidebarOption active={true} text="Home" Icon={HomeIcon} />
      <SidebarOption active={true} text=" Search" Icon={SearchIcon} />
      <SidebarOption
        active={true}
        text=" Notifications "
        Icon={NotificationsNoneIcon}
      />
      <SidebarOption active={true} text=" Mail " Icon={MailOutlineIcon} />
      <SidebarOption active={true} text="Bookmark " Icon={BookmarkBorderIcon} />
      <SidebarOption active={true} text="List " Icon={ListAltIcon} />
      <SidebarOption active={true} text=" Perm " Icon={PermIdentityIcon} />
      <SidebarOption active={true} text=" More  " Icon={MoreIcon} />
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
      {/* Other SidebarOption components with different props */}

      {/* //Profile Section */}
      <div className="Profile__info">
        <Avatar src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" />
        <div className="user__info">
          <h4>Touqeer Ansari</h4>
          <h5>@touqeer</h5>
        </div>
       
        <IconButton
          style={{ marginLeft: 2 }}
          aria-controls={openMenu ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openMenu ? "true" : undefined}
          onClick={handleClick}
        >
          <MoreHorizIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={openMenu}
          onClick={handleClose} 
          onClose={handleClose}
        >
          <MenuItem className="Profile__info1">
            <Avatar src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" />
            <div className="user__info subUser__info">
                <div>
              <h4>Touqeer Ansari</h4>
              <h5>@touqeer</h5>
              </div>
              <ListItemIcon className="done__icon" color="blue"><DoneIcon /></ListItemIcon>
            </div>
            
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>Add an existing account</MenuItem>
          <MenuItem onClick={handleLogout}>Log out </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Sidebar;
