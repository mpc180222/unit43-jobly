import React, { useState } from 'react';

const useLocalStorage = (inititalState = null) => {

const [storedItem, setStoredItem] = useState(inititalState);

    const insertStoredItem = async (val) => {
        setStoredItem(initialState => val);
        console.log('stored item', storedItem)
        localStorage.setItem('token', val);
        
    }

    const deleteStoredItem = (key) => {
        localStorage.removeItem(key);
        setStoredItem(null);
    }

return [storedItem, insertStoredItem, deleteStoredItem]
};

export default useLocalStorage;