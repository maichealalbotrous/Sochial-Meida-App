import React from 'react';
import './HomePage.css';
import SideBar from '../../Compenent/SideBar/SideBar';
import PostCard from '../../Compenent/PostCompenent/PostCard';
const HomePage = () => {
    return (
        <div style={{display:"flex",justifyContent:"space-between" }}>

       <div className='me-2 col-lg-2 col-md-1 col-sm-1'>
        <SideBar/>
        </div>

        <div className=' container col-lg-8 col-md-10 col-sm-10'>
       <PostCard/>
        </div>

        

        </div>
    );
}

export default HomePage;
