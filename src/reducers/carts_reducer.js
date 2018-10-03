export default function cartsReducer(state={},action){
    switch(action.type){
        case "ADD_TO_CART":
            return state;
        case "DELETE_IN_CART":
            return state;
        default:
            return state;
    }
}