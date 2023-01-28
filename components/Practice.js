import React, { useReducer, useEffect, useState, useRef } from "react"
import '../Styles/Practice.css'

const ACTION = {
    INPUT_ENTERED: 'INPUT_ENTERED',
    CORRECT_ANSWER: 'CORRECT_ANSWER',
    INPUT_ERROR: 'INPUT_ERROR',
    APP_RESET: 'APP_RESET'
}  

const reducer = (state,action) => {
    switch(action.type) {
        case ACTION.INPUT_ENTERED :
            return {...state, input: action.payload.value}
        case ACTION.CORRECT_ANSWER :
            return {
                ...state,
                result: calcAnswer(action.payload.value,state),
                input: '',
                questionCount: state.questionCount + 1,
                inputError: false,
            }
        case ACTION.INPUT_ERROR :
            return {...state, inputError: action.payload.value}
        case ACTION.APP_RESET :
            return {input: '', questionCount: null, result: { finalResult:'', wrongAnswerCount: null, correctAnswerCount: null, toggleWrong: true}, inputError: false}
        default :
        return state
    }
}

const calcAnswer = (val,state) => {
    console.log('calcAnswer',state)
    let correctAnswer
    if(val.operator == '+'){correctAnswer = val.numberOne + val.numberTwo}
    else if(val.operator == '-'){correctAnswer = val.numberOne - val.numberTwo}
    else if(val.operator == '*'){correctAnswer = val.numberOne * val.numberTwo}
    if(state.input == correctAnswer) return {...state.result, finalResult: 'correct', correctAnswerCount: state.result.correctAnswerCount + 1}
    else return {...state.result, finalResult: 'incorrect', wrongAnswerCount: state.result.wrongAnswerCount + 1, toggleWrong: !state.result.toggleWrong}
}

const Practice = () => {
    const [number,setNumber] = useState({})
    const wrongChances = useRef(4)
    const [state,dispatch] = useReducer(reducer,{input: '', questionCount: null, result: { finalResult:'', wrongAnswerCount: null, correctAnswerCount: null, toggleWrong: true}, inputError: false})

    const {questionCount, result: {wrongAnswerCount, correctAnswerCount, toggleWrong}} = state

    const numberGeneration = (max) => {
       return Math.floor(Math.random()*(max))
    }
    useEffect(()=>{
        setNumber(
            {
                numberOne: numberGeneration(10),
                numberTwo: numberGeneration(10),
                operator: ['+', '*' ,'-'][numberGeneration(3)]
            }
        )
    },[questionCount])

    useEffect(()=>{
        if(wrongAnswerCount == 4){
            alert("YOU LOST")
            dispatch({type: ACTION.APP_RESET})
        }
        if(correctAnswerCount == 10){
            alert("YOU WON")
            dispatch({type: ACTION.APP_RESET})
        }
    },[wrongAnswerCount,correctAnswerCount])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(state.input && !isNaN(state.input))dispatch({type: ACTION.CORRECT_ANSWER,payload: {value: number}})
        else dispatch({type: ACTION.INPUT_ERROR, payload: {value: true}})
    }

console.log("wrongChances",wrongChances.current)
console.log(state)
console.log(wrongAnswerCount,correctAnswerCount)
    return(
        <div className="outer-div">
            <div className= 'question'>{number.numberOne} {number.operator} {number.numberTwo}</div>
            <form className="our-form">
                <input
                type='text'
                autoComplete="off"
                className="our-field"
                value= {state.input}
                onChange={(e)=> {dispatch({type: ACTION.INPUT_ENTERED, payload: {value:e.target.value.slice(0,2)}})}}
                />
                <button className="our-button" onClick={(e)=>{handleSubmit(e)}}>Validate</button>
            </form>
            <span className= {`warning ${state.inputError ? '' : 'invisible'}`}>
                Enter valid Input!
            </span>
            <div className= "point-status">
                You have {wrongChances.current - wrongAnswerCount} {wrongAnswerCount > 1 ? 'chances' : 'chances'} to complete the progress bar. 
            </div>
            <div className="progress-box">
                <div className="boxes">
                    {[...Array(10)].map((i,index)=>{return(<span key={index} className="box"></span>)})}
                </div>
                <div className="progress-inner" style={{transform: `scaleX(${Math.max(correctAnswerCount,0)/10})`}}></div>
            </div>
        </div>
    )
}

export default Practice