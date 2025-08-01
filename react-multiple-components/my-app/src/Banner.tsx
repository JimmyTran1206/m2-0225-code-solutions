type Props={
  item:string
}
export function Banner({item}:Props){

  return (
    <>
      <h2>
        {item}
      </h2>
    </>

  )
}
