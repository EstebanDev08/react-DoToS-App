import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)


    const [item, setItems] = React.useState(initialValue);



    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    
                } else {
                   const parsedItem = JSON.parse(localStorageItem)
                    setItems(parsedItem)
                }
         
                setLoading(false);
            } catch (error) {
                setError(true)
                setLoading(false);
            }

        }, 2000)
    }, [itemName, initialValue]);


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

export { useLocalStorage }