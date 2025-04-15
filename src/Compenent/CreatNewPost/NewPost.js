import React, { useReducer, useRef } from "react";
import "./NewPost.css";
import axios from "axios";
import { baseUrl } from "../../ApiUrl";
import TheAlert from "../TheAlert/TheAlert";
const NewPost = ({ id }) => {
const title = useRef(null);
const Dis = useRef(null);
const img = useRef(null);


const CreatNewPost=()=>{
const Token = localStorage.getItem("Token");

let form = new FormData();
form.append("body",Dis.current.value);
form.append("title",title.current.value);
form.append("image",img.current.files[0]);
const url = `${baseUrl}/posts`;

axios.post(url,form,{
  headers:{
    "Authorization":`Bearer${Token}`,
    "Content-Type":"multipart/form-data",
  }
}).then((response)=>{
console.log(response);
}).catch((error)=>{
  <TheAlert Title={error}/>
})

}



  return (
    <div className="container">
      <div class="modal fade" id={id} tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Creat New Post</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form class="modal-body">
              <div className="TitleInput">
                <input
                  ref={title}
                  placeholder="Enter Your Title"
                  style={{ maxWidth: "80%" }}
                />
              </div>

              <div className="TagsInput">
                <input
                  value={Dis}
                  placeholder="Enter Your Discreption"
                  style={{ maxWidth: "80%" }}
                />

              </div>
              <div>
              <input ref={img} placeholder="inter your img" type="file"/>
              </div>
            </form>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button onClick={()=>{CreatNewPost()}} type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
