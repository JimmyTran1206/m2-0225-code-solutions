import './Indicators.css'
type Props={
  count:number
  current:number
  updateIndex:(arg0:number)=>void
}
export function Indicators({count,current, updateIndex}:Props){
  const buttons = [];
  for (let i = 0; i < count; i++) {
    const btnClickHandler=()=>{
      updateIndex(i)
    }
    buttons.push(<button  style={{ backgroundColor: i === current ? 'darkblue' : '#1a1a1a' }} onClick={btnClickHandler}>{i}</button>);
  }
  return (
    <>
      <div>
        {buttons.map((element,index)=><li key={index}>{element}</li>)}
      </div>
    </>
  )
}
