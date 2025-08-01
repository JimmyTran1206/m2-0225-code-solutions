import { useState } from 'react';
import './Image.css';

type Props = {
  srcs: string[];
};
export function Image({ srcs }: Props) {
  const [index,setIndex]=useState<number>(0);
  function handleClick():void{
    index<srcs.length-1?setIndex(index+1):setIndex(0)
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img onClick={handleClick} className="image-fill" src={srcs[index]} alt="space-image" />
      </div>
    </div>
  );
}
