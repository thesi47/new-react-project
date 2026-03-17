import { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    function handleClickIncrease() {
        setCount(count + 1);
    }
    function handleClickDecrease() {
        setCount(count - 1);
    }
    return (
        <div>
            <h3>Counter: {count}</h3>
            <button onClick={handleClickIncrease}>click me to increase</button>
            <button onClick={handleClickDecrease}>click me to decrease</button>
            <button onClick={() => setCount(0)}>Click me to reset</button>
        </div>
    )
}