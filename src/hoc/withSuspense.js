import React, {Suspense} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

export const withSuspense = (Component) => {
    return (props) => {
        return <Suspense fallback={<div>Загрузка...</div>}>
            <Component{...props}/>
        </Suspense>
    };
}