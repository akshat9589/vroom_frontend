import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import Featured from "../../components/featured/Featured";
import "./admindashboard.scss";


const AdminDashBoard = () => {
  return (
    <div className="admindashboard">
      <Sidebar />
      <div className="admindashboardContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="uses"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>

        </div>
        <div className="charts"> <Featured/>
        <Chart title="Last 6 Months (Revenue)" aspect={2/1}/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Lastest Transaction</div>
          <Table/>

        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
