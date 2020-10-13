import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <img src="https://i.ucrazy.ru/files/i/2013.3.31/1364704553_z26.jpg"></img>
      {props.message}
      <div>
        <span>like </span>{props.likesCount}
      </div>
    </div>
  )
}

export default Post;