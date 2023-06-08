import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext/TodoContext';

function CreateTodoButton() {

    const {setOpenModal, openModal} = React.useContext(TodoContext)

    const click = () => {

        setOpenModal(state => !state)

    }

    const isOpen = openModal ? "open":"";
    return (
        <button
            className={`CreateTodoButton ${isOpen}`}
            onClick={click}
        >+</button>
    );
}

export { CreateTodoButton };