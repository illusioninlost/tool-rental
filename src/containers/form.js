import React, { Component } from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {saveTool} from '../actions/toolActions'
import {Redirect} from 'react-router'

class toolForm extends Component {

    state = {
        toolName: '',
        toolDescription: '',
        toolPrice: 0,
        toolImage: '',
        errors: {},
        loading: false
    }

    handleOnChange = (event) => {
        this.setState({ [event.target.name]: event.target })

    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        let errors = {}
        if (this.state.toolName === '') errors.toolName = "Can't be empty";
        if (this.state.toolDescription === '') errors.toolDescription = "Can't be empty";
        if (this.state.toolPrice === '') errors.toolPrice = "Has to be a number value";
        if (this.state.toolImage === '') errors.toolImage = "Can't be empty";
        this.setState({ errors });
        const isValid = Object.keys(errors).length === 0;

        if (isValid) {
            const { toolName, toolDescription, toolPrice, toolImage } = this.state;
            this.props.saveTool({toolName,toolDescription,toolPrice,toolImage})
            this.setState({ loading: true });
        }

    }


    render() {

        const form = ( <form className={classnames('ui', 'form', { loading: this.state.loading })} onSubmit={this.handleOnSubmit}>
        <h1> Place Tool Ad </h1>

        <div className={classnames('field', { error: !!this.state.errors.toolName })}>
            <label htmlFor="toolName">Name:</label>
            <input type="text" name="toolName" value={this.state.toolName.value} onChange={this.handleOnChange} />
        </div><span>{this.state.errors.toolName}</span>

        <div className={classnames('field', { error: !!this.state.errors.toolDescription })}>
            <label htmlFor="toolDescription">Description:</label>
            <input type="text" name="toolDescription" value={this.state.toolDescription.value} onChange={this.handleOnChange} />
        </div><span>{this.state.errors.toolDescription}</span>

        <div className={classnames('field', { error: !!this.state.errors.toolPrice })}>
            <label htmlFor="toolPrice"> Price per hour:</label>
            <input type="number" step="0.01" name="toolPrice" value={this.state.toolPrice.value} onChange={this.handleOnChange} />
        </div><span>{this.state.errors.toolPrice}</span>

        <div className={classnames('field', { error: !!this.state.errors.toolImage })}>
            <label htmlFor="toolImage">URL:</label>
            <input type="text" name="toolImage" value={this.state.toolImage.value} onChange={this.handleOnChange} />
        </div><span>{this.state.errors.toolImage}</span>

        <div className="field">
            {this.state.toolImage.value !== '' && <img src={this.state.toolImage.value} alt="toolImage" className="ui small bordered image" />}
        </div>

        <div className="field">
            <button className="ui primary button"> Save </button>
        </div>

    </form>)

        return (<div>
            {this.state.loading ? < Redirect to="/"/> : form}
           
        </div>
        )
    }
}



export default connect(null, { saveTool })(toolForm);
