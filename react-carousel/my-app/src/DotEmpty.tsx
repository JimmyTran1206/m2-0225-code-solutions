import { FaCircleNotch } from "react-icons/fa";

type Props={
  handleClick:()=>void
}

export function DotEmpty({handleClick}:Props){
  return(
    <>
      <div className="circle" onClick={handleClick}>
        <FaCircleNotch />
      </div>
    </>
  )
}
