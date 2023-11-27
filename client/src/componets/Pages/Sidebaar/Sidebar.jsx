import React from "react";
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
const Sidebar = () => {
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
      <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button> 
      {/* Other SidebarOption components with different props */}
    </div>
  );
};

export default Sidebar;
