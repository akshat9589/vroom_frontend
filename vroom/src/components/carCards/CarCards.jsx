import { useState } from "react";
import { useLocation } from "react-router-dom";
import Location from "../location/Location";
import DisplayCarDetail from "./DisplayCarDetail";
import Filter from "./Filter";

const CarCards = (props) => {
  
  // let cost = 0;
  // const [price, setPrice] = useState(cost);
   const location = useLocation();
   console.log(location.state.startDate);
   const [price, setPrice] = useState();
 let cost=0;
  const handleChange = (e) => {
    if (e.target.value === "ins") {
      setPrice(cost + 200);
      console.log(cost);
    }else
    if (e.target.value === "noins") {
      setPrice(cost - 200);
      console.log(cost);
    }
  };

  // const handleChange = (e) => {
  //   if (e.target.value === "ins") {
  //     setPrice(price + 200);
  //     console.log(price);
  //   }else
  //   if (e.target.value === "noins") {
  //     setPrice(price - 200);
  //     console.log(price);
  //   }
  // };
  // const handleDriver = (e) => {
  //   if (e.target.value === "dri") {
  //     setPrice(price + 200);
  //     console.log(price);
  //   }else
  //   if (e.target.value === "nodri") {
  //     setPrice(price - 200);
  //     console.log(price);
  //   }
  // };
  console.log(price);

  return (
    <div className="grid grid-cols-12">



      <div id = "out" className="bg-light h-screen pl-2 col-span-3">

       
       
       
       
        
      return (
    <div>
      <section>
        <div className=" flex items-center space-y-4 h-12 space-x-6">
          <p>Insurance</p>
          <input
            type="radio"
            value="ins"
            name="insurance"
            id="insurance"
            onChange={handleChange}
          />
          <p>No-Insurance</p>
          <input
            type="radio"
            value="noins"
            name="insurance"
            id="insurance"
            onChange={handleChange}
            checked
          />
        </div>

        <div className=" flex items-center space-y-4 h-12 space-x-2">
          <h1>Need a Driver</h1>

          <p className="mx-2">Yes</p>
          <input
            type="radio"
            value="driver"
            name="driver"
            id="driver"
            onChange={handleChange}
          />
          <p>No</p>
          <input
            type="radio"
            value="nodriver"
            name="driver"
            id="driver"
            onChange={handleChange}
            checked
          />
        </div>

        <div className=" flex items-center   h-12 space-x-2">
          <p>InSide-City</p>
          <input
            type="radio"
            value="incity"
            name="city"
            id="city"
            onChange={handleChange}
          />
          <p>Outside-City</p>
          <input
            type="radio"
            value="outcity"
            name="city"
            id="city"
            onChange={handleChange}
            checked
          />
        </div>
      </section>
    </div>
       
      </div>
     


      <div className="col-span-9 bg-pink h-screen pl-2">
  <DisplayCarDetail  price = {price} sdate = { location.state.startDate}
edate = {location.state.endDate}/>

      
      </div>

 

</div>


  );
};

export default CarCards;
