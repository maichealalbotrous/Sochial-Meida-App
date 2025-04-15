import React, { useRef, useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import Toasts from "../Toasts/Toasts";
import axios from "axios";
import { baseUrl } from "../../ApiUrl";
import TheAlert from "../TheAlert/TheAlert";

const SignUp = () => {
  const name = useRef("");
  const Username = useRef("");
  const email = useRef("");
  const password = useRef("");


  const ONSubmit = async (Value) => {
  
  };

  const CreatNewUserData =(e) => {
    e.preventDefault();
    const params = {
      "username": Username.current.value,
      "email": email.current.value,
      "password": password.current.value,
      "name": name.current.value,
    };

    const url = `${baseUrl}/register`;
    let navigate = useNavigate();
  axios.post(url,params)
  .then((response)=>{
    localStorage.setItem("Token",response.data.token);
    localStorage.setItem("User",JSON.stringify(response.data.user));
    navigate("/HomePage");
    <TheAlert Title={"sign up success"}/>
  }).catch((error)=>{
    <TheAlert Title={error}/>
  })
  };

  return (
    <div className="container SignUpParent">
      <div className="SignUpTitle">
        <h1>
          <img className="img-fuild" src="/icons/favicon.ico" alt="icon" />{" "}
          <span>Snapgram</span>
        </h1>
        <h1 className="mt-4">create new account</h1>
        <p>to use snapgram please enter your details</p>
      </div>
      <div className="Form ">
        <form onSubmit={CreatNewUserData}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              name
            </label>
            <input
              value={name.current.value}
              type="name"
              className="form-control"
              id="name"
              aria-describedby="nameHelp"
              ref={name}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              user name
            </label>
            <input
              value={Username.current.value}
           
              type="text"
              className="form-control"
              id="username"
              ref={Username}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              value={email.current.value}
          
              type="email"
              className="form-control"
              id="email"
              ref={email}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
            value={password.current.value}
              type="password"
              className="form-control"
              id="password"
              ref={password}
            />
          </div>
          <button type="submit" className="btn ">
            Submit
          </button>
          <p className="Change">
            already have account ?
            <Link className="ms-2" to="/Login/SignIn">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
