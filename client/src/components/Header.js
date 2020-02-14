import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage'


const Header = () => {
    const [headerValue, setHeaderValue] = useLocalStorage('header', false)

    const toggle = (e) => {
        e.preventDefault();
        setHeaderValue(!headerValue);
    }

    return (
        <div>
            <h1>Women World Cup</h1>
            <button onClick={toggle} data-testid="button">Click Me</button>
        </div>
    )
}

export default Header;