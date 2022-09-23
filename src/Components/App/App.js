import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
// import './App.css';

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)


  const [item, setItems] = React.useState(initialValue);



  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;


        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }


        setItems(parsedItem)
        setLoading(false);
      } catch (error) {
        setError(error)
      }

    }, 1000)
  });


  const saveItems = (newItems) => {

    try {
      const stringifiedItems = JSON.stringify(newItems);
      localStorage.setItem(itemName, stringifiedItems);
      setItems(newItems);
    } catch (error) {
      setError(error)
    }
  }


  return {
    item,
    saveItems,
    loading,
    error,
  };


}

function App() {

  const { item: todos, saveItems: saveTodos, loading, error } = useLocalStorage('TODOS_V1', [])


  const [searchValue, setSearchValue] = React.useState('');


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
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];

    if (newTodos[todoIndex].completed) {
      newTodos[todoIndex].completed = false
    } else {
      newTodos[todoIndex].completed = true;
    }

    saveTodos(newTodos)
  }


  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);


    saveTodos(newTodos)
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

      <CreateTodoButton />
    </>
  );
}

export default App;