import './App.css'
import { RegistrationFormControlled } from './RegistrationFormControlled'
import { RegistrationFormUncontrolled } from './RegistrationFormUncontrolled'
import { UserForm } from './UserForm'

function App() {

  return (
    <>
      <RegistrationFormUncontrolled />
      <RegistrationFormControlled />
      <h3>Create User</h3>
      <UserForm />
      <h3>Edit User</h3>
      <UserForm user={{ username: 'Fred', password: 'Astaire' }} />

    </>
  )
}

export default App
