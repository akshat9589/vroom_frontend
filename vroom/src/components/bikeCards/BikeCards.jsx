import { useState } from "react";
import DisplayBikeDetail from "./DisplayBikeDetails";
import "./bikecards.scss"
const BikeCards = () => {
  
  let cost = 2500;
  const [price, setPrice] = useState(cost);

  const handleChange = (e) => {
    if (e.target.value === "ins") {
      setPrice(price + 200);
      console.log(price);
    }else
    if (e.target.value === "noins") {
      setPrice(price - 200);
      console.log(price);
    }
  };
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



      <div className="col-span-3 flex space-x-8 bg-light h-screen pl-2">
       
       
       
       
        {/* insurance */}

        <div className="items-center  flex h-12 ">

          <h2>Insurance</h2>
        </div>
        <div className=" flex items-center h-12 space-x-2">
          {/* <p>Insurance</p> */}
          <input
          
            type="radio"
            value="ins"
            name="insurance"
            id="insurance"
            onChange={handleChange}
          />
        </div>
        <div className=" flex items-center h-12 space-x-2">
          <p>No-Insurance</p>
          <input
          
            type="radio"
            value="noins"
            name="insurance"
            id="insurance"
            onChange={handleChange}
          />
        </div>

        {/* driver Code */}
        <div className="mt-5 ms-auto"> 
                 <h1> Driver</h1>
        </div>

       
      </div>
     


      <div className="col-span-9 bg-pink h-screen pl-2">
      <DisplayBikeDetail/>
      
      </div>

 

</div>


  );
};

export default BikeCards;
