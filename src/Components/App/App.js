import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoProvider } from '../TodoContext/TodoContext'
import { TodoContext } from '../TodoContext/TodoContext';
import { Modal } from '../Modal/Modal'


 import './App.css';



function App() {



  return (
    <TodoProvider>

      <TodoContext.Consumer>
        {({ loading,
          error,
          totalTodos,
          completedTodos,
          searchValue,
          setSearchValue,
          searcedtodos,
          completeTodos,
          deleteTodos,
          openModal,
          setOpenModal, }) => (

          <>

            <TodoCounter
              completed={completedTodos}
              total={totalTodos}

            />
            <TodoSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />

            <TodoList>
              {loading && <p>cargandoooo</p>}
              {error && <p>error list</p>}
              {(!loading && !searcedtodos.length) && <p>crea todo</p>}


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

            {openModal && (<Modal>
              <p>hola</p>
            </Modal>)}

            <CreateTodoButton
              setOpenModal={setOpenModal}

            />
          </>


        )}
      </TodoContext.Consumer>


    </TodoProvider>
  );
}

export default App;