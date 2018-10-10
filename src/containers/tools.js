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
       
         {this.props.myTools.map((t)=> {
             {console.log(t)}
             return(
         <img className="toolpic" src={t.url} />
             )
         })}
        
           
          

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

  return { myTools: state.tools.tools};
}

export default connect(mapStateToProps,mapDispatchToProps)(Tools)

