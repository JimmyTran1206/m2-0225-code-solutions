/* eslint-disable react-hooks/exhaustive-deps -- Delete this line! */
import { useEffect, useState } from 'react';

export function Timer() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setTime(time + 1);
      console.log(`Time is: ${time}`);
    }, 1000);
    console.log('Timer ID:', timerId)
    return () => clearTimeout(timerId);
  }, [time]);

  return (
    <div>
      {time}
      <button onClick={() => setTime(0)} style={{ marginLeft: '1rem' }}>
        Reset
      </button>
    </div>
  );
}
