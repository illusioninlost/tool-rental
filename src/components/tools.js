import React from 'react';

const Tools = ({tools}) => {
    const renderTools = tools.map(tool =>
    <p key={tool.id}>${tool.price}<br/> {tool.description}</p>)
    return(
        <div>
            {renderTools}
        </div>
    )
}

export default Tools