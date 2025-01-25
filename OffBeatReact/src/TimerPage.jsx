import React, { useEffect, useState } from "react";
import './index.css'

function Timer() {
    const [seconds, setSeconds] = useState(20);

    useEffect(() => {
        if (seconds > 0) {
            const timerId = setTimeout(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);
            return () => clearTimeout(timerId);
        }
    }, [seconds]);

    return (
        <div className="timerpage">
            <h1>DANCE!</h1>
            <h1>{seconds}</h1>
        </div>
    );
}

export default Timer;