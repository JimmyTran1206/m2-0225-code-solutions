import { useState } from "react";
import { Banner } from "./Banner";
import { Indicators } from "./Indicators";
import { NextButton } from "./NextButton";
import { PrevButton } from "./PrevButton";

type Props={
  items:string[]
}
export function RotatingBanner({items}:Props){
  const [currentIndex, setCurrentIndex]=useState(0)

  function nextHandler(){
    setCurrentIndex((activeIndex:number)=> (activeIndex + 1) % items.length)
  }

  function prevHandler(){
    setCurrentIndex((activeIndex:number)=> (activeIndex - 1 + items.length) % items.length)
  }

  return (
    <>
      <Banner item={items[currentIndex]} />
      <NextButton eventHandler={nextHandler}/>
      <Indicators count= {items.length} current={currentIndex} updateIndex={setCurrentIndex}/>
      <PrevButton eventHandler={prevHandler}/>
    </>
  )
}
