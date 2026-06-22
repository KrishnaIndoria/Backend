import React from "react";
import ReactDOM from "react-dom/client";

function App(){
    const name = "Krishna indoria";
    return(
        <>
        <h1>Hello {name}</h1>
        <p>Welcome to React</p>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);