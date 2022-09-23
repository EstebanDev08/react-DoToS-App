import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
// import './App.css';

const stodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALAA', completed: false },
];

function App() {

  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(stodos);

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  let searcedtodos = [];

  if (searchValue.length <= 0) {
    searcedtodos = todos
  } else {

    searcedtodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()

      return todoText.includes(searchText)

    })

  }

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text == text);

    const newTodos = [...todos];

    if (newTodos[todoIndex].completed) {
      newTodos[todoIndex].completed = false
    } else {
      newTodos[todoIndex].completed = true;
    }

    setTodos(newTodos)
  }


  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text == text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);


    setTodos(newTodos)
  }

  return (
    <>
      <TodoCounter
        total={totalTodos}

        completed={completedTodos}

      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
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

      <CreateTodoButton />
    </>
  );
}

export default App;