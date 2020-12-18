import {
    ADD_TODO,
    DELETE_TODO,
    UPDATE_TODO
} from '../types'

export default (state, action) => {
    switch(action.type){
        
        case ADD_TODO:
            return{
                ...state,
                todoItems: [action.payload, ...state.todoItems]
            };

        default:
            return state;
    }
}