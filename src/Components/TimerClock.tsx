import React, {useState} from 'react';
import './TimerTest.css'

const TimerClock = () => {
    const [time, setTIme] = useState({ m: 0 , s : 0, ms: 0});
    const [timeInterval , setTImeInterval] = useState<any>();
    const [timerStatus , setTimeStatus] = useState(0)
    
    // CLOCK START
    const start = () =>{
        run();
        setTimeStatus(1);
        setTImeInterval(setInterval(run, 10))
    }
    // TIMER VARIABLES
    var updateM = time.m;
    var updateS = time.s ;
    var updateMs = time.ms;

    // MAIN LOGIC TO START TIMER
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

    // TIMER STOP
    const stop = () => {
        clearInterval(timeInterval);
        setTimeStatus(2);
    }

    // TIMER RESET
    const reset = () =>{
        clearInterval(timeInterval);
        setTimeStatus(0);
        setTIme({m : 0 ,
                 s : 0,
                 ms: 0
                })
    }

    // TO RESUME TIMER
    const resume = () => {
        start()
    }

    return (
        <>
        <div>
            
            <div>
                <h3>STOP WATCH</h3>
            </div>
            <div className="watch-items">
            <div>
                <span>{(time.m >= 10) ? time.m: '0' + time.m}</span>
                <span>Minutes</span>
            </div>
            <div>
                <span>{(time.s >= 10) ? time.s: '0' + time.s}</span>
                <span>Seconds</span>
            </div>
            <div>
                <span>{(time.ms >= 10) ? time.ms: '0' + time.ms}</span>
                <span>Milli-Seconds</span>
            </div>
            </div>
        <div>
            {
                (timerStatus === 0) ?
                <button onClick={start}>Start</button> : ''
            }

            {
                (timerStatus === 1) ? 
                <div>
                    <button onClick={stop}>
                        stop
                    </button>
                    <button onClick={reset}>
                        reset
                    </button>
                </div>
                :''
            }

            {
                (timerStatus === 2) ?
                <div>
                <button onClick={resume}>
                    resume
                </button>
                <button onClick={reset}>
                    reset
                </button>
            </div>
            :''
            }
        </div>
        </div>
        </>
    )
}

export default TimerClock
