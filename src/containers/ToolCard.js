import React from 'react';

export default function ToolCard({ tool }){
    return(
        <div className="ui card">
            <div className="image">
            <img src={tool.url} alt={tool.name}/>
            </div>
            <p>{tool.description}</p>
            <p>&#36;{tool.price}&#47;hour<span></span>  </p>

        </div>
    )
}

