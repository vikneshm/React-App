import React from 'react'
import {ACTION} from './Todolist.js'
import '../../assets/Styles/Todo.css'

const Todo = ({todo,dispatch}) => {
    console.log("todo handle",todo)
    return(
        <>
            <div className='todo-content'>
                <div>
                    <input type="checkbox" className="todo-list" ></input>
                    <label htmlFor="todo-list">{todo.name}</label>
                </div>
                <button className="delete-button" onClick={()=>dispatch({type: ACTION.DELETE_TODO, payload:{id: todo.id}})}>Delete</button>
            </div>
        </>
    )
}

export default Todo;