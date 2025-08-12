import { useEffect, useRef, type ReactNode } from "react"

type Props={
  children: ReactNode,
  isOpen:boolean
}

export function Modal({children, isOpen}:Props){
  const modal=useRef<HTMLDialogElement>(null)
  useEffect(()=>{
        if(isOpen){modal.current?.showModal()}
        else{modal.current?.close()};
      },[isOpen])
  return(
    <>
      <dialog ref={modal}>{children}</dialog>
    </>
  )
}
