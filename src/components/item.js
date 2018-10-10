import React from 'react';

const Item = ({tools}) => {
    console.log(tools)
    const toolItem = tools.map((t) => {
        return(
            <div>
                <img src={t.url} />
                <p>
                {t.name}
                {t.description}
                {t.price}
                </p>
             </div>
        )
    })

    return (
        
        {toolItem}
    )
    // return(
    //     <div>
    //     nothing
    //     </div>
    // )
}

export default Item;