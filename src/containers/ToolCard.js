import React from 'react';
import { Link } from 'react-router-dom';



export default function ToolCard({ tool }) {

    return (
        <div className="ui card">
            <div>
                <img src={tool.url} alt={tool.name} className="toolpic" />
            </div>
            <p>{tool.description}</p>
            <p>&#36;{tool.price}&#47;hour<span></span> </p>

            <div className="ui two buttons">
                <Link to={`tools/${tool.id}`} className="ui basic button green"> Edit </Link>
                <Link to={`tools/${tool.id}/delete`} className="ui basic button red"> Delete </Link>
            </div>
        </div>
    )
}

