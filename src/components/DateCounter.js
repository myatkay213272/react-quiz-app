import React, { useReducer} from 'react'

const initialState = {count : 0 , step :1}

const reducer = (state,action)=>{
    console.log(state,action)

    switch(action.type){
        case "dec" :
            return {...state,count : state.count - state.step}
        case "inc":
            return {...state,count : state.count + state.step}
        case "setCount":
            return {...state,count:action.payload}
        case "setStep":
            return {...state,step:action.payload}
        case "reset":
            return initialState
        dafault : 
            throw new Error ("Unknown action")
    }
}

const DateCounter = () => {
    const [state,dispatch] = useReducer(reducer,initialState)
    const {count,step} = state

    const dec = ()=>{
        dispatch({type : "dec"})
    }


    const inc = ()=>{
        dispatch({type : "inc"})
    }

    const defineCount = (e)=>{
        dispatch({type : "setCount" , payload : Number(e.target.value)})
    }

    const defineStep = (e)=>{
        dispatch({type : "setStep",payload : Number(e.target.value)})
    }


    const reset = ()=>{
        dispatch({type : "reset"})
    }

    

  return (
    <div>
        
        <input
            id="range"
            type="range"
            min="0"
            max="10"
            value={step}
            onChange={defineStep}
        />{step}

        <br/>

        <button onClick={dec}> - </button>
        <input 
            type="text" 
            value={count}
            onChange={defineCount}
        />
        <button onClick={inc}> + </button>

        <button onClick={reset}>Reset</button>

    </div>
  )
}

export default DateCounter