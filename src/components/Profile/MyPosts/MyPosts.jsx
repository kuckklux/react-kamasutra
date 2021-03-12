import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
   return <div>
      My posts

        <textarea name="" id="" cols="30" rows="1"></textarea>
        <button>Add post</button>
        <button>Remove</button>
        <div className={s.posts}>
              <Post/>
              <Post/>
              <Post/>
              <Post/>
              <Post/>
              <Post/>
        </div>
    </div>
}

export default MyPosts;