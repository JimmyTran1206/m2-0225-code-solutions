import './ToggleSwitch.css'

type Props={
  switchClass:string;
  handleClick: ()=>void;
  switchLabel:string
}

export function ToggleSwitch({switchClass, handleClick,switchLabel}:Props){
  return (
  <div className={switchClass} onClick={handleClick}>
    <div className="slider">
    <div className="switch"></div>
  </div>
  <span className="state-label">{switchLabel}</span>
</div>
  )
}
