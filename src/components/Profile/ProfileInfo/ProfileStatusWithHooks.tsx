import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "./ProfileInfo.module.css";

type PropsType = {
    status: string
    updateStatus: (status:string) => void
}

const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {


    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activatedEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }

    // let stateWithSetState = useState(false);

    // let editMode = stateWithSetState[0]; // значение
    // let setEditMode = stateWithSetState[1]; // функция которая это значение устанавливает

    return (
        <div>
            {!editMode &&
            <div>
                <b>Status :</b><span onDoubleClick={activatedEditMode}>{props.status || "----"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange}
                       autoFocus={true}
                       onBlur={deactivateEditMode}
                       value={status}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;