import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTools } from '../actions/toolActions';
// import Item from '../components/item'
// import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
// import toolForm from './form'
import ToolsList from './ToolsList';



class Tools extends Component {

    constructor(){
        super()

        this.state = {
            count: 0
        }

        this.handleClick = this.handleClick.bind(this);

    }
   


    componentDidMount() {
        if(this.props.myTools.length < 1){
        this.props.fetchTools()};
    }

    handleClick() {
        this.setState(
          {count: this.state.count = this.state.count + 1}
        )
    }

   
    render() {

        return (
            <div>
                <ToolsList tools={this.props.myTools} />
                <button onClick={this.handleClick}>{this.state.count}</button>

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

