import {
    ADD_TODO,
    TOGGLE_TODO,
    SELECT_COLOR,
    DELETE_TODO,
    CLEAR_COMPLETED_TODOS,
    ADD_COLOR,
    DELETE_COLOR,
} from '../actions/constants'
import todoList from '../todo'

const initialState = {
    todos: todoList
}

const todos= (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return{
                ...state,
                todos: todos.push({
                    //newtodo
                })

            }
        case TOGGLE_TODO:
            return{
                ...state,
                todos: todos.filter(
                    //target todo  id 
                    //set to completed to true
                )

            }
        case SELECT_COLOR:
            return{

            }
        case DELETE_TODO:
            return{

            }
        case CLEAR_COMPLETED_TODOS:
            return{

            }
        case ADD_COLOR:
            return {

            }
        case DELETE_COLOR:
            return{

            }
        default:
            return state
    }

}

export default todos