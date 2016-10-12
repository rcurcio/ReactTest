import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';

class Home extends Component {
    getInitialState() {
        return {
            createGame: false
        };
    }

    getScheduledGames() {
        var availableGames = [];
        for (var i = 0; i < 25; i++) {
            availableGames.push(
                <tr key={i}>
                    <td>butterandscotch</td>
                    <td>Monday 10/10/16 5:00 PM PST</td>
                    <td>Black Ops 3</td>
                    <td>Hardpoint</td>
                    <td>NA</td>
                    <td>5/8</td>
                    <td><Button bsStyle='primary'> Accept </Button></td>
                </tr>
            );

        }
        return availableGames;
    }
    
    displayTable() {
        return (
             <Table responsive condensed>
                    <thead>
                        <tr>
                            <th>Gamertag</th>
                            <th>Scheduled Time</th>
                            <th>Game</th>
                            <th>Game Type</th>
                            <th>Region</th>
                            <th>Total Players</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getScheduledGames()}
                    </tbody>
               </Table>
        );
    }

    handleCreateGame() {
        this.setState({createGame: false});
    }

    render() {
        return (
            <div className='row'>
                <div className='col-md-2'>
                    {!this.createGame ? 
                    <Button bsStyle='primary' onClick={this.handleCreateGame}> Create Game </Button> 
                    : <Button bsStyle='primary'> Cancel </Button>
                    }
                </div>
                <div className='col-md-10'>
                    {this.displayTable()}    
                </div>
            </div>
        );
    }
}

export default Home;
