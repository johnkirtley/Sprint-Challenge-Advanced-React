import { useState } from 'react'

const useLocalStorage = (key, initialValue = '') => {
    const [localStorage, setLocalStorage] = useState(() => {
        const item = window.localStorage.getItem(key);

        return item ? JSON.parse(item) : initialValue
    })

    const setValue = (value) => {
        setLocalStorage(value);
        window.localStorage.setItem(key, JSON.stringify(value))
    };

    return [localStorage, setValue]
}

export default useLocalStorage;

