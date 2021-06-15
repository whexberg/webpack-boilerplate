import "../styles/index.scss";

import { useState } from "react";

export const Whatever = () => {
    const [state, setState] = useState("Initial State");
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={() => setState("Button clicked")}>Click me</button>
        </div>
    );
};
