import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchTools} from '../actions/toolActions'
import Item from '../components/item'

class Tools extends Component { 
   

    componentDidMount(){
        this.props.fetchTools()
    }

    render() {
        
        return(
            <div>
                <Item tools={this.props.myTools}/>
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
    console.log(state.tools);
  return { myTools: state.tools};
}

export default connect(mapStateToProps,mapDispatchToProps)(Tools)

