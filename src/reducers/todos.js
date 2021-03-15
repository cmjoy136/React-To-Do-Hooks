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


const todos = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return{
                ...state,
                todos: [...state.todos,
                    {
                    id: Math.random(5000 * 1),
                    text: action.text,
                    completed: false,
                    color: 'red',
                }
                ]
            }
        case TOGGLE_TODO:
            return{
                ...state,
                todos: state.todos.map(todo =>  todo.id === action.id ? {...todo, completed: !todo.completed} : todo )
            }
        case SELECT_COLOR:
            return{

            }
        case DELETE_TODO:
            return{
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
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