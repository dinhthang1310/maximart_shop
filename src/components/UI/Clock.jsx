import React, {useEffect, useState} from 'react';
import '../../style/clock.css'


function Clock(props) {
    const [days,setDays] = useState()
    const [hour,setHour] = useState()
    const [minuter,setMinuter] = useState()
    const [second,setSecond] = useState()

    let interval;
    const countDow = ()=> {
        const destination = new Date('Oct 10, 2022')
        interval = setInterval(()=> {
            const now = new Date().getTime()
            const different = destination - now
            const days = Math.floor(different/(1000 * 60 * 60 *24))
            const hour = Math.floor(different % (100 * 60 * 60 *24)/(1000 * 60 *  60))
            const minuter = Math.floor(different % (1000 * 60 * 60)/(1000 * 60))
            const second = Math.floor(different % (1000 * 60) / 1000)

            if (destination < 0) {
                clearInterval(interval.current)
            }else {
                setDays(days)
                setHour(hour)
                setMinuter(minuter)
                setSecond(second)
            }
        })
    }
    useEffect(()=> {
        countDow()
    },[])

    return (
        <div className="clock__wrapper d-flex align-items-center gap-3">
            <div className="clock__data d-flex align-items-center gap-3">
                <div className="text-center">
                    <h2 className="text-white fs-3 mb-2 ">{days}</h2>
                    <h5 className="text-white fs-6">Days</h5>
                </div>
                <span className="text-white fs-3">:</span>
            </div>
            <div className="clock__data d-flex align-items-center gap-3">
                <div className="text-center">
                    <h2 className="text-white fs-3 mb-2">{hour}</h2>
                    <h5 className="text-white fs-6">Hours</h5>
                </div>
                <span className="text-white fs-3">:</span>
            </div>
            <div className="clock__data d-flex align-items-center gap-3">
                <div className="text-center">
                    <h2 className="text-white fs-3 mb-2">{minuter}</h2>
                    <h5 className="text-white fs-6">Minutes</h5>
                </div>
                <span className="text-white fs-3">:</span>
            </div>
            <div className="clock__data d-flex align-items-center gap-3">
                <div className="text-center">
                    <h2 className="text-white fs-3 mb-2">{second}</h2>
                    <h5 className="text-white fs-6">Seconds</h5>
                </div>
            </div>
        </div>
    );
}

export default Clock;