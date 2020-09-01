import React, {useState} from 'react'

const TimerClock = () => {
    const [time, setTIme] = useState({ m: 0 , s : 0, ms: 0});
    const [timeInterval , setTImeInterval] = useState<any>();
    const [timerStatus , setTimeStatus] = useState(0)
    
    const start = () =>{
        run();
        setTimeStatus(1);
        setTImeInterval(setInterval(run, 10))
    }

    let updateM = time.m;
    let updateS = time.s ;
    let updateMs = time.ms;

    const run = () =>{
        if(updateS === 60 ){
            updateM++;
            updateS = 0;

        }
    
    }
    return (
        <div>
            
        </div>
    )
}

export default TimerClock
