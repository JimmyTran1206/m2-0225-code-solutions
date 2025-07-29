import { useState } from 'react';
import './StopWatch.css'
import { FaPause, FaPlay } from 'react-icons/fa';




export function StopWatch(){
  const [count, setCount]=useState<number>(0)
  const [isStop, setIsStop]= useState<boolean>(true)
  const [intervalId, setIntervalId] = useState<number|undefined>(undefined)
  function handlePlayingClick(){
    setIsStop(()=>false)
    const currentIntervalId= setInterval(()=>{setCount((count)=>count+1)},1000);
    setIntervalId(()=>currentIntervalId)
  }

  function handleStopClick(){
    setIsStop(()=>true)
    clearInterval(intervalId);
    setIntervalId(()=>undefined)
  }

  function clockReset(){
    if(isStop===true){
      setCount(()=>0)
    }
  }

  return (
    <>
      <div className="stopwatch">
        <div className="watch-face" onClick={clockReset}>
          <span>{count}</span>
        </div>
        {isStop?<FaPlay size="2rem" className="start-stop" onClick={handlePlayingClick}/>:
        <FaPause size="2rem" className="start-stop" onClick={handleStopClick} />}
      </div>
    </>
  )
}
