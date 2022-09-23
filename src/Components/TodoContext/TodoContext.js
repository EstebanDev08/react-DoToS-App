import React from "react";
import { useLocalStorage } from './useLocalStorage'

const TodoContext = React.createContext();

function TodoProvider(props) {


    const { item: todos, saveItems: saveTodos, loading, error } = useLocalStorage('TODOS_V1', [])

    const [searchValue, setSearchValue] = React.useState('');

    const [openModal, setOpenModal] = React.useState(false);


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
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searcedtodos,
            completeTodos,
            deleteTodos,
            openModal,
            setOpenModal,

        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }