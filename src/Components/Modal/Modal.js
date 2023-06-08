import React from 'react';
import ReactDOM from "react-dom";
import "./Modal.css"

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className='modal-brackgraund'>
            
            <div className="modal-content">
                <h2>Agregar Todo</h2>
                <input type="text" id="todoInput" placeholder="Ingrese su todo"/>
                <div className="modal-actions">
                    <button id="addTodoBtn" className="btn btn-add">Agregar</button>
                    <button id="cancelBtn" className="btn btn-cancel">Cancelar</button>
                </div>
             </div>
            
        </div>,

        document.getElementById('modal')
    );
}

export { Modal }