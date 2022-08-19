import  { useState } from 'react'
import  { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Audi from "../../assets/audir8.jpg"
import axios from 'axios'


const DisplayBikeDetail = () => {
  const[bikelist, setBikelist]=useState([]);
  // useEffect(()=>{
  //   const handleBikeCards = async ()=>{
      // const bikeurl = `http://localhost:8080/api/bike/bikes_details`;
      // const getbike = await axios.get(bikeurl).then(response=>{
        // return (setBikelist(response.data));
  
    //   },[])
    
    // }
    // handleBikeCards();


    

  // },[]);
  const navigate =useNavigate();
  const handleBook=()=>{
    navigate("/userdetail");
  }
  return (
    <div>
      {
        bikelist.map(bike=>{
          return (
<div className="container">
      <div className="row parent items-center">
        <div className="col-2">
   <img src={Audi}alt="" />
        </div>
        <div className="col-2">
         
          <label className="loc">{bike.bikename}</label>
          <br />
          <span col-2>
             Automatic : Petrol <br /> {bike.seater}seats
          </span>
        </div>
        <div className="col-2">
          <label className='travel'> 23k kms driven</label>
         
        
        </div>
       
        <div className="col-2">
          <h2 className='head'>&#x20a8; {bike.price} </h2>
        </div>
        <div className="col-2">
          <button onClick={handleBook} class="viewAll">Book</button>
        </div>
      </div>
    </div>
          )
        })
      }
        
    </div>
  )
}

export default DisplayBikeDetail