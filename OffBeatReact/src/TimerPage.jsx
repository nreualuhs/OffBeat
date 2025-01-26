import React, { useEffect, useState } from "react";
import "./TimerPage.css";
import image from "./images/dancebg.png";

function Timer({textDisplay}) {
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
            <div className="content">
                {seconds > 0 ? (
                    <>
                    <h1 className="subtitle">DANCE! DANCE! DANCE!</h1>
                    <h1 className="countdown">{seconds}</h1>
                    </>
            ) : (
                    <h1 className="finaltitle">{textDisplay}</h1>
            )}
        </div>
    );
}

export default Timer;