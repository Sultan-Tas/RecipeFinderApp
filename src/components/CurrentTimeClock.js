import React, { useState, useEffect } from 'react';

function CurrentTimeClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => {setTime(new Date());}, 1000)

    }, []);

    const formattedTime = time.toLocaleTimeString()
    return (
        <>
            <p>Current Time: {formattedTime}</p>
        </>
    );
}

export default CurrentTimeClock;