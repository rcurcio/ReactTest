import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import GameTable from '../../components/GameTable';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            createGame: false,
            allGames: []
        };
    }

    handleCreateGame() {
        this.setState({createGame: false});
    }

    getScheduledGames() {
        var availableGames = [];
        var gameTime = new Date().toLocaleTimeString();
        for (var i = 0; i < 25; i++) {
            var gameDetails = {
                gamertag: "butterandscotch",
                game: "Black Ops 3",
                gameType: "Hardpoint",
                playerCount: "5/8"
            };
            console.log(typeof gameTime);
            gameDetails.time = gameTime;
            availableGames.push(gameDetails);
        }

        return availableGames;
    } 

    render() {
        this.allGames = this.getScheduledGames();
        return (
            <div className='row'>
                <div className='col-md-2'>
                    {!this.createGame ? 
                    <Button bsStyle='primary' onClick={this.handleCreateGame}> Create Game </Button> 
                    : <Button bsStyle='primary'> Cancel </Button>
                    }
                </div>
                <div className='col-md-10'>
                    <GameTable availableGames={this.allGames}/>
                </div>
            </div>
        );
    }
}

export default Home;
