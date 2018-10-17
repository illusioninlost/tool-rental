import React from 'react';
import ToolCard from './ToolCard';

export default function ToolsList({ tools }){

    const emptyMessage = (
        <p> There are no tools to rent at this time. Please try again or post one. </p>
    )

    const toolsList = (
        <div className="ui three cards">
        {tools.map(tool => <ToolCard tool={tool} key={tool.id} d/>)}
        </div>
    )
    return (
        <div>
            {toolsList === 0 ? emptyMessage: toolsList}
        </div>
    );
}