import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST_BY_ID = 'DELETE_POST_BY_ID';

let initialState = {
    postsData: [
        {id: 1, post: 'Hello', likesCount: 15},
        {id: 2, post: 'How is your level?', likesCount: 9},
        {id: 3, post: 'Hey!!!', likesCount: 51}
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {

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
        case SET_USER_PROFILE: {

            return {...state, profile: action.profile};
        }

        case SET_STATUS: {

            return {...state, status: action.status};
        }

        case DELETE_POST_BY_ID: {

            return {...state, postsData: state.postsData.filter(p => p.id != action.id)};
        }

        default:
            return state;
    }
}

export const addPostActionCreator = (addPost) => ({type: ADD_POST, addPost});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePostById = (id) => ({type: DELETE_POST_BY_ID, id});


export const getProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }

}

export default profileReducer;