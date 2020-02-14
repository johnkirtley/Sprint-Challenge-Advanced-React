import React from 'react';
import axios from 'axios';


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
                <h2 data-testid="players-header">Players</h2>
                <div data-testid="player-container">
                    {this.state.data.map(player => {
                        return (
                            <div key={player.id} data-testid="player-id">
                                <h2>{player.name}</h2>
                                <p>{player.country}</p>
                                <p>{player.searches}</p>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }
}

export default PlayerList;