import { useState } from "react";
function YourName() {
    const [input, setINPUT] = useState("");
    const [name, setName] = useState("");

    const clk = () => {
        setName(input);
        setINPUT("");
    };

    return (
        <div className="YourName">
            {name ? <p className="fs-3">Hello, {name}! What are we cooking today?</p> : <p className="fs-3">Input your name</p>}
            <input
                type="text"
                placeholder="Enter your name..."
                onChange={(e) => setINPUT(e.target.value)}
                value={input}
            />
            <button onClick={clk}>Save</button>
        </div>
    );
}

export default YourName;