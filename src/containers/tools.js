import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Tools extends Component { 
    constuctor(){
        this.state={
            tools: []
        }
    }

    componentDidMount(){
         fetch("http://localhost:4000/tools")
        .then(response => response.json())
        .then(tools => tools)
    }

    render() {
        return(
            <div>
                Nothing
            </div>
        )
    }
    
   
    
//     const renderTools = tools.map(tool =>
//     <p key={tool.id}>${tool.price}<br/> {tool.description}</p>)
//     return(
//         <div>
//             {renderTools}
//         </div>
//     )
// }
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

export default Tools