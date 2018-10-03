import React from 'react';

const Tools = ({tools}) => {
    const renderTools = tools.map(tool =>
    <span key={tool.id}>${tool.price}<br/> {tool.description}<br/></span>)
    return(
        <div>
            {renderTools}
        </div>
    )
}

export default Tools