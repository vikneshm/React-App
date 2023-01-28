import React from 'react'

const InputContainer = ({state,dispatch}) => {
    return(
            <div className="container-inputs">
                    <input
                    type='number'
                    className="container-inputs-time hour"
                    onChange={(e)=>{dispatch({type:"CHANGE_HOUR",data: e.target.value})}}
                    maxLength='2'
                    value={state.hour}
                    placeholder="00"
                    onInput= {(e)=>e.target.value=e.target.value.slice(0,2)}
                    />
                    <p className="container-inputs-colon">:</p>
                    <input
                    type='number'
                    className="container-inputs-time minute"
                    onChange={(e)=>{dispatch({type:"CHANGE_MINUTE",data: e.target.value})}}
                    maxLength='2'
                    value={state.minute}
                    placeholder="00"
                    onInput= {(e)=>e.target.value=e.target.value.slice(0,2)}
                    />
                    <p className="container-inputs-colon">:</p>
                    <input
                    type='number'
                    className="container-inputs-time sec"
                    onChange={(e)=>{dispatch({type:"CHANGE_SECOND",data: e.target.value})}}
                    maxLength='2'
                    value={state.second}
                    placeholder="00"
                    onInput= {(e)=>e.target.value=e.target.value.slice(0,2)}
                    />
            </div>
    )
}

export default InputContainer;