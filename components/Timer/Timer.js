import React, { useEffect, useReducer, useState } from "react"
import '../../assets/Styles/Timer.css'
import InputContainer from "./InputContainer.js"

const reducer = (state,action) => {
    switch (action.type) {
        case 'CHANGE_HOUR':
            return{...state,hour: action.data}
        case 'CHANGE_MINUTE':
            return{...state,minute: action.data}
        case 'CHANGE_SECOND':
            return{...state,second: action.data}
        case 'START_TIMER':
            return{...state,second: state.second-1}
    }
}

const Timer = () => {
    const [toggleButton,setToggleButton] = useState(true)
    const [state,dispatch] = useReducer(reducer,{hour:"",minute:"",second:""})
    console.log(state)
    let countDown = null;
        function handleStart(){
            if(state.hour==0 && state.minute==0 && state.second==0) return
            setToggleButton(!toggleButton)
        }
        
        useEffect(()=>{
            console.log('handleButton',state.hour,state.minute,state.second)
            countDown = setInterval(()=>{
                setTimer()
            },1000)
            function setTimer() {
                console.log("count is running",state)
                    if((state.hour==0||"") && (state.minute==0||"") && (state.second==0||"")){
                        clearInterval(countDown)
                        console.log("count cleared")
                    }else if(state.second!=0){
                        dispatch({type:"START_TIMER"})
                }
            }
        },[toggleButton])


    const handleStop = () => {
        setToggleButton(!toggleButton)
    }

    return(
        <div>
            <div className="container">
                <span className="container-title">Countdown Timer</span>
                <div className="container-timers">
                    <p className="container-timers-common">Hours</p>
                    <p className="container-timers-common">Minutes</p>
                    <p className="container-timers-common">Seconds</p>
                </div>
                <InputContainer state={state} dispatch={dispatch} />               
                <div className="container-buttons">
                    <button className={"btn" + (toggleButton? "":" display")} onClick={()=>{handleStart()}}>Start</button>
                    <button className={"btn" + (toggleButton? " display":"")} onClick={()=>{handleStop()}}>Stop</button>
                    <button className="btn">Reset</button>
                </div>
            </div>
        </div>
    )
}

export default Timer