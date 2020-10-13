import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>
                <div className={s.item}>
                    <img src={props.avatar}/>
                    {props.name}
                </div>
            </NavLink>
        </div>
    )
}

export default DialogItem;