import React, { useState } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import signpic from "../../assets/signup.webp";
function SignUp() {


  // const navigate = useNavigate();


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
      await axios.post("http://localhost:8080/api/user/user_details", {
        id: id,
        firstname: firstname,
        lastname: lastname,
        username: username,
        mobile: mobile,
        aadharno: adhaar,
        email: email,
        pass: password
     
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


  return (
    <div>
      <section className="Form my-20 mx-5 card-img-overlay">
        <div className="container">
          <div className="row no-gutters">
            <div className=" image col-lg-5">
              <img
                src={signpic}
                className="d-block w-100"
                alt="..."
                width="200px"
                height="200px"
              />
              <div className=" mx-5 p-3 col-lg-5">
                <p>Already have account! </p>
                <NavLink to="/login">Sign In </NavLink>
              </div>
            </div>
            <div className="col-lg-7">
              <h1 className="font-weight-bold  py-3 pt-5">
                Sign Up to Your account
              </h1>
              <form className="form" onSubmit={handleSubmit}>
                <div className="col-md-6">
                  <label htmlFor="id" className="form-label">
                    ID
                  </label>
                  <input
                    name="id"
                    onChange={(event) => {
                      setId(event.target.value);
                    }}
                    type="text"
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
                  <label className="form-label">Last-Name</label>
                  <input
                    name="lastname"
                    onChange={(event) => {
                      setLastName(event.target.value);
                    }}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Email
                  </label>
                  <input
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    name="email"
                    type="email"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputPassword4" className="form-label">
                    Password
                  </label>
                  <input
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    name="password"
                    type="password"
                    className="form-control"
                  />
                </div>
                <div className="col-6">
                  <label className="form-label">Adhaar Number</label>
                  <input
                    onChange={(event) => {
                      setAdhaar(event.target.value);
                    }}
                    name="adhaar"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Mobile</label>
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
                      SignUP
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
