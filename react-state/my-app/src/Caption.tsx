import { useState } from "react";

type Props = {
  captions: string[];
};
export function Caption({ captions }: Props) {
  const [index,setIndex]=useState<number>(0)
  function handleClick():void{
    index<captions.length-1?setIndex(index+1):setIndex(0);
  }

  return <h3 onClick={handleClick}>{captions[index]}</h3>;
}
