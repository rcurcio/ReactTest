import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import GameRow from './GameRow';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FormControl, Button, Modal } from 'react-bootstrap';
import ReactDOM from 'react-dom';

import {
    getMatches,
    addMatch
} from '../../shared/dux/GameDux';

class GameTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            createGame: false,
        };
    }

    componentDidMount () {
        this.props.getMatches();
    }

    toggleCreateGame = () => {
        this.setState({createGame: !this.state.createGame});
    }

    createMatch = () => {
        this.setState({createGame: !this.state.createGame});
    }

    addGame = () => {

        // Is there a better way to do this? Calling refs touches memory, so I don't think it is non-performant,
        // but it seems so wrong. We can do event handling but that seems tedious as we would need handlers for each
        // field I would think.

        console.log(this.refs.gamertag);

        let gameTime = new Date().toLocaleTimeString();

        let gameDetails = {
            gamertag: ReactDOM.findDOMNode(this.refs.gamertag).value,
            game: ReactDOM.findDOMNode(this.refs.game).value,
            gameType: ReactDOM.findDOMNode(this.refs.gameType).value,
            playerCount: "5/8",
        };

        gameDetails.time = gameTime;

        this.props.addMatch(gameDetails);
        this.props.getMatches();
        this.toggleCreateGame();
        console.log('Game created.');
    };

    getScheduledGames () {
        var availableGames = this.props.game.matches;
        var rows = [];
        rows = availableGames.map(function(gameInfo, key) {
            return (
                <GameRow
                    key={key}
                    gamertag={gameInfo.gamertag}
                    time={gameInfo.time}
                    game={gameInfo.game}
                    gameType={gameInfo.gameType}
                    playerCount={gameInfo.playerCount}
                />
            );
        });

        return rows;
    }

    buildAddGamePanel = () => {
        return (
            <Modal show={this.state.createGame} onHide={this.toggleCreateGame}>
                <Modal.Header closeButton>
                    <Modal.Title> Add Game </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p> Gamertag <FormControl ref="gamertag" placeholder="Gamertag" /> </p>
                    <p>
                        <FormControl componentClass="select" placeholder="Game" ref="game">
                            <option value="Black Ops 3">Black Ops 3</option>
                            <option value="Infinite Warfare">Infinite Warfare</option>
                        </FormControl>
                    </p>
                    <p>
                        <FormControl componentClass="select" placeholder="Mode" ref="gameType" >
                            <option value="TDM">TDM</option>
                            <option value="DOM">DOM</option>
                            <option value="FFA">FFA</option>
                            <option value="S&D">S&D</option>
                            <option value="Hardpoint">Hardpoint</option>
                        </FormControl>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.addGame}>Submit</Button>
                </Modal.Footer>
            </Modal>
        );
    };
    
    render() {
        return (
            <div>
                {this.buildAddGamePanel()}

                <div style={{float: 'right'}}>
                    {!this.createGame ?
                    <Button bsStyle='primary' onClick={this.toggleCreateGame}> Create Game </Button>
                    : <Button bsStyle='primary'> Cancel </Button>
                    }
                </div>
                <div style={{paddingTop: 50}}>
                    <Table responsive condensed striped hover>
                        <thead>
                            <tr>
                                <th>Gamertag</th>
                                <th>Scheduled Time</th>
                                <th>Game</th>
                                <th>Game Type</th>
                                <th>Total Players</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.getScheduledGames()}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

GameTable.propTypes = {
    availableGames: React.PropTypes.array
};

const mapStoreToProps = store => {
    return {
        game: store.game,
    };
};

const mapActionsToProps = dispatch => {
    return bindActionCreators({
        getMatches,
        addMatch}, dispatch);
};

export default connect(mapStoreToProps, mapActionsToProps)(GameTable);
