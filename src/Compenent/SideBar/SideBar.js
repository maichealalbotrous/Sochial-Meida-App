import React, { useState } from "react";
import "./SideBar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import NewPost from "../CreatNewPost/NewPost";
import { Alert, Button } from "bootstrap";
import TheAlert from "../TheAlert/TheAlert";

const SideBar = () => {
const [menuopen,setmenuopen ] = useState(false)
let navigate = useNavigate();

const ShowLinks=()=>{
  setmenuopen(!menuopen);
}


const logout=()=>{
const token = localStorage.getItem("Token");
if(token !=null)
{
  <TheAlert Title={"logOut Success"}/>
  localStorage.removeItem("Token");
  localStorage.removeItem("User");
  navigate("/Login/SignIn");
}
}
  return (
    <div>
      <div className="SideIcone">
       <p className="menuBar" ><img onClick={()=>{ShowLinks()}} className="menu mb-4" src="/icons/icons8-menu-50.png"/></p>
       </div>
       <div style={{position:menuopen === true ? "fixed" : "" ,zIndex:menuopen === true ? "100":"" }} className={` ${menuopen === true ? "SideBar clicked":"SideBar"}`}>
      {menuopen === true ?        <p className="menuBar" ><img onClick={()=>{ShowLinks()}} className="menu mb-4" src="/icons/icons8-menu-50.png"/></p>
:''}
      <div className="favIcone">
       <span><img src="/icons/favicon.ico" /></span> 
       <h1 className="ms-3">
       Snapgram
        </h1>
        </div>
      

      <div className="UserSetting mt-4">
      
      <div>
      <div className=" sideBtn">
          
            <span>
              <img className="me-3" style={{ maxWidth:"30px"}} src="/icons/profile-placeholder.svg" />
            </span>
            <h3>
            <NavLink className={menuopen === true? "show":""}>Profile</NavLink>
          </h3>
        </div>
      
        <div className="sideBtn">
          
            <span>
              <img className="me-3" style={{maxWidth:"35px"}}  src="/icons/home.svg" />
            </span>
            <h3>
           <NavLink className={menuopen === true? "show":""}>Home</NavLink>
          </h3>
        </div>

        <div className="sideBtn">
        
            <span>
              <img className="me-3" style={{maxWidth:"35px"}} src="/icons/posts.svg" />
            </span>
            <h3>
            <NavLink className={menuopen === true? "show":""}>Explore</NavLink>
          </h3>
        </div>

         
        <div className="sideBtn"> 
          
            <span>
              <img className="me-3" src="/icons/people.svg" />
            </span>
            <h3>
            <NavLink className={menuopen === true? "show":""}>People</NavLink>
          </h3>
        </div>

        
      
        <div className="sideBtn">
          
            <span>
              <img className="me-3" style={{maxWidth:"35px"}} src="/icons/save.svg" />
            </span>
            <h3>
            <NavLink className={menuopen === true? "show":""}>Saved</NavLink>
          </h3>
        </div>


        <div className="sideBtn">
          
            <span>
              <img className="me-3" style={{maxWidth:"35px"}} src="/icons/posts.svg" />
            </span>
            <h3>
            <button data-bs-toggle="modal" data-bs-target="#myModal" className={menuopen === true? "show buttonsmodals":"buttonsmodals"}>Creat Post</button>
          </h3>
        </div>
        </div>

<div className="Logout">

        <div className="sideBtn">
          <h3>
            <span>
              <img className="me-3" style={{maxWidth:"35px"}} src="/icons/logout.svg" />
            </span>
            <NavLink onClick={()=>{logout()}} className={menuopen === true? "show":""}>LogOut</NavLink>
          </h3>
        </div>
</div>


      </div>
      <NewPost id={"myModal"}/>
    </div>

    </div>

  );
};

export default SideBar;
