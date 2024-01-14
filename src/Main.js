import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";

function Main(){
    return(
        <h1>This is a react application</h1>
    );
}

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>    
)