import React from 'react';
import './HomePage.css';
import SideBar from '../../Compenent/SideBar/SideBar';
import PostCard from '../../Compenent/PostCompenent/PostCard';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <SideBar />

            <main className="main-content">
                <div className="container py-2">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            <PostCard />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default HomePage;