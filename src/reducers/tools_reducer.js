export default function toolsReducer(state={tools:[], found:[]},action){
    switch(action.type){
        case "LOAD_TOOLS":
            return {...state, tools: action.tools};
            
        case "ADD_TOOL":
            state.tools.push(action.tool)
            return state;

        case "FETCH_TOOL":
        
            return {...state, found: action.tool};

        case "PATCH_TOOL":

             const ind = state.tools.findIndex(tool => tool.id === action.tool.id);
                debugger
             // if (ind > -1) {
            //     return state.tools.map(tool => {
            //         if (tool.id === action.tool.id)
            //         return action.tool;
            //     });
            // }
           
        
            return state;

        case "DELETE_TOOL":
            const index = state.tools.findIndex(tool => tool.id === action.tool.id);
            state.tools.filter((tool,i) => i !== index)
            return state;

        default:
            return state;
    }
}