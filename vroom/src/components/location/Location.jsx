import React, { useState } from "react";
import "./location.scss";
import {useNavigate} from "react-router-dom"
import HomePageImg from "../../assets/homeImage.png";
// import UserDetail from "../../userdetail/UserDetail";

const Location = (props) => {
  const [city, setCity] = useState("");
  const [startDate,setStartDate]=useState("");
  const [endDate,setEndDate]=useState("");
  const navigate=useNavigate();
  // navigate('/carCards', { state: { startDate: startDate, endDate: endDate } });
  // const {state} = useLocation();
  // const{username,id} = state
  // props.history.push('carcards',{username:"manav",id:7})

  const handleEndDate=(event)=>{
    setEndDate(event.target.value);
  }
  const handleStartDate=(event)=>{
    setStartDate(event.target.value);
  }


  const findCar = (event) => {
    console.log("submit button is clicked");
    alert("your are on  car find car");
    // navigate("/carcards");
    navigate('/carCards', { state: { startDate: startDate, endDate: endDate } });
  };
  const findBike = (event) => {
 navigate("/bikecards");
  };
  const handleChange = (event) => {
    console.log(event.target.value);
    setCity(event.target.value);
  };
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Self Drive Cars and Bikes On Rent
            </h1>
            <p className="mb-8 leading-relaxed">
              Get Cars and Bikes on rent at cheapest price on Vroom Rental...
            </p>
            <div className="flex w-full md:justify-start justify-center items-end">
              {/* <form onSubmit={handleSubmit}> */}
              <div className="relative mr-4 md:w-full lg:  w-full xl:w-1/2 w-2/4">
                <select
                  value={city}
                  onChange={handleChange}
                  id="inputState"
                  className="form-select w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors "
                >
                  <option id="hyd" name="hyderabad">
                    Hyderabad
                  </option>
                  <option id="mum" name="mumbai">
                    Mumbai
                  </option>
                  <option id="del" name="delhi">
                    Delhi
                  </option>
                  <option id="ban" name="bangalore">
                    Bangalore
                  </option>
                  <option id="bpl" name="Bhopal">
                    Bhopal
                  </option>
                  <option id="ind" name="indore">
                    Indore
                  </option>
                </select>
              </div>
            </div>
            <div className="datePickerContainer">
              <div className="startDate">
                <label>Start Date</label>
                <input type="date" value={startDate} onChange={handleStartDate} />
                {/* <UserDetail name={startDate} display={handleStartDate}/> */}
              </div>
              <div className="endDate">
                <label>End Date</label>
                <input type="date" name="endDate" value={endDate} onChange={handleEndDate}/>
                 
              </div>
            </div>
            <div className="my-4">
              <button
                onClick={findCar}
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 mx-2 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Find Car
              </button>
              <button
                onClick={findBike}
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6  mx-2 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Find Bike
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={HomePageImg}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;
