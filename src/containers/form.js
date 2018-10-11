import React, {Component} from 'react';

export default class toolForm extends Component{
    
    render(){
        return(<div>
            <form>
                <input type="text" name="toolName"/>
                <input type="text" name="toolDescription"/>
                <input type="number" name="toolPrice"/>
                <input type="submit" value="Submit"/>
            </form>
            </div>
        )
    }
}

