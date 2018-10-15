import React, {Component} from 'react';


class toolForm extends Component{

    state = {
        toolName: '',
        toolDescription: '',
        toolPrice: 0,
        toolImage: ''
    }

    handleOnChange = (event) => {
        this.setState({[event.target.name]: event.target})
    }
    
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log("this one");
    }


    render(){

        return(<div>
           
            <form className="ui form" onSubmit={this.handleOnSubmit}>
            <h1> Place Tool Ad </h1>
                <div className="field">
                <label htmlFor="toolName">Name:</label>
                <input type="text" name="toolName" value={this.state.toolName.value} onChange={this.handleOnChange}/>
                </div>
                <div className="field">
                <label htmlFor="toolDescription">Description:</label>
                <input type="text" name="toolDescription" value={this.state.toolDescription.value} onChange={this.handleOnChange}/>
                </div>
                <div className="field">
                <label htmlFor="toolPrice"> Price per hour:</label>
                <input type="number" step="0.01" name="toolPrice" value={this.state.toolPrice.value} onChange={this.handleOnChange}/>
                </div>
                <div className="field">
                <label htmlFor="toolImage">URL:</label>
                <input type="text" name="toolImage"  value={this.state.toolImage.value} onChange={this.handleOnChange}/>
                </div>
                <div className="field">
                    {this.state.toolImage.value !== '' && <img src={this.state.toolImage.value} alt="toolImage" className="ui small bordered image"/>}
                </div>
                <div className="field">
                <button className="ui primary button"> Save </button>
                </div>
            </form>
            </div>
        )
    }
}



export default toolForm;
