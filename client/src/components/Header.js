import React, { useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import Styled from 'styled-components';

const Container = Styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
`

const Title = Styled.h1`
font-size: 5rem;
`

const Button = Styled.button`
font-size: 3rem;
border: 1px solid black;
background-color: lightGrey;
border-radius: 7px;
`


const Header = () => {
    const [headerValue, setHeaderValue] = useLocalStorage('header', false)

    const toggle = (e) => {
        e.preventDefault();
        setHeaderValue(!headerValue);
    }

    useEffect(() => {
        if (headerValue === true) {
            document.body.classList.add('new-background');
        } else {
            document.body.classList.remove('new-background')
        }
    }, [headerValue])



    return (
        <Container>
            <Title>Women's World Cup</Title>
            <Button onClick={toggle} data-testid="button">Click Me</Button>
        </Container>
    )
}

export default Header;