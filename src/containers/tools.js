import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTools } from '../actions/toolActions';
// import Item from '../components/item'
// import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import toolForm from './form'
// import ToolsList from './ToolsList';





class Tools extends Component {

    // constructor(){
    //     super()

    //     this.state = {
    //         count: 0
    //     }

    //     this.handleClick = this.handleClick.bind(this);

    // }
   


    componentDidMount() {
        if(this.props.myTools.length < 1){
        this.props.fetchTools()};
    }

    // handleClick() {
    //     this.setState(
    //       {count: this.state.count = this.state.count + 1}
    //     )
    // }

   
    render() {

        const emptyMessage = (
            <p> There are no tools to rent at this time. Please try again or post one. </p>
        )
        const resize = {fontSize:30, margin:0}
        const description = {fontSize:20, color: '#8f8762'}
        const price = {fontSize:25}
     
       
      
    
        const toolsList = (
            <div className="ui three cards" >
                {this.props.myTools.map(tool =>   
                
                <div className="ui card">
                <div>
                    <img src={tool.url} alt={tool.name} className="toolpic thumbnail" />
                </div>
                <p style={resize}>{tool.name}</p>
                <p style={description}>{tool.description}</p>
                <p style={price}>&#36;{tool.price}&#47;hour<span></span> </p>
                <p><button onClick={this.handleClick}>{tool.like}</button></p>

                <div className="ui two buttons">
                    <Link to={`tools/${tool.id}`} className="ui basic button green"> Edit </Link>
                    <Link to={`tools/${tool.id}/delete`} className="ui basic button red"> Delete </Link>

                </div>
    
            </div>)}
            </div>
        )

        return (
            <div>
                 <div>
                {this.props.myTools.length === 0 ? emptyMessage : toolsList}
            </div>

                <Link to="/tools/new" className="add">Place New Tool AD</Link>


            </div>

        )
    }




}

const mapDispatchToProps = {
    fetchTools
}




const mapStateToProps = state => {

    return { myTools: state.tools.tools };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tools)

