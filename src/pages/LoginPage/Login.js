import React from 'react';
import './Login.css';
import SignUp from '../../Compenent/SignUp/SignUp';
import SignIn from '../../Compenent/SignIn/SignIn';
import { Outlet,Navigate } from 'react-router-dom';
const Login = () => {
  const Auth = false;
    return (

<>


<div className='container-fuild LoginPageForm'>
          <div className='sideImg col-lg-6 col-md-6 col-sm-6'>
            <img className='side_img img-fluid' src='/images/side-img.svg'/>
          </div>

          <div className='TheForm col-lg-6 col-md-12 col-sm-12'>
          <Outlet/>
          </div>
          
        </div>




</>

    );
}

export default Login;
