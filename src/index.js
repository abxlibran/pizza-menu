import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"
// React v18
const root = ReactDOM.createRoot(document.querySelector('#root'));
// React strict mode
root.render(<React.StrictMode>
    <App/>
</React.StrictMode>);