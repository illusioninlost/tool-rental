import React, {Component} from 'react';

class toolForm extends Component{

    handleOnChange = () => {

    }
    
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log("this one");
    }


    render(){
        return(<div>
            <form onSubmit={this.handleOnSubmit}>
                <div>
                <label>Name:</label>
                <input type="text" name="toolName" value={toolName} onChange={this.handleOnChange}/>
                </div>
                <div>
                <label>Description:</label>
                <input type="text" name="toolDescription" value={toolDescription} onChange={this.handleOnChange}/>
                </div>
                <div>
                <label> Price per hour:</label>
                <input type="number" step="0.01" name="toolPrice" value={toolPrice} onChange={this.handleOnChange}/>
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
