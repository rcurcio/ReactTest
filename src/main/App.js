import React, { Component } from 'react';
import Mast from './Mast.js';
import '../css/App.css';

class App extends Component {
  render() {
    return (
        <div className='row'>
            <Mast />
            <div className='row'>
                <div className='col-lg-1 col-xs-1'></div>
                <div className='col-lg-10 col-xs-10'>
                    {this.props.children}
                </div>
                <div className='col-lg-1 col-xs-1'></div>
            </div>
        </div>
    );
  }
}

export default App;
