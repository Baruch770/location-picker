
import React from 'react';
import useClock from '../../hooks/Clock'

export default function Time() {
    const time = useClock() 

    return <span className="time">{time} </span>;
}