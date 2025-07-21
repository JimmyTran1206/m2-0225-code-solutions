import { useState, type ChangeEvent } from "react"
import { FaCheck, FaTimes } from "react-icons/fa";
export function ValidatedInput(){
  const [password, setPassword]= useState("");
  let isCorrectPassword=false;
  let errorMessage='';
  function handleChange(e:ChangeEvent<HTMLInputElement>){
    setPassword(e.target.value)
  }
  if(password.length===0){
    errorMessage='A password is required';
    isCorrectPassword=false;
  }else if (password.length<8){
    errorMessage='Your password is too short';
    isCorrectPassword=false;
  }else{
    errorMessage=''
    isCorrectPassword=true
  }
  return (
  <>
    <div className="flex w-full m-12">
      <label>
        <span className="text-gray-700">Password</span>
        <div className="relative w-80">
          <input className="w-full py-1 pl-2 pr-8 border border-gray-200 rounded" type='password' value={password} onChange={handleChange} />
          <div className="absolute inset-y-0 right-2 flex items-center">
          {isCorrectPassword?<FaCheck color="green" />:<FaTimes color="red" />}
          </div>
        </div>
        <div className="p-1 text-red-700">{errorMessage}</div>
      </label>
    </div>
  </>
  )
}
