import './Indicators.css'
export function Indicators(){
  const buttons = [];
  const count = 6
  for (let i = 0; i < count; i++) {
    buttons.push(<button>{i}</button>);
  }
  return (
    <>
      <div>
        {buttons.map((element,index)=><li key={index}>{element}</li>)}
      </div>
    </>
  )
}
