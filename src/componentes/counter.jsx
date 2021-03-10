import { useState } from "react"

export function Counter() {
    const [counter, setCounter] = useState(0)

    function Increment(e) {
        setCounter(counter + 1)
        
        console.log(counter)
    }
    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={Increment} type="button">increment +2</button>
        </div>
    )
}