// export default function catsReducer(state={loading:false, pictures:[]}, action) {
//     // const cats = fetchCats();
//     switch(action.type) {
//         case "LOADING_CATS":
//         return {...state, loading:true};

//         case "FETCH_CATS":
//         return {loading:false, pictures: action.payload};

//         default:
//         return state;
//     }
// }


export default function toolsReducer(state={tools:[]},action){
    switch(action.type){
        case "LOAD_TOOLS":
            return {...state, tools: action.tools};
        case "ADD_TOOL":
            return {...state, tools: action.tool};
        case "FETCH_TOOL":
            // const index = state.tools.findIndex(tool => tool.id === action.tool.id);
            // if (index > -1) {
            //     return state.tools.map(tool => {
            //         if (tool.id === action.tool.id)
            //         return tool;
            //     });
            // }
            return action.tool;
        case "PATCH_TOOL":
        
            return action.tool;
        case "DELETE_TOOL":
            return state;
        default:
            return state;
    }
}