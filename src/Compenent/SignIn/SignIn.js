import React, { useEffect, useRef } from "react";
import "./SignIn.css";
import axios from "axios";
import { baseUrl } from "../../ApiUrl";
import { Link } from "react-router-dom";
import TheAlert from "../TheAlert/TheAlert";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const UserName = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  
  const Login = () => {
    const params = {
      "username": UserName.current.value,
      "password": password.current.value,
    };
 
    const url =`${baseUrl}/login`;

    axios.post(url,params)
      .then((response) => {
       localStorage.setItem("Token",response.data.token);
       localStorage.setItem("User",JSON.stringify(response.data.user));
       <TheAlert Title={"Login Success"} dis={"The Operation Was Successful"}/>
        navigate("/HomePage");
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
       <TheAlert Title={"Login Error"} dis={"The Operation Was't Successful Pleases Try Again"}/>
        
      });
  };

  return (
    <div className="container SigninParent">
      <div className="SigninTitle">
        <h1>
          <img className="img-fuild" src="/icons/favicon.ico" />{" "}
          <span>Snapgram</span>
        </h1>
        <h1 className="mt-4">Login to your account</h1>
        <p>to use snapgram pleas enter your details</p>
      </div>

      <div className="Form ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            Login();
          }}
        >
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              User Name
            </label>
            <input
              ref={UserName}
              type="name"
              class="form-control"
              id="exampleInputUserName1"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              ref={password}
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" class="btn ">
            Submit
          </button>

          <p className="Change">
            Creat New account ?
            <Link to="/Login/SignUp" className="ms-2">
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
