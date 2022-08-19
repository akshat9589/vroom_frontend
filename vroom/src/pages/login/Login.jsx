import React, { useRef,useEffect,useState,useContext } from "react";
import "./login.scss";
import{Link} from 'react-router-dom';
// import axios from 'axios';
import {  useNavigate } from "react-router-dom";
import loginimg from "../../assets/signupImage.webp";
import AuthContext from "../../context/AuthProvider";
import axios from "../../api/axios";
const LOGIN_URL ='/auth';

const Login = () => {
  const [setAuth]=useContext(AuthContext)
  const navigate=useNavigate();
  const userRef=useRef();
  const errRef=useRef();  
  const [username,setUserName]=useState(""); 
  const [password,setPassword]=useState(" "); 
  const [errMsg,setErrMsg]=useState("");
  const [success,setSuccess]=useState(false);
  // const [validate,setValidate]= useState("");


   

  useEffect(()=>{
    userRef.current.focus();
  },[]);

  useEffect(()=>{
    setErrMsg("");
  },[username,password])

  const handleSubmit= async(event)=>{
    event.preventDefault();
    try{
      const response =await axios.post(LOGIN_URL,
        
        JSON.stringify({username,password}),
        {
          headers:{'Content-Type':'application/json'},
          withCredentials:true
        });
        console.log(JSON.stringify(response?.data));
        const accessToken =response?.data?.accessToken;
        const roles =response?.data?.roles;
        setAuth({username,password,roles,accessToken});
      setUserName("");
    setPassword("");
    setSuccess(true);


    }catch(err){

      if(!err?.response){
        setErrMsg("No Server response")
      }else if(err.response?.status===400){
        setErrMsg("Missing Username or Password");
      }else if(err.response?.status===401){
        setErrMsg("Unauthorized")
      }else{
        setErrMsg("Login Failed!");
      }
      errRef.current.focus();

    }
    
    if(username==='akshatjain' && password==="123456")
    navigate("/");
    else
    alert("please enter correct password!");
    // const url = `http://localhost:8080/api/user/getusername/${username}`;
    // await function getUserByid(){
    //   try{
    //     axios.get(url).then(response=>{
    //       setValidate(response.data);
    //     })
    //   }
    //   catch(e){
    //     console.log(e);
    //   }
    };
  

  
  return (
    <>
  
     {
      success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="/"> go to home</a>
          </p>
        </section>
      )  :(
      <section className="Form my-4 mx-5">
       <p ref={errRef} className={errMsg ? "errmsg":"offscreen"} aria-live="assertive">{errMsg}</p>
        <div className="container">
          <div className="row no-gutters">
            <div className=" image col-lg-5">
               <img
                src={loginimg}
                className="d-block w-100"
                alt="..."
                width="200px"
                height="200px" 
              /> 
            </div>
            <div className="col-lg-7">
              <h1 className="font-weight-bold py-3 pt=5">Login to your account</h1>
              {/* <h4>Login to your account</h4> */}
              <form method="POST" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                    onChange={(event)=>{
                      setUserName(event.target.value)
                    }}
                    ref={userRef}
                    value={username}
                      type="text"
                      placeholder="Enter your User Name"
                      className="form-control my-3 p-4"
                      name="username"
                      id="username"
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                    onChange={(event)=>{
                      setPassword(event.target.value)
                    }}
                      type="password"
                      placeholder="Enter your password"
                      className="form-control my-3 p-4 "
                      name="password"
                      required
                      value={password}
                      id="password"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <button  type="submit" className="loginSubmit mb-2">
                  
                      Login
                    </button>
                  </div>
                </div>
               
              </form>
              <a className="a" href="/">  
                </a>
                <p>
                  Don't have account?
                  <Link to="/signup" >
                 SignUp
                </Link> 
                </p>
            </div>
          </div>
        </div>
      </section>
     )   }
      
  
    </>
  );
  
};

export default Login;
