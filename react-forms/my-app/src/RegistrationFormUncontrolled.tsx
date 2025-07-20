import type { FormEvent } from "react";

export function RegistrationFormUncontrolled(){
  function handleSubmit(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    const form=e.target as HTMLFormElement;
    const formData=new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log('Form JSON: ', formJson);
  }
return (
  <>
    <h3>Uncontrolled Form</h3>
    <form method="post" onSubmit={handleSubmit}>
      <label>
        User: <input name="username" placeholder="User Name" />
      </label>
      <label>
        Password: <input type="password" name="password" placeholder="Password" />
      </label>
      <button type="submit">Submit form</button>
    </form>
  </>
)

}
