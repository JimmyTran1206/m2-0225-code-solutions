import { useRef, useState } from 'react'
import './App.css'
import { Popup } from './Popup'

function App() {
  const [isOpen, setIsOpen]=useState(false)
  function btnClickHandler(){
    setIsOpen(!isOpen)
  }
  function onCloseOverlayHandler(){
    setIsOpen(false)
  }
  const btn=useRef(null);
  return (
    <div>
      <button onClick={btnClickHandler}>Pop up</button>
      <Popup isOpen={isOpen} positionTo={btn.current} onClose={onCloseOverlayHandler}>
        <ul style={{border: '2px solid yellow', borderRadius:'10px', listStyleType:'none', margin: '4px', padding:'4rem', order: '-1', backgroundColor:'goldenrod'}}>
          <li>Item1</li>
          <li>Item2</li>
          <li>Item3</li>
          <li>Item4</li>
          <li>Item5</li>
        </ul>
      </Popup>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, adipisci fuga aspernatur, doloribus minima laudantium voluptatem accusamus explicabo architecto recusandae perspiciatis rem, cum aliquam? Sequi pariatur hic nobis explicabo repellat?</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quam nulla, eius ut sunt, doloremque voluptatem maxime veniam tempore atque ullam. Officiis consequuntur quidem enim! Ad soluta temporibus recusandae error.</div>
    </div>
  )
}

export default App
