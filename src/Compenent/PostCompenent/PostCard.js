import React, { useEffect, useState } from "react";
import "./PostCard.css";
import { baseUrl } from "../../ApiUrl";
import axios from "axios";
import TheAlert from "../TheAlert/TheAlert";

const PostCard = () => {
  const [like, setlike] = useState(false);
  const [posts, setposts] = useState([]);

  const ThePostWasLiked = () => {
    setlike(!like);
  };

  const DelletThePosts =(PostId)=>{
    const url =`${baseUrl}/posts/${PostId}`;
    const Token = localStorage.getItem("Token");
   const Header = {
        "Authorization":`Bearer${Token}`,
        "Content-Type":"multipart/form-data",
      }

    axios.delete(url,{
        headers: Header
    }).then((response)=>{
        console.log(response);
        <TheAlert Title={"Your Bosts Has Been Deleted"}/>
        return;

    })
  }

  useEffect(() => {
    axios({
      method: "get",
      url: `${baseUrl}/posts`,
    })
      .then(function (response) {
        console.log(response.data.data);
        setposts(response.data.data);
        console.log(posts);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <div className="container">
      {posts.map((post) => (
        <div class=" card container" key={post.id}>
          <div className="User_And_Time_Info">
            <img
              className="User_Img img-fluid"
              src={post.author.profile_image}
            />
            <div className="Name_and_Date">
              <h1>{post.author.username}</h1>
              <p>{post.author.created_at.slice(0, 10)}</p>
            </div>
          </div>

          <div class="Dis">
            <h5 class="card_title">{post.title}</h5>
            <p class="card_tags">{post.body}</p>
            <div className="Post_img">
              <img className="img-fluid" src={post.image} />
            </div>
          </div>

          <div className="Like_and_save">
            <h3>
              <img
                style={{ cursor: "pointer" }}
                onClick={() => {
                  ThePostWasLiked();
                }}
                src={like === true ? "/icons/liked.svg" : "/icons/like.svg"}
              />
              <span
                style={{
                  marginLeft: "8px",
                  color: "white",
                  fontWeight: "200",
                  fontSize: "20px",
                }}
              >
                0
              </span>
            </h3>
            <img src="/icons/save.svg" />
          </div>

          {post.id === post.author.id ? (
            <button 
            onClick={()=>{DelletThePosts(post.id)}}
              className="DelletPost "
              style={{
                width: "fit-content",
                background: "red",
                color: "white",
                padding: "4px",
                borderRadius: "10px",
                boxShadow: "0 0 3px white",
                border: "none",
                display: "flex",
                justifySelf: "flex-end",
              }}
            >
              Dellet
            </button>
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostCard;
