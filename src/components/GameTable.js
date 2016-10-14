import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import GameRow from './GameRow';

class GameTable extends Component { 

    constructor(props) {
        super(props);
    }

    getScheduledGames() {
        var availableGames = this.props.availableGames;
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
    
    render() {
        return (
            <div>
             <Table responsive condensed>
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
        );
    }
}

GameTable.propTypes = {
    availableGames: React.PropTypes.array
};

export default GameTable;
