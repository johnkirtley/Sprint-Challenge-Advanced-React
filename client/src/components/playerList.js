import React from 'react';
import axios from 'axios';
import Styled from 'styled-components';

const Container = Styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
`

const Header = Styled.h2`
text-align: center;
font-size: 3rem;
`

const Card = Styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;

border: 1px solid black;
margin: 2% auto;
padding: 5%;

width: 12rem;
background-color: papayawhip;

`


class PlayerList extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        axios
            .get(`http://localhost:5000/api/players`)
            .then(res => {
                this.setState({
                    data: res.data,
                })
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <>
                <Header data-testid="players-header">Players</Header>
                <Container data-testid="player-container">
                    {this.state.data.map(player => {
                        return (
                            <Card key={player.id} data-testid="player-id">
                                <h2 data-testid="player-name">{player.name}</h2>
                                <p>{player.country}</p>
                                <p>{player.searches}</p>
                            </Card>
                        )
                    })}
                </Container>
            </>
        )
    }
}

export default PlayerList;