import { useState } from "react"

export const useCounter = (initialValue = 1) => {

    const [counter, setCounter] = useState(initialValue)

    const incrementCounter = (value = 1) => {
        setCounter(counter + value);
    }
    const substrCounter = (value = 1) => {
        if (counter > 0) {
            setCounter(counter - value);    
        }
    }
    const resetCounter = () => {
        setCounter(10);
    }
    return {
        counter,
        incrementCounter,
        resetCounter,
        substrCounter
    }
}
