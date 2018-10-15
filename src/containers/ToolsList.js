import React from 'react';

export default function ToolsList({ tools }){

    const emptyMessage = (
        <p> There are no tools to rent at this time. Please try again or post one. </p>
    )

    const toolsList = (
        <p>tools list</p>
    )
    return (
        <div>
            {toolsList === 0 ? emptyMessage: toolsList}
        </div>
    );
}