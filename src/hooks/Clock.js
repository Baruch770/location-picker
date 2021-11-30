import {useEffect, useState} from 'react'

const useClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setTime(new Date());
        }, 1000);
    }, []);

    return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
};

export default useClock;