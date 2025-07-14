import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Header'
import { Image } from './Image'
import { Caption } from './Caption'
import { Description } from './Description'
import { Button } from './Button'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <figure>
      <Image />
      <Caption />
      </figure>
      <Description />
      <Button />

    </>
  )
}

export default App
