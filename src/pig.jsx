import { useState } from "react";
import pig1 from "./assets/pig1.jpg";
import pig2 from "./assets/pig2.jpg";
import "./App.css";

export default function Pig() {
    const [pig, setPig] = useState(true);
    const showPiggie = () => {
        setPig(!pig);
    };
    return (
        <div>
            <button onClick={showPiggie}>
                {pig ? "show real pig" : "show fake pig"}
            </button>
            <div id="piggie-container">
                <img src={pig ? pig2 : pig1} alt="Real Pig" />
            </div>
            <a href="https://www.google.com" target="_blank">
                Visit Google
            </a>
        </div>
    );
}
