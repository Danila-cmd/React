import { profileAPI } from "../api/profile-api";
import { usersAPI } from "../api/users-api";
import {FormAction, stopSubmit} from "redux-form";
import { PhotosType, PostsDataType, ProfileType } from "../types/types";
import { BaseThunkType, InferActionsTypes } from "./redux-store";

let initialState = {
    postsData: [
        {id: 1, post: 'Hello', likesCount: 15},
        {id: 2, post: 'How is your level?', likesCount: 9},
        {id: 3, post: 'Hey!!!', likesCount: 51}
    ] as Array<PostsDataType>,
    profile: null as ProfileType | null,
    status: "",
};

const profileReducer = (state = initialState, action:ActionsType): InitialStateType => {

    switch (action.type) {
        case 'SN/PROFILE/ADD-POST': {

            let newPost = {
                id: 5,
                post: action.addPost,
                likesCount: 0
            };

            return {
                ...state,
                postsData: [...state.postsData, newPost],
            };
        }
        case 'SN/PROFILE/SET_USER_PROFILE': {

            return {...state, profile: action.profile};
        }

        case 'SN/PROFILE/SET_STATUS': {

            return {...state, status: action.status};
        }

        case 'SN/PROFILE/DELETE_POST_BY_ID': {

            return {...state, postsData: state.postsData.filter(p => p.id != action.id)};
        }

        case 'SN/PROFILE/SAVE_PHOTO_SUCCESS': {

            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType};
        }

        default:
            return state;
    }
}

export const actions = {
    addPostActionCreator: (addPost: string) => ({type: 'SN/PROFILE/ADD-POST', addPost} as const),
    setUserProfile: (profile: ProfileType) => ({type: 'SN/PROFILE/SET_USER_PROFILE', profile} as const),
    setStatus: (status:string) => ({type: 'SN/PROFILE/SET_STATUS', status} as const),
    deletePostById: (id:number) => ({type: 'SN/PROFILE/DELETE_POST_BY_ID', id} as const),
    savePhotoSuccess: (photos : PhotosType) => ({type: 'SN/PROFILE/SAVE_PHOTO_SUCCESS', photos} as const)
}

export const getProfile = (userId:number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data));
}

export const getStatus = (userId:number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(actions.setStatus(data));
}

export const updateStatus = (status:string): ThunkType => async (dispatch) => {
    let data = await profileAPI.updateStatus(status);

    if (data.resultCode === 0) {
        dispatch(actions.setStatus(status));
    }

}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    let data = await profileAPI.savePhoto(file);

    if (data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(data.data.photos));
    }

}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {

    const userId = getState().auth.userId;
    const data = await profileAPI.saveProfile(profile);

    if (data.resultCode === 0) {
        if (userId != null){
            dispatch(getProfile(userId));
        }else{
            throw new Error("UserId cannot be null");
        }
    }
    else {
        let wrongNetwork = data.messages[0]
            .slice(
                data.messages[0].indexOf(">") + 1,
                data.messages[0].indexOf(")")
            )
            .toLocaleLowerCase();
        dispatch(
            stopSubmit("edit-profile", {
                contacts: {[wrongNetwork]: data.messages[0]}
            })
        );
        return Promise.reject(data.messages[0]);
    }

}

export default profileReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsType | FormAction>;
