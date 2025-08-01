type Props={
  eventHandler:()=>void
}
export function NextButton({eventHandler}:Props){

  return (
    <>
      <button onClick={eventHandler}>Next</button>
    </>
  )
}
