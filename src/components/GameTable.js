import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';

class GameTable extends Component { 

    constructor(props) {
        super(props);
    }

    handleAcceptGameClick(test) {
        console.log(test);
    }

    getScheduledGames() {
        var availableGames = this.props.availableGames;
        var rows = [];
        rows = availableGames.map(function(gameInfo, key) {
            return (    
                <tr key={key}>
                    <td>{gameInfo.gamertag}</td>
                    <td>{gameInfo.time}</td>
                    <td>{gameInfo.game}</td>
                    <td>{gameInfo.gameType}</td>
                    <td>{gameInfo.playerCount}</td>
                    <td><Button bsStyle='primary' onClick={this.handleAcceptGameClick.bind(this)}> Accept </Button></td>
                </tr>
            );
        }, this);

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
