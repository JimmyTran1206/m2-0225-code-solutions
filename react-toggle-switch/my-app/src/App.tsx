import { useState } from 'react'
import './App.css'
import { ToggleSwitch } from './ToogleSwitch'

function App() {
  const [isOn,setIsOn]=useState<boolean>(false)
  function handleClick(){
    if(isOn){
      setIsOn(false)
    } else {
      setIsOn(true)
    };
  }
  const switchClass=isOn?"toggle-switch is-on":"toggle-switch";
  const switchLabel=isOn?"On":"Off"
  return (
    <>
      <ToggleSwitch switchClass={switchClass} handleClick={handleClick} switchLabel={switchLabel}/>
    </>
  )
}

export default App
