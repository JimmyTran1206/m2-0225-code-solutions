import './Items.css'

type Props = {
  items:string[]
}
export function Items({items}:Props){
  return(
    <>
    <ul className="items-list">
      {items.map((item, index)=>
      <li key={index}>{item}</li>
      )}
    </ul>
    </>
  )
}
