import React from 'react';
import style from './DeleteButton.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DeleteButton = props => {
    return (
        <button className={style.deleteButton}>
            <FontAwesomeIcon icon={"trash"} onClick={props.handleOnClick}/>
        </button>
    )
};

export default DeleteButton;

