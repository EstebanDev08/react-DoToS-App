import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoProvider } from '../TodoContext/TodoContext'
import { TodoContext } from '../TodoContext/TodoContext';
import { LoadingTodos } from '../LoadingTodos/LoadingTodos';
import { Modal } from '../Modal/Modal'


 import './App.css';
import { NoTodos } from '../NoTodos/NoTodos';
import { TodoForm } from '../TodoForm/TodoForm';



function App() {

  

  return (
    <TodoProvider>


      <TodoCounter/>

      <TodoSearch/>


      <TodoContext.Consumer>
        {({ loading,
          error,
          searcedtodos,
          completeTodos,
          deleteTodos,
          openModal,}) => (

          <>
            <TodoList>
              {loading && <LoadingTodos/>}
              {error && <p>error list</p>} 
              {(!loading && !searcedtodos.length) && <NoTodos/>}


              {searcedtodos.map(todo => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodos(todo.text)}
                  onDelete={() => deleteTodos(todo.text)}
                />
              ))}
            </TodoList>
            
            {openModal && <Modal> <TodoForm/> </Modal>}

          </>


        )}
      </TodoContext.Consumer>


      <CreateTodoButton/>


    </TodoProvider>
  );
}

export default App;