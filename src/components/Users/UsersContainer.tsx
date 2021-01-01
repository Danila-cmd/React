import React from "react";
import { connect, useSelector } from "react-redux";
import { FilterType, follow, requestUsers, unfollow } from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers,
    getUsersFilter
} from "../../redux/users-selectors";
import { UsersType } from "../../types/types";
import { AppStateType } from "../../redux/redux-store";
import { Users } from "./Users";

type UsersPagePropsType = {
    pageTitle:string
}

export const UsersPage: React.FC<UsersPagePropsType> = (props) => {
    const isFetching = useSelector(getIsFetching);
    return <>
    <h2>{props.pageTitle}</h2>
    {isFetching ? <Preloader /> : null}
    <Users/>
</>
}
