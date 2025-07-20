import { useState, type FormEvent } from "react"

type User = {
  username:string,
  password:string
}

type Props= {
  user?:User
}

export function UserForm({user}:Props){
  const [userName,setUserName]=useState(user?.username??"");
  const [password, setPassword]=useState(user?.password??"");
  const isCreating=user===undefined||user===null;
  function handleSubmit(e:FormEvent){
    e.preventDefault();
    if(isCreating){
      console.log("Creating new user:")
    }else{
      console.log("Modifying existing user")
    }
    console.log({userName, password})
  }

  return (
     <form onSubmit={handleSubmit}>
      <label>
        User: <input name="username" placeholder="User Name" value={userName} onChange={(e)=>setUserName(e.target.value)} />
      </label>
      <label>
        Password: <input type="password" name="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      </label>
      <button>{isCreating ? 'Create User' : 'Update User'}</button>
    </form>
  );


}
