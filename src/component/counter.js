import React, {userState} from 'react'

const counter = () => {
    const [counter, setCounter] = userState(1);

    const incrementCounter = () =>{
        setCounter((prevCounter) => prevCounter + 1)
    }

    const decrementCounter = () =>{
        setCounter((prevCounter) => prevCounter - 1)
    }

  return (
    <div className="counter">
        <button onClick={incrementCounter}>+</button>
        <p>{counter}</p>
        <button onClick={decrementCounter}>-</button>
    </div>
  )
}

export default counter