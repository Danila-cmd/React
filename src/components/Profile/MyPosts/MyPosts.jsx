import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"addPost"} component={Textarea}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const MyPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);
window.props = [];

const MyPosts = React.memo(props => {
    console.log("RENDER yo");

    let postsElements =
        props.postsData.map(p => <Post message={p.post} likesCount={p.likesCount}/>)

    let addNewPost = (values) => {
        props.addPost((values.addPost));
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <MyPostFormRedux onSubmit={addNewPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
});

export default MyPosts;