import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const App = ()=>{
    const [name,setName] = useState("")
    return(
        <>
        <label htmlFor="username">Enter Name:</label>
        <input type="text" id="username" value={name} onChange={(e) => setName(e.target.value)}></input>
        <br></br>
        <p>Hello {name}</p>
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)