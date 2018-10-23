import React, { Component } from 'react';
import './App.css';
import Head from './components/head';
import Motto from './components/motto';
import Tools from './containers/tools';
import FooterPage from './components/footer';

class App extends Component {


  render() {

    return (
      <div className="App">
        <Head />
        <Motto />
        <div className="cart">
        <div style={{textAlign:'left', marginLeft:'100px', marginBottom:'1.5em', fontSize:'1.5em'}}> <b>Available:</b> </div>
        </div>
        <Tools />
       <FooterPage />
      </div>

    );
  }
}



export default App;
