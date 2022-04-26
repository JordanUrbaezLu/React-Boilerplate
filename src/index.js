import React from "react"
import ReactDOM from "react-dom"
import Counter from "./Counter.js"



const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <div>
    <Counter />
  </div>
);