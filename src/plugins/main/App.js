import React, { Component } from 'react';
import Mast from './Mast.js';
import Footer from './Footer.js';
import '../../css/App.css';

class App extends Component {
  render() {
    return (
        <div className='row' style={{width: '100%'}}>
            <Mast />
            <div className='row'>
                <div className='col-lg-1 col-xs-1'></div>
                <div className='col-lg-10 col-xs-10'>
                    {this.props.children}
                </div>
                <div className='col-lg-1 col-xs-1'></div>
            </div>
            <Footer/>
        </div>
    );
  }
}

export default App;
