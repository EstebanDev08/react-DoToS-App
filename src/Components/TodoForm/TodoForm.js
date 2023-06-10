import React from "react";
import "./TodoForm.css"
import { TodoContext } from "../TodoContext/TodoContext";

function TodoForm (){

    const {setOpenModal, saveTodos, todos} = React.useContext(TodoContext);

    const closeModal = ()=>{
        setOpenModal(state => !state)
    }

    const addTodo = (event)=>{
        event.preventDefault()

        const newTodos = [...todos]

        const newTodo = {
            text: event.target[0].value,
            completed : false,
        }
        console.log(newTodos);
        newTodos.push(newTodo);
        
        saveTodos(newTodos);

        closeModal();

    }

    return (
        <form className="modal-content" onSubmit={(event)=>addTodo(event)}>
            <h2>Agregar Todo</h2>
            <input type="text" id="todoInput" placeholder="Ingrese su todo"/>
            <div className="modal-actions">
                <button type="submit" id="addTodoBtn" className="btn btn-add">Agregar</button>
                <button  id="cancelBtn" onClick={closeModal} className="btn btn-cancel">Cancelar</button>
            </div>
         </form>
    );
}


export {TodoForm}