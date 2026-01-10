import { useState } from 'react'
import './App.css'
import { Modal } from './Modal'

function App() {
  const [isOpen,setIsOpen]=useState(false);
  // not know how to use Tailwind in custom ReactNode yet.
  return (
    <>
    <button onClick={()=>setIsOpen(true)}> Delete Me!</button>
    <Modal isOpen={isOpen} onClose={()=>setIsOpen(false)} >
      <p style={{fontSize:'24px'}}>Do you really want to delete?</p>
      <div style={{display:'flex', justifyContent:'space-between', margin:'12px', padding:'12px'}}>
        <div><button onClick={()=>setIsOpen(false)}>Cancel</button></div>
        <div><button onClick={()=> {alert('Deleting...'); setIsOpen(false)}}>Delete</button></div>
      </div>
    </Modal>
    </>
  )
}

export default App
