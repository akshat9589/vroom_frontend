import React from "react";
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import TwoWheelerOutlinedIcon from '@mui/icons-material/TwoWheelerOutlined';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import StoreIcon from '@mui/icons-material/Store';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo"> Vroom</span>
      </div>
      <hr />
      <div className="center">
        <ul>
         <p className="title">MAIN</p>
          <li>
          <DashboardIcon className="icon"/>
            <span>DashBoard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PersonOutlineOutlinedIcon className="icon"/>
            <span>Users</span>
          </li>

          <li>
            <TwoWheelerOutlinedIcon className="icon"/>
            <a href="/biketable">Bikes</a>
          </li>
          <li>

            <DirectionsCarIcon className="icon"/>
            <a href="/cartable">Cars</a>
          </li>
          <li>
            <CreditCardIcon className="icon"/>

            <a href="/ordertable">Orders</a>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <AnalyticsIcon className="icon"/>

            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className="icon"/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICES</p>
          <li>
            <StoreIcon className="icon"/>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className="icon"/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default Sidebar;
