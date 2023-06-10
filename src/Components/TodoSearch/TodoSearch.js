import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext/TodoContext';

function TodoSearch() {

    const { searchValue, setSearchValue } = React.useContext(TodoContext)

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);

        
    }

    
    return (
        <>
            <input
                className="TodoSearch"
                placeholder="Encontrar ToDos"
                value={searchValue}
                onChange={onSearchValueChange} />

        </>

    );




}

export { TodoSearch };