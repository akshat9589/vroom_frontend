import React from "react";
import "./navbar.scss";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="search..." />

          <SearchOutlinedIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <NotificationsNoneIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
          <div>
            <ChatBubbleOutlineIcon className="icon" />
           <div className="counter">2</div>
          </div>
          </div>
          <div className="item">
          <div>
            <FormatListBulletedOutlinedIcon className="icon" />
          </div>
          </div>
          <div className="item">
          <div>
            <img src="/" alt="avatar" className="avatar" />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
