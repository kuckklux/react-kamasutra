import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let posts = [
    { message: "Поздравляю, ТЫ ТОЛЬКО ЧТО ГРАНАТУ.", likesCount: "10" },
    { message: "Только что что?", likesCount: "15" },
    { message: "Гранату, ясное дело." },
    { message: "Что гранату?" },
    { message: "Только что." },
    { message: "Что только что?" },
    { message: "Гранату." },
    { message: "Что гранату?" },
    { message: "Только что." },
  ];

  let postsElements = posts
  .map( p => <Post message={p.message} likesCount={p.likesCount}/>)

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea name="" id="" cols="30" rows="1"></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <button>Remove</button>

      
      { postsElements }
    </div>
  );
};

export default MyPosts;
