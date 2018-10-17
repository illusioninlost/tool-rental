import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { saveTool, fetchTool } from '../actions/toolActions'
import { Redirect } from 'react-router'

class editForm extends Component {

    state = {
        name: this.props.name ? this.props.name : '',
        description: this.props.description ? this.props.div : '',
        price: this.props.price ? this.props.price : 0,
        url: this.props.url ? this.props.url : '',
        errors: {},
        loading: false
    }

    handleOnChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        let errors = {}
        if (this.state.name === '') errors.name = "Can't be empty";
        if (this.state.description === '') errors.description = "Can't be empty";
        if (this.state.price === '') errors.price = "Has to be a number value";
        if (this.state.url === '') errors.url = "Can't be empty";
        this.setState({ errors });
        const isValid = Object.keys(errors).length === 0;

        if (isValid) {
            const { name, description, price, url } = this.state;
            this.props.saveTool({ name, description, price, url })
            this.setState({ loading: true });
        }

    }

    componentDidMount = () => {
        
        this.props.fetchTool(this.props.match.params.id)

    }



    render() {

        const form = (<form className={classnames('ui', 'form', { loading: this.state.loading })} onSubmit={this.handleOnSubmit}>
            <h1> Edit Tool AD </h1>

            <div className={classnames('field', { error: !!this.state.errors.name })}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange} />
            </div><span>{this.state.errors.name}</span>

            <div className={classnames('field', { error: !!this.state.errors.description })}>
                <label htmlFor="description">Description:</label>
                <input type="text" name="description" value={this.state.description} onChange={this.handleOnChange} />
            </div><span>{this.state.errors.description}</span>

            <div className={classnames('field', { error: !!this.state.errors.price })}>
                <label htmlFor="price"> Price per hour:</label>
                <input type="number" step="0.01" name="price" value={this.state.price} onChange={this.handleOnChange} />
            </div><span>{this.state.errors.price}</span>

            <div className={classnames('field', { error: !!this.state.errors.url })}>
                <label htmlFor="url">URL:</label>
                <input type="text" name="url" value={this.state.url} onChange={this.handleOnChange} />
            </div><span>{this.state.errors.url}</span>

            <div className="field">
                {this.state.url !== '' && <img src={this.state.url} alt="example url" className="ui small bordered image" />}
            </div>

            <div className="field">
                <button className="ui primary button"> Update </button>
            </div>

        </form>)

        return (

            <div>
                {this.state.loading ? < Redirect to="/" /> : form}
            </div>

        )
    }
}



function mapStateToProps(state, props) {

    if (props.match.params.id) {
        return {
            tool: state.tools.tools.find(tool => tool.id === props.match.params.id)
        }
    }
    return {
        tool: null
    }

}



export default connect(mapStateToProps, { saveTool, fetchTool })(editForm);
