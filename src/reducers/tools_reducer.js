export default function toolsReducer(state={tools:[], found:[]},action){
    switch(action.type){
        case "LOAD_TOOLS":
            return {...state, tools: action.tools};
            
        case "ADD_TOOL":
            state.tools.push(action.tool)
            const result = state.tools.map(tool => tool)
            return {...state, tools: result};

        case "FETCH_TOOL":
        
            return {...state, found: action.tool};

        case "PATCH_TOOL":

            const ind = state.tools.findIndex(tool => tool.id === action.tool.id);
            state.tools.splice(ind,1,action.tool)
            return {...state, tools: state.tools.map(tool => tool)};

        case "DELETE_TOOL":
            const index = state.tools.findIndex(tool => tool.id === action.tool.id);
            return {...state, tools: state.tools.filter((tool,i) => i !== index)}
            
        case "INCREASE_LIKE":
            
            const ref = state.tools.findIndex(tool => tool.id === action.tool.id);
            state.tools.splice(ref,1,action.tool)
            return {...state, tools:state.tools.map(tool => tool)}
        
        default:
            return state;
    }
}