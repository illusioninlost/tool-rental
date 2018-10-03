import React from 'react';

const Tools = ({tools}) => {
    const renderTools = tools.map(tool =>
    <span key={tool.id}>\${tool.price} {tool.description}</span>)
    return(
        <div>
            {renderTools}
        </div>
    )
}