import { DotEmpty } from "./DotEmpty";
import { DotSolid } from "./DotSolid";
import { LeftArrow } from "./LeftArrow";
import { RightArrow } from "./RightArrow";
import { type Image } from "./App";
import { ImageContent } from "./ImageContent";
import { useEffect, useState } from "react";

type Props={
  images:Image[]
}
export function Carousel ({images}:Props){
  const [activeImageIndex,setActiveImageIndex]=useState(0)
  useEffect(()=>{
    const timerId= setTimeout(()=>{
      setActiveImageIndex(()=>(activeImageIndex+1) % images.length)
      console.log('Current active Index', activeImageIndex)
    },3000);
    return ()=>clearInterval(timerId)
  },[activeImageIndex, images.length])

  function handleRightArrow(){
    setActiveImageIndex(()=>(activeImageIndex+1) % images.length)
  }

  function handleLeftArrow(){
    setActiveImageIndex(()=>(activeImageIndex===0?images.length-1:activeImageIndex-1) % images.length)
  }

  function handleDotClick(index:number):void{
    setActiveImageIndex(()=>index)
  }

  return (
  <>
    <div className="container">
      <div className="row">
        <div className="column-left">
          <LeftArrow handleClick={handleLeftArrow}/>
        </div>

        <div className="images column-center">
          {images.map((image,index)=>{
            return(
              index===activeImageIndex && <ImageContent key ={index} src={image.src} alt = {image.alt} />
            )})}
        </div>

        <div className="column-right">
          <RightArrow handleClick={handleRightArrow} />
        </div>
      </div>

      <div className="row circles">
        {images.map((_,index)=>{
          return(
            index===activeImageIndex?<DotSolid handleClick={()=>handleDotClick(index)}/>:<DotEmpty handleClick={()=>handleDotClick(index)} />
          )})}
      </div>
    </div>
  </>
  )
}
