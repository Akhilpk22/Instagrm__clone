import React, { useState } from "react";
import Post from "../posts/Post";
import "./Timeline.css";
import Sugesstion from "../sugesstion/Sugesstion";


function Timeline() {
  const [item, setite,] = useState([
    {
      user: "Black Warden",
      postImage:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      likes: 54,
      timestamp: "6h",
    },
    {
      user: "johndoe",
      postImage:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
      likes: 432,
      timestamp: "1d",
    },
    {
      user: "mariussss",
      postImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      likes: 140,
      timestamp: "4d",
    },
    {
      user: "Lil Cutie",
      postImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXaB-YgaU_Q1SBzXgmflu383PD7dxRcK1q-g&usqp=CAU",
      likes: 14,
      timestamp: "33d",
    },
    {
      user: "redian_",
      postImage:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      likes: 54,
      timestamp: "2h",
    },
    {
      user: "Pink Loveheart",
      postImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2V-iGRlhZmRUOr0EWVfAGUmJDJUJcjCLrnA&usqp=CAU",
      likes: 140,
      timestamp: "2d",
    },
  ]);
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__post">
          {item.map((post)=>(
            <Post
             user={post.user}
             postImage={post.postImage}
             likes={post.likes}
             timestamp={post.timestamp}

            />
          ))
            
          }
        </div>
      </div>
      <div className="timeline__right">
        <Sugesstion />
      </div>
    </div>
  );
}

export default Timeline;
