import { useState } from "react";

type Props = {
  texts: string[];
};
export function Description({ texts }: Props) {
  const [index,setIndex]=useState<number>(0);
  function handleClick():void{
        index<texts.length-1?setIndex(index+1):setIndex(0);

  }
  return <p onClick={handleClick}>{texts[index]}</p>;
}
