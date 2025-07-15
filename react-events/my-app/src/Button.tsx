type Props = {
  label: string;
  handleClick:()=>void
};
export function Button({ label,handleClick }: Props) {

  return <button onClick={handleClick}>{label}</button>;
}
