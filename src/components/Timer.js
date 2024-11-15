
import React, { useEffect, useState } from "react";
import "./Timer.css";

function TimerCountDown() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date("2024-12-29T00:00:00");

        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / (1000 * 60)) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        const timerId = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timerId);
    }, []);

    return (
        <div className="countdown">
            <div className="countdown-boxes">
                <div className="countdown-box">
                    <span className="count-number">{timeLeft.days}</span>
                    <span className="count-label">Days</span>
                </div>
                <div className="countdown-box">
                    <span className="count-number">{timeLeft.hours}</span>
                    <span className="count-label">Hours</span>
                </div>
                <div className="countdown-box">
                    <span className="count-number">{timeLeft.minutes}</span>
                    <span className="count-label">Minutes</span>
                </div>
                <div className="countdown-box">
                    <span className="count-number">{timeLeft.seconds}</span>
                    <span className="count-label">Seconds</span>
                </div>
            </div>
        </div>
    );
}

export default TimerCountDown;



// import React, { useEffect, useState } from "react";
// import './Timer.css';

// function TimerCountDown() {
//     const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

//     useEffect(() => {
//         // Set target date to 29-12-2024
//         const targetDate = new Date("2024-12-29T00:00:00");

//         // Function to calculate remaining time
//         const calculateTimeLeft = () => {
//             const now = new Date();
//             const difference = targetDate - now;

//             if (difference > 0) {
//                 const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//                 const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
//                 const minutes = Math.floor((difference / (1000 * 60)) % 60);
//                 const seconds = Math.floor((difference / 1000) % 60);

//                 setTimeLeft({ days, hours, minutes, seconds });
//             } else {
//                 // If the target date has passed
//                 setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//             }
//         };

//         // Start the countdown
//         const timerId = setInterval(calculateTimeLeft, 1000);

//         // Clean up interval on component unmount
//         return () => clearInterval(timerId);
//     }, []);

//     return (
//         <div className='bx-direction'>
           
//          <p className='sizes'>{timeLeft.days} Days, {timeLeft.hours} Hours, {timeLeft.minutes} Minutes, {timeLeft.seconds} Seconds</p>
//         </div>
//     );
// }

// export default TimerCountDown;



// import React from 'react';

// class TimerCountDown extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             days: 60,
//             hours: 0,
//             minutes: 0,
//             seconds: 0,
//         };
//     }

//     componentDidMount() {
//         this.myInterval = setInterval(() => {
//             const { seconds, minutes, hours, days } = this.state;

//             if (seconds === 0) {
//                 if (minutes === 0) {
//                     if (hours === 0) {
//                         if (days === 0) {
//                             clearInterval(this.myInterval);
//                         } else {
//                             this.setState(prevState => ({
//                                 days: prevState.days - 1,
//                                 hours: 23,
//                                 minutes: 59,
//                                 seconds: 59,
//                             }));
//                         }
//                     } else {
//                         this.setState(prevState => ({
//                             hours: prevState.hours - 1,
//                             minutes: 59,
//                             seconds: 59,
//                         }));
//                     }
//                 } else {
//                     this.setState(prevState => ({
//                         minutes: prevState.minutes - 1,
//                         seconds: 59,
//                     }));
//                 }
//             } else {
//                 this.setState(prevState => ({
//                     seconds: prevState.seconds - 1,
//                 }));
//             }
//         }, 1000); // 1-second interval
//     }

//     componentWillUnmount() {
//         clearInterval(this.myInterval);
//     }

//     render() {
//         const { days, hours, minutes, seconds } = this.state;
//         return (
//             <>
                
//                 {days === 0 && hours === 0 && minutes === 0 && seconds === 0 ? (
//                     <h1>Busted!</h1>
//                 ) : (
                   
//                         <div className='bx-direction'>
//                             <div>
//                                <div style={{display:'flex',flexDirection:'row'}}><h1>{days}</h1><h1 style={{marginLeft:'20%'}}>{hours}</h1>
//                                <h1 style={{marginLeft:'20%'}}>{minutes}</h1> <h1 style={{marginLeft:'20%'}}>{seconds}</h1> </div> 
                                
//                             </div>
//                             <div style={{display:'flex',flexDirection:'row'}}>
//                                 <h1>Days</h1>
//                                 <h1 style={{marginLeft:'6%'}}>Hours</h1>
//                                 <h1 style={{marginLeft:'3%'}}>Minutes</h1>
//                                 <h1 style={{marginLeft:'2%'}}>Seconds</h1>
//                             </div>
//                         </div>
                   
//                 )}
//             </>
//         );
//     }
// }

// export default TimerCountDown;
