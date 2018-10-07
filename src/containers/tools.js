import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchTools} from '../actions/toolActions'

class Tools extends Component { 
   

    componentDidMount(){
        //  fetch("http://localhost:4000/tools")
        // .then(response => response.json())
        // .then(tools => console.log(tools))
        this.props.fetchTools()
    }

    render() {
        return(
            <div>
               {console.log(this.props)}
            </div>
        )
    }
    
   
    
//     const renderTools = 
//     return(
//         <div>
//             {renderTools}
//         </div>
//     )
// }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchTools: fetchTools,
  }, dispatch)
}


const mapStateToProps = state => {

  return { tools: state.tools };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tools)

