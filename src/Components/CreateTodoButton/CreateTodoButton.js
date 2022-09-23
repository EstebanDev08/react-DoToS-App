import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal }) {

    const click = () => {

        setOpenModal(state => !state)

    }


    return (
        <button
            className="CreateTodoButton"
            onClick={click}
        >+</button>
    );
}

export { CreateTodoButton };