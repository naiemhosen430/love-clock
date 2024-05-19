import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // Target date: May 19, 2025, 12:00 AM
  const targetDate = new Date('May 19, 2025 00:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='lg:p-10 text-center'>
        <h2 className='lg:text-2xl text-lg text-white'>The trial time will finish,</h2>
        <h2 className='lg:text-4xl text-xl flex items-center justify-around font-bold text-white'>
          <span className='inline-block lg:p-5 p-2'>
          {timeLeft.days}
          <h1 className='lg:text-xl text-xs'>days</h1>
          </span>
          <span className='inline-block p-5'>
          {timeLeft.hours}
          <h1 className='lg:text-xl text-xs'>hours</h1>
          </span>
          <span className='inline-block p-5'>
          {timeLeft.minutes}
          <h1 className='lg:text-xl text-xs'>minutes</h1>
          </span>
          <span className='inline-block p-5'>
          {timeLeft.seconds}
          <h1 className='lg:text-xl text-xs'>seconds</h1>
          </span>
        </h2>
        <h2 className='lg:text-2xl text-lg text-white'>later</h2>
      </div>
    </div>
  );
}

export default App;
