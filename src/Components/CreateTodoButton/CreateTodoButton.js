import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext/TodoContext';

function CreateTodoButton() {

    const {setOpenModal} = React.useContext(TodoContext)

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