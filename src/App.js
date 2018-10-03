import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { bindActionCreators } from 'redux';
import Head from './components/head';
import Motto from './containers/motto'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head/>
        <Motto/>
        <hr/>
       
        <div className="cart">
        Cart side bar items should pop out after clicking 
        </div>
        <div>Picture $10.00/hr
          Content Picture Picture</div>
        <div>Picture  Picture Picture</div>
        <div>Picture  Picture Picture</div>
        <hr/>
        <footer className="page-footer font-small blue">
        <div className="footer-copyright text-center py-3">© 2018 Copyright Tool Rental</div>
        </footer>


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
