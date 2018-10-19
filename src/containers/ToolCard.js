import React from 'react';
import { Link } from 'react-router-dom';



export default function ToolCard({ tool }) {
    const resize = {fontSize:30, margin:0}
    const description = {fontSize:20, color: '#8f8762'}
    const price = {fontSize:25}

    return (
        <div className="ui card">
            <div>
                <img src={tool.url} alt={tool.name} className="toolpic thumbnail" />
            </div>
            <p style={resize}>{tool.name}</p>
            <p style={description}>{tool.description}</p>
            <p style={price}>&#36;{tool.price}&#47;hour<span></span> </p>

            <div className="ui two buttons">
                <Link to={`tools/${tool.id}`} className="ui basic button green"> Edit </Link>
                <Link to={`tools/${tool.id}/delete`} className="ui basic button red"> Delete </Link>
            </div>
        </div>
    )
}

