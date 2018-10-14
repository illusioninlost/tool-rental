import React, {Component} from 'react';

class toolForm extends Component{
    
    render(){
        return(<div>
            <form>
                <div>
                <label>Name:</label>
                <input type="text" name="toolName"/>
                </div>
                <div>
                <label>Description:</label>
                <input type="text" name="toolDescription"/>
                </div>
                <div>
                <label> Price per hour:</label>
                <input type="number" step="0.01" name="toolPrice"/>
                </div>
                <div>
                <input type="submit" value="Submit"/>
                </div>
            </form>
            </div>
        )
    }
}


export default toolForm;
