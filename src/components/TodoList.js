import React from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => {
    const { todos } = props
//use state to map list of todos
    return(
        <div className="todo-list">
            <ul>
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        color={todo.color}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList