import React from 'react';
import { PostsDataType } from '../../../../types/types';
import s from './Post.module.css';

type PropsType = {
  message: string
  likesCount: number
}

const Post:React.FC<PropsType> = (props) => {

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