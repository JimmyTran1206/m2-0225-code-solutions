import { FaCircle } from "react-icons/fa";

type Props={
  handleClick:()=>void
}

export function DotSolid({handleClick}:Props){
  return (
    <>
      <div className="circle" onClick={handleClick}>
        <FaCircle/>
      </div>
    </>
  )
}
