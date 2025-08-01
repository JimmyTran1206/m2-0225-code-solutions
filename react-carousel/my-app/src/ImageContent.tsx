type Props={
  src:string;
  alt:string
}

export function ImageContent({src,alt}:Props){
  return(
    <>
    <img className="image" src={src} alt={alt} />
    </>
  )
}
