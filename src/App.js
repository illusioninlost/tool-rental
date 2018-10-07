import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { bindActionCreators } from 'redux';
import Head from './components/head';
import Motto from './components/motto';
import Tools from './containers/tools';


let tools = [
  {id: 1, description: "hammer", price:"10/hr"},
  {id: 2, description: "circular saw", price:"20/hr"}
]

class App extends Component {
  
  constructor(){
    super();
    
    

    this.state={
      tools:[]
    }
  }
  //initial render then call component
  //import from actions
   componentDidMount(){
    
    fetch("http://localhost:4000/tools")
    .then(response => response.json())
    .then(tools => tools)
   }

  render() {
    return (
      <div className="App">
        <Head/>
        <Motto/>
      
        <Tools tools={tools}/>
        <div className="cart">
        Cart side bar items should pop out after clicking 
        </div>
       
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
