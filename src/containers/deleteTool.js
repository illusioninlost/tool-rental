import React, {Component} from 'react';
import {Redirect} from 'react-router';
import { connect } from 'react-redux';
import { removeTool } from '../actions/toolActions';

class deleteTool extends Component {

    state = {
        loading: false,
    }

    componentDidMount() {
        this.props.removeTool({id:this.props.match.params.id})
        this.setState({loading:true})
    }

    render() {
        return(
            <div>
               {this.state.loading ? < Redirect to="/"/> : "Error prevented deletion of tool"}
            </div>
        )
    }
}

export default connect(null, {removeTool})(deleteTool);

