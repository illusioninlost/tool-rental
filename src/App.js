import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import {bindActionCreators} from 'redux';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Welcome to React</h1>
        </header>
      
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     fetchCats: fetchCats,
//   }, dispatch)
// }


// const mapStateToProps = state => {

//   return { catsPics: state.cats.pictures };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)

export default App;
