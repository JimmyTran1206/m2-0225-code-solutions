import { FaChevronRight } from "react-icons/fa";

type Props={
  handleClick:()=>void
}

export function RightArrow({handleClick}:Props){
  return (
    <>
      <div className="arrows arrow-right" onClick={handleClick}>
        <FaChevronRight />
      </div>
    </>
  )
}
