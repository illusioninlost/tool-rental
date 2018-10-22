export default function toolsReducer(state={tools:[], found:[]},action){
    switch(action.type){
        case "LOAD_TOOLS":
            return {...state, tools: action.tools};
        case "ADD_TOOL":
            state.tools.push(action.tool)
            return state
        case "FETCH_TOOL":
            // const index = state.tools.findIndex(tool => tool.id === action.tool.id);
            // if (index > -1) {
            //     return state.tools.map(tool => {
            //         if (tool.id === action.tool.id)
            //         return tool;
            //     });
            // }
            return {...state, found: action.tool};
        case "PATCH_TOOL":
        
            return {...state};
        case "DELETE_TOOL":
            return state;
        default:
            return state;
    }
}