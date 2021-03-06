import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { saveTool } from '../actions/toolActions';
import { Redirect } from 'react-router';
import FooterPage from '../components/footer';
import Head from '../components/head'

class toolForm extends Component {

    state = {
        name: '',
        description: '',
        price: 0,
        url: '',
        errors: {},
        loading: false,
        like: 0
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
            const { name, description, price, url, like } = this.state;
          
            this.props.saveTool({ name, description, price, url, like })
            
            this.setState({ loading: true });
        }

    }


    render() {

        const head = {fontSize: '2.5em', color: '#382f17', textAlign:'center'}

        const right = {marginTop: '30px'}
        
        const form = (<form className={classnames('ui', 'form', 'smaller', { loading: this.state.loading })} onSubmit={this.handleOnSubmit}>
            <h1 style={head}> Place Tool AD </h1>
            <hr/> 
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

            <div className="field" style={right}>
                <button className="ui primary button"> Post </button>
            </div>

        </form>)

        return (<div>
            <Head/>
            {this.state.loading ? < Redirect to="/" /> : form}
            <FooterPage/>
        </div>
        )
    }
}



export default connect(null, { saveTool })(toolForm);
