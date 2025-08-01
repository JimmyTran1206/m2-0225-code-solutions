import './Button.css'

type Props={
  count:number;
  btnClass:string;
  handleClick:()=>void
};

export function Button({count,btnClass, handleClick}:Props){
  return (
    <main>
      <button className={btnClass} onClick={handleClick} >Hot Button</button>
      <p className="click-count">{`Clicks: ${count}`}</p>
    </main>
  )

}
