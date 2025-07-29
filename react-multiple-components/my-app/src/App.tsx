import './App.css'
import { RotatingBanner } from './RotatingBanner';
const items:string[] = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];
function App() {

  return (
    <>
      <RotatingBanner items={items}/>
    </>
  )
}

export default App
