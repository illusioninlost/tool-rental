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
           
            state.tools.splice(ind,1,action.tool)
            return state;

        case "DELETE_TOOL":
            const index = state.tools.findIndex(tool => tool.id === action.tool.id);
            return {...state, tools: state.tools.filter((tool,i) => i !== index)}
            

        default:
            return state;
    }
}