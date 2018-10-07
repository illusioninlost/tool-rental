import React, { Component } from 'react';

import './App.css';

import Head from './components/head';
import Motto from './components/motto';
import Tools from './containers/tools';


class App extends Component {
  

  render() {
  
    return (
      <div className="App">
        <Head/>
        <Motto/>
      
        
        <div className="cart">
        Cart side bar items should pop out after clicking 
        </div>
        <Tools/>
       
        <hr/>
        <footer className="page-footer font-small blue">
        <div className="footer-copyright text-center py-3">© 2018 Copyright Tool Rental</div>
        </footer>


      </div>

    );
  }
}



export default App;
