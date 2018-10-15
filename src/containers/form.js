import React, {Component} from 'react';


class toolForm extends Component{

    handleOnChange = (event) => {
        console.log("that one");
    }
    
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log("this one");
    }


    render(){

        return(<div>
            <h1> Place Tool Ad </h1>
            <form onSubmit={this.handleOnSubmit}>
                <div>
                <label>Name:</label>
                <input type="text" name="toolName"  onChange={this.handleOnChange}/>
                </div>
                <div>
                <label>Description:</label>
                <input type="text" name="toolDescription"  onChange={this.handleOnChange}/>
                </div>
                <div>
                <label> Price per hour:</label>
                <input type="number" step="0.01" name="toolPrice" onChange={this.handleOnChange}/>
                </div>
                <div>
                <label>URL:</label>
                <input type="text" name="toolImage"  onChange={this.handleOnChange}/>
                </div>
                <div>
                <input type="submit" value="Submit" />
                </div>
            </form>
            </div>
        )
    }
}



export default toolForm;
