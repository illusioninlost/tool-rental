import React, { Component } from 'react';
import './App.css';
import Head from './components/head';
import Motto from './components/motto';
import Tools from './containers/tools';
import Footer from './components/footer';

class App extends Component {


  render() {

    return (
      <div className="App">
        <Head />
        <Motto />
        <div className="cart">
          Cart side bar items should pop out after clicking
        </div>
        <Tools />
       <Footer />
      </div>

    );
  }
}



export default App;
