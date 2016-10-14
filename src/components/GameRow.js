import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class GameRow extends Component {

    constructor(props) {
        super(props)
        this.state = {
            gamertag: this.props.gamertag,
            time: this.props.time,
            game: this.props.game,
            gameType: this.props.gameType,
            playerCount: this.props.playerCount
        };
    }

    handleAcceptGameClick() {
        console.log('Game Accepted');
    }

    render () {
        return (
            <tr>
                <td>{this.state.gamertag}</td>
                <td>{this.state.time}</td>
                <td>{this.state.game}</td>
                <td>{this.state.gameType}</td>
                <td>{this.state.playerCount}</td>
                <td><Button bsStyle='primary' onClick={this.handleAcceptGameClick.bind(this)}> Accept </Button></td>
            </tr>

    
        );


    }
};

GameRow.propTypes = {
    gamertag: React.PropTypes.string,
    time: React.PropTypes.string,
    game: React.PropTypes.string,
    gameType: React.PropTypes.string,
    playerCount: React.PropTypes.string
};

export default GameRow;
