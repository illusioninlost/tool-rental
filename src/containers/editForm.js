import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { editTool, fetchTool } from '../actions/toolActions'
import { Redirect } from 'react-router'

class editForm extends Component {
    
    state = {
        id: this.props.tool ? this.props.tool.id : null,
        name: this.props.tool ? this.props.tool.name : '',
        description: this.props.tool ? this.props.tool.description : '',
        price: this.props.tool ? this.props.tool.price : 0,
        url: this.props.tool ? this.props.tool.url : '',
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
            const { id, name, description, price, url } = this.state;
            console.log({ id, name, description, price, url })
            this.props.editTool({ id, name, description, price, url })
            this.setState({ loading: true });
        }

    }

    componentDidMount = () => {
        
        this.props.fetchTool(this.props.match.params.id)

    }

    componentWillReceiveProps(nextProps){
        this.setState({ id: nextProps.tool.id,
            name: nextProps.tool.name,
            description: nextProps.tool.description,
            price: nextProps.tool.price,
            url: nextProps.tool.url})
    
    }



    render() {

        const form = (<form className={classnames('ui', 'form', { loading: this.state.loading })} onSubmit={this.handleOnSubmit}>
            <h1> Edit Tool AD </h1>

            <div className={classnames('field', { error: !!this.state.errors.name })}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name"  value={this.state.name} placeholder={this.props.tool.name} onChange={this.handleOnChange} />
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
            tool: state.tools.found
            
        }
    }
    return {
        tool: null
    }

}



export default connect(mapStateToProps, { editTool, fetchTool })(editForm);
