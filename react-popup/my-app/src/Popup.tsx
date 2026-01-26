import type { ReactNode } from "react";
import { createPortal } from "react-dom"

type Props={
  isOpen:boolean,
  positionTo: HTMLElement|null,
  onClose:()=>void,
  children: ReactNode
}
export function Popup({isOpen,positionTo, onClose, children}:Props){
  const r= positionTo?.getBoundingClientRect();
  const top = r ? r.top + r.height : '50%';
  const left = r ? r.left + r.width / 2 : '50%';
  if(!isOpen) return null;

  return createPortal(
    <>
      <div style={{position:'fixed', top:'0', left:'0', backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '100vw', height: '100vh',}} onClick={onClose}></div>
      <div style={{position:'absolute', top, left}}>
        {children}
      </div>
    </>
    , document.body
  )
}
