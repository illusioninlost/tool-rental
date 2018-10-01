import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import {connect} from 'react-redux';
import './App.css';
import {bindActionCreators} from 'redux';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul>
          <h1 className="App-title">Header</h1>
          <li>link later</li>
          </ul>
        </header>
      <div>Tools to rent. Save time and money. &#128296;</div>
      <br/>
      <br/>
      <br/>
      <br/>
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
