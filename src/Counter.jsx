import { useState } from "react";
export function Counter(){
    const [count,setCount]=useState(0);
    function increment(){
        setCount(currentCount=>currentCount+1);
    }
    function decrement(){
        setCount(currentCount=>currentCount-1);
    }
    function resetCount(){
        setCount(0);
    }
    return(
        <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-3xl fon-mono ">{count}</p>
            <nav className="flex  gap-3 items-center">
                <button className="p-3 rounded-md bg-blue-600 font-serif border-none" onClick={decrement}>Decrement</button>
                <button className="p-3 rounded-md bg-red-600 font-serif border-none" onClick={resetCount}>Reset</button>
                <button className="p-3 rounded-md bg-green-600 font-serif border-none" onClick={increment}>Increment</button>
            </nav>
        </div>
    )
}