import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import AddPostForm from './AddPostForm/AddPostForm';
import { AddPostFormValuesType } from './AddPostForm/AddPostForm';
import { PostsDataType } from '../../../types/types';

export type MapPropsType = {
    posts: Array<PostsDataType>
    
}
export type DispatchPropsType = {
    addPost: (addPost:string) => void
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = props => {

    let postsElements =
        [...props.posts]
            .reverse()
            .map(p => <Post key={p.id} message={p.post} likesCount={p.likesCount} />)


    let addNewPost = (values:AddPostFormValuesType) => {
        props.addPost((values.addPost));
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostForm onSubmit={addNewPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const MyPostsMemorized = React.memo(MyPosts);

export default MyPostsMemorized;