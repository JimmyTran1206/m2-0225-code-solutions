import { useState } from "react"

export function RegistrationFormControlled(){
  const [userName,setUserName]=useState("")
  const [password, setPassword]=useState("")
  function handleSubmit(){
    console.log({userName, password})
  }
  return (
    <>
    <h3>Controlled Form</h3>
    <label>
        User: <input name="username" placeholder="User Name" value={userName} onChange={e=>setUserName(e.target.value)} />
    </label>
    <label>
        Password: <input type="password" name="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
    </label>
    <button type="button" onClick={handleSubmit}>Submit form</button>    </>
  )
}
