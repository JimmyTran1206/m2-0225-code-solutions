import { FaChevronLeft } from "react-icons/fa";

type Props={
  handleClick:()=>void
}

export function LeftArrow({handleClick}:Props){
  return (
    <>
      <div className="arrows arrow-left" onClick={handleClick}>
        <FaChevronLeft/>
      </div>
    </>
  )
}
