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
        default:
            return state;
    }
}