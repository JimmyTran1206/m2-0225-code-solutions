type Props={
  eventHandler:()=>void
}
export function PrevButton({eventHandler}:Props){

  return (
    <>
      <button onClick={eventHandler}>Previous</button>
    </>
  )
}
