import { useState } from 'react'
import './App.css'

function App() {
  const [] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [emailAddress, setEmailAdress] = useState("")
  const [confirmEmail, setConfirmEmail] = useState("")
  const [createPassword, setCreatePassword] = useState("")
  const [DOB, setDOB] = useState("")
  const [gender, setGender] = useState("")
  const [phone, setPhone] = useState("")
  const [streetAddress, setStreetAddress] = useState("")
  const [country, setCountry] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")


  return (
    <>
    <div style={{ width:"620px", height:"700px", border:"1px solid gray"}}>
      <div className='formHead'>
        <h2 className='registrant-title'>Registrant #
        <span className='registrantNum'>1</span></h2>
        <div>
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
      <div  >
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
          <br></br>
          <br></br>
          <label>Phone</label>
          <input></input>
      </div>
      <br></br>
      <div>
        <label>Street Address</label>
        <input></input>

        <label>Country</label>
        <input></input>

        <br></br>

        <label>Zip Code</label>
        <input></input>

        <label>City</label>
        <input></input>

        <br></br>

        <label>State</label>
        <input></input>
      </div>
      
    </div>
    </>
  )
}

export default App
