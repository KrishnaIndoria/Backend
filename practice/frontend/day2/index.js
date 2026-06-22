import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Counter(){
    const [count,setCount] = useState(0);
    function inc(){
        setCount(count+1);
    }
    function dec(){
        setCount(count-1);
    }
    return(
        <div>
            <h1>Count is : {count}</h1>
            <button onClick={inc}>Increment</button>
            <button onClick={dec}>Decrement</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter/>)
