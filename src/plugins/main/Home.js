import React, { Component } from 'react';
import GameTable from '../game/GameTable';

class Home extends Component {

    render() {
        return (
            <div className='row'>
                <div className='col-md-10'>
                    <GameTable />
                </div>
            </div>
        );
    }
}

export default Home;
