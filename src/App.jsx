import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='formHead'>
      <h2 className='registrant-title'>Registrant #
      <span className='registrantNum'>1</span></h2>
      <div >
        <button type="button">Clear all fields</button>
      </div>
    </div>
    <button type="button">Sign In</button>
    <label>Login with your RunSignup account.</label>
    <br></br>
    <br></br>
    <div>
      <label htmlFor='applicant'>Who are you registering: </label>
      <select id='applicant' required>
          <option value="me">Me, 18+</option>
          <option value="other_adult">Other Adult, 18+</option>
          <option value="minor">Minor, Under 18</option>
      </select>

    </div>
    <br></br>
    <div>
      <label>First Name: </label>
      <input></input>

      <label>Last Name: </label>
      <input></input>

      <br></br>
      <br></br>

      <label>Email Address</label>
      <input></input>

      <label>Confirm Email: </label>
      <input></input>

      <br></br>
      <br></br>

      <label>Create Password: </label>
      <input></input>

      <label>Confirm Password: </label>
      <input></input>
      <br></br>
    </div>
    <br></br>
    <div>
      <label>Date of Birth: </label>
      <input type="date"></input>

      <span>Male or Female: </span>
        <input id="male" type="radio"
        name="answer" value="male" required></input>
        <label>Male</label>

        <input id="female" type="radio"
        name="answer" value="female" required></input>
        <label>Female</label>
    </div>

    </>
  )
}

export default App
