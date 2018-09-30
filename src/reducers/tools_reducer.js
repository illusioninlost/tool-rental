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


export default function toolsReducer(state={},action){
    switch(action.type){
        case "ADD_TOOL":
            return state;
        case "DELETE_TOOL":
            return state;
        default:
            return state;
    }
}