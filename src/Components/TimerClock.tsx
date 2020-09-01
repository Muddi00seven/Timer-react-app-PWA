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

    var updateM = time.m;
    var updateS = time.s ;
    var updateMs = time.ms;

    const run = () =>{
        if(updateS === 60 ){
            updateM++;
            updateS = 0;
        }
        if(updateMs === 1000) {
            updateS++;
            updateMs = 0
        }
        updateM++;
         return setTIme({ m: updateM,
                s: updateS,
                ms: updateMs
                        })
    }

    const stop = () => {
        clearInterval(timeInterval);
        setTimeStatus(2);
    }

    const reset = () =>{
        clearInterval(timeInterval);
        setTimeStatus(0);
        setTIme({m : 0 ,
                 s : 0,
                 ms: 0
                })
    }

    return (
        <div>
            
        </div>
    )
}

export default TimerClock
