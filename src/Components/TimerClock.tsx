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
        if(updateMs === 100) {
            updateS++;
            updateMs = 0
        }
        updateMs++;
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
        <div className="timer">
            
            <div className="heading">
                <h3>STOP WATCH</h3>
                
  {
                (timerStatus === 1) ? 
                <div className="">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Clock.gif" alt="gifi" className="image"/>

                </div>
                :''
            }
            </div>
            <div className="display-timer timer-flex">
            <div className="minuetes">
                <span className="timer-num one">{(time.m >= 10) ? time.m: '0' + time.m} </span>
                <span className="timer-text one1"> Minutes</span>
            </div>
            <div className="seconds">
                <span className="timer-num"> {(time.s >= 10) ? time.s: '0' + time.s}</span>
                <span className="timer-text"> Seconds</span>
            </div>
            <div className="mseconds">
                <span className="timer-num two">{(time.ms >= 10) ? time.ms: '0' + time.ms} </span>
                <span className="timer-text two2"> Milli-Seconds</span>
            </div>
            </div>
        <div className="btn-div">
            {
                (timerStatus === 0) ?
                <button onClick={start}>Start</button> : ''
            }

            {
                (timerStatus === 1) ? 
                <div className="">
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
                <div className="">
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
