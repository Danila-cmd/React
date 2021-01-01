import React from 'react';
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { maxLengthCreator, required } from '../../../../utils/validators/validators';
import { createField, GetStringKeys, Input, Textarea } from '../../../common/FormsControls/FormsControls';
import { LoginFormValuesType } from '../../../Login/Login';

type PropsType = {

}

export type AddPostFormValuesType = {
    addPost: string
}

type AddPostFormValuesKeysType = GetStringKeys<AddPostFormValuesType>;

const AddPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
            {createField<AddPostFormValuesKeysType>("Your post", "addPost", [required], Input)}
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export default reduxForm<AddPostFormValuesType, PropsType> ({form: 'profile-add-post'})(AddPostForm);