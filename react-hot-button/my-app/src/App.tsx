import { useState } from 'react';
import './App.css';
import { Button } from './Button';

export default function App() {
const [count,setCount]=useState<number>(0);

function handleBtnClick():void{
  setCount(count+1);
}

function getBtnClassName(count:number):string{
  if (count > 18) {
      return 'hot-button nuclear';
    } else if (count > 15) {
      return 'hot-button hot';
    } else if (count > 12) {
      return 'hot-button warm';
    } else if (count > 9) {
      return 'hot-button tepid';
    } else if (count > 6) {
      return 'hot-button cool';
    } else if (count > 3) {
      return 'hot-button cold';
    } else {
      return 'hot-button dark';
    }
}

const btnClassName:string=getBtnClassName(count);//sync the className and count without using additional states

return (
    <>
    <Button btnClass={btnClassName} count={count} handleClick={handleBtnClick}/>
    </>
  )
}
