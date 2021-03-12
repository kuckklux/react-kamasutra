import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
   return <div>
      My posts

        <textarea name="" id="" cols="30" rows="1"></textarea>
        <button>Add post</button>
        <button>Remove</button>
        <div className={s.posts}>
              <Post message = 'Поздравляю, ТЫ ТОЛЬКО ЧТО ГРАНАТУ.' likecounts = '10'/>
              <Post message = 'Только что что?' likecounts = '15'/>
              <Post message = 'Гранату, ясное дело.'/>
              <Post message = 'Что гранату?'/>
              <Post message = 'Только что.'/>
              <Post message = 'Что только что?'/>
              <Post message = 'Гранату.'/>
              <Post message = 'Что гранату?'/>
              <Post message = 'Только что.'/>
        </div>
    </div>
}

export default MyPosts;