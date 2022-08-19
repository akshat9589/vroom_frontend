import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Audi from "../../assets/audir8.jpg";


const UserDetail = (props) => {
    
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [mobile, setMobile] = useState("");
  const [adhaar, setAdhaar] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/orders/postorder", {
        orderid: id,
        customer_name: firstname,
        pickup_day: lastname,
        username: username,
        carname: mobile,
        return_date: adhaar,
        order_status: email,
        final_price: password
     
      });
      alert("user registration successfully");
      setId("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setAdhaar("");
      setMobile("");
    } catch (err) {
      alert("user registration failed");
    }
  }


  const location =useLocation();
  console.log(location.data) 
  return (
    <div className="item-center   mx-5">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={Audi}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Audi R8
            </h1>
            <p className="mb-8 leading-relaxed"> Book Now </p>
            <div className="flex justify-center">
             <p> 25 thousand kilometer driven</p>
             
<hr />
       

       {/* DATE SHOE */}



       
       {/* <p> {props.display(startDate)}</p> */}

            </div>
          </div>
        </div>
      </section>
      <hr />
      {/* userDetail */}{" "}
      <section className=" Form flex card-img mt-5">

       

      <form className="form" onSubmit={handleSubmit}>
      <h1> Please Fill the Form TO Check Out the Order</h1>
                <div className="col-md-6">
                  <label htmlFor="id" className="form-label">
                    orderID
                  </label>
                  <input
                    name="id"
                    onChange={(event) => {
                      setId(event.target.value);
                    }}
                    type="number"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">User-Name</label>
                  <input
                    name="username"
                    onChange={(event) => {
                      setUserName(event.target.value);
                    }}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">First-Name</label>
                  <input
                    name="firstname"
                    onChange={(event) => {
                      setFirstName(event.target.value);
                    }}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">pickup</label>
                  <input
                    name="lastname"
                    onChange={(event) => {
                      setLastName(event.target.value);
                    }}
                    type="text"
                    className="form-control"
                    placeholder="YYYY-MM-DD"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    order_status
                  </label>
                  <input
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    name="email"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputPassword4" className="form-label">
                    final_price
                  </label>
                  <input
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    name="password"
                    type="number"
                    className="form-control"
                  />
                </div>
                <div className="col-6">
                  <label className="form-label">return_date</label>
                  <input
                    onChange={(event) => {
                      setAdhaar(event.target.value);
                    }}
                    name="adhaar"
                    type="text"
                    className="form-control"
                    placeholder="YYYY-MM-DD"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">carname</label>
                  <input
                    onChange={(event) => {
                      setMobile(event.target.value);
                    }}
                    name="mobile"
                    type="text"
                    className="form-control"
                  />
                </div>

                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Agree to
                      <Link
                        className="tc active"
                        aria-current="page"
                        to="/t and c"

                        
                      >
                        term and condition
                      </Link>
                    </label>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <button type="submit" className="loginSubmit mb-2">
                      Check Out
                    </button>
                  </div>
                </div>
              </form>
      </section>
    </div>
  );
};

export default UserDetail;
