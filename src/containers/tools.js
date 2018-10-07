import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchTools} from '../actions/toolActions'

class Tools extends Component { 
   

    componentDidMount(){
        this.props.fetchTools()
    }

    render() {
        debugger
        return(
            <div>
                
            </div>
        )
    }
    
   
    

}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchTools: fetchTools,
  }, dispatch)
}


const mapStateToProps = state => {

  return { tools: state.tools };
}

export default connect(mapStateToProps,mapDispatchToProps)(Tools)

