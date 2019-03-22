import React from 'react';
import style from './DeleteButton.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DeleteButton = props => {
    return (
        <button className={style.deleteButton} onClick={props.handleOnClick}>
            <FontAwesomeIcon icon={"trash"}/>
        </button>
    )
};

export default DeleteButton;

