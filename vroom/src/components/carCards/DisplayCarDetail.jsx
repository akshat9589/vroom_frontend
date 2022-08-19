import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Audi from "../../assets/audir8.jpg"
import "./DisplayCarDetail.scss"
import axios from 'axios'


import { useState } from 'react'

const DisplayCarDetail = (props) => {
  const [carlist,setCarlist] = useState([]);
  
  useEffect(()=>{
    const handleCarCards = async ()=>{
      const url = `http://localhost:8080/api/cars/cars_details`;
      const getcars = await axios.get(url).then(response=>{
        return (setCarlist(response.data));
  
      })
    
    }
    handleCarCards();


    

  },[]);

  
  
  const navigate =useNavigate();
  const handleBook=()=>{
    navigate("/userdetail",{data:{edate :props.edate , sdate :props.sdate , price:props.price}});
  }
  
  return (
    <div>
      {
        carlist.map(cars=>{
          return (
            <div className="container  ">
      <div className="row parent items-center">
        <div className="col-2">
   <img src={Audi}alt="" />
        </div>
        <div className="col-2">
         
          <label className="loc">{cars.carname}</label>
          <br />
          <span col-2>
             {cars.cartype} : Petrol <br /> {cars.seater} seats
          </span>
        </div>
        <div className="col-2">
          <label className='travel'> 23k kms driven</label>
         
        
        </div>
       
        <div className="col-2">
          <h2 className='head'>&#x20a8; {cars.price} </h2>
        </div>
        <div className="col-2">
          <button onClick={handleBook} className="viewAll">Book</button>
          </div>
      </div>
    </div>

          )
        })
      }
        
    </div>
  )
}

export default DisplayCarDetail