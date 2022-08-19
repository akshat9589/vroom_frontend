import React, { useState } from "react";

const Filter = () => {


  const [price, setPrice] = useState();
 let cost=2500;
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
  );
}


export default Filter;