import React, { useReducer, useState } from "react"
import Todo from './Todo.js'
import '../../assets/Styles/Todolist.css'

export const ACTION = {
    NEW_TODO: 'new_todo',
    DELETE_TODO: 'delete_todo'
}

const reducer = (todo,action) => {
    switch(action.type){
        case ACTION.NEW_TODO:
        return [...todo,newTodo(action.payload.id,action.payload.name)]
        case ACTION.DELETE_TODO:
        return todo.filter((item)=>item.id !== action.payload.id)
        default:
        return todo
    }
}
let num=0;
function newTodo(id,name){
    return{id: id, name: name, complete: false}
}

const Todolist = () => {
    const [todo,dispatch] = useReducer(reducer,[])
    const [name,setName] = useState('')
    const [scroll,setScroll] = useState(true)
    const handleSubmit = (e) => {
        e.preventDefault()
        if(name){
            dispatch({type: ACTION.NEW_TODO,payload:{id:num, name: name}})
            num++
            setName('')
        }
        if(num >= 9){
            setScroll(false)
            console.log("false")
        }else if(num<9){
            setScroll(true)
            console.log("true")
        }
    }

    console.log("todo list", todo)
    return(
        <div className="container-outer">
            <div className="container-inner">
                <div className="container-title">React Todo List ({todo.length})</div>
                    <form onSubmit={handleSubmit} className="container-form">
                        <input type="text" value={name} className="todo-input" placeholder="Type your Task here" onChange={(e)=>setName(e.target.value)}/>
                    </form>
                    <div>
                    <div className="container-scroll" >
                    {(todo.map((item,index)=>{
                    return(
                        <Todo key={index} todo={item} dispatch={dispatch}/>
                    )}))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todolist