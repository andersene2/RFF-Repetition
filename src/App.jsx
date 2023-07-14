import { useState } from 'react'
import './App.css'

function App() {
  const [] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [emailAddress, setEmailAdress] = useState("")
  const [confirmEmail, setConfirmEmail] = useState("")
  const [createPassword, setCreatePassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("") 
  const [DOB, setDOB] = useState("")
  const [gender, setGender] = useState("")
  const [phone, setPhone] = useState("")
  const [streetAddress, setStreetAddress] = useState("")
  const [country, setCountry] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")

  function clearAllFields() {
    setFirstName("");
    setLastName("");
    setEmailAdress("");
    setConfirmEmail("");
    setCreatePassword("");
    setConfirmPassword("");
    setDOB("");
    setGender("");
    setPhone("");
    setStreetAddress("");
    setCountry("");
    setZipCode("");
    setCity("");
    setState("");
  }


  return (
    <>
      <div style={{ width: "620px", height: "700px", border: "1px solid gray" }}>
        <div className='formHead'>
          <h2 className='registrant-title'>Registrant #
            <span className='registrantNum'>1</span></h2>
          <div>
            <button type="button" onClick={clearAllFields}>Clear all fields</button>
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
          <label>First Name: 
          <input type="text" name="first_Name" value={firstName} onChange={e => setFirstName(e.target.value)}></input>
          </label>

          <label>Last Name: 
          <input type="text" name="last_Name" value={lastName} 
          onChange={e => setLastName(e.target.value)}></input>
          </label>

          <br></br>
          <br></br>

          <label>Email Address
          <input type='text' name='email_address' value={emailAddress} 
          onChange={e => setEmailAdress(e.target.value)}></input>
          </label>

          <label>Confirm Email: 
          <input type='text' name='confirm_email' value={confirmEmail}
          onChange={e => setConfirmEmail(e.target.value)}></input>
          </label>

          <br></br>
          <br></br>

          <label>Create Password: 
          <input type='text' name='create_password' value={createPassword}
          onChange={e => setCreatePassword(e.target.value)}></input>
          </label>

          <label>Confirm Password: 
          <input type='text' name='confirm_password' value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}></input>
          </label>

          <br></br>
        </div>
        <br></br>
        <div>
          <label>Date of Birth: 
          <input type="date" name='d.o.b.' value={DOB}
          onChange={e => setDOB(e.target.value)}></input>
          </label>

          <span>Male or Female: </span>
          <input id="male" type="radio"
            name="answer" value="male" required></input>
          <label>Male</label>

          <input id="female" type="radio"
            name="answer" value="female" required></input>
          <label>Female</label>
          <br></br>
          <br></br>
          <label type='text' name='phone' value={phone}
          onChange={e => setPhone(e.target.value)}>Phone</label>
          <input></input>
        </div>
        <br></br>
        <div>
          <label>Street Address</label>
          <input type='text' name='street_address' value={streetAddress}
          onChange={e => setStreetAddress(e.target.value)}></input>

          <label>Country</label>
          <input type='text' name='country' value={country}
          onChange={e => setCountry(e.target.value)}></input>

          <br></br>

          <label>Zip Code</label>
          <input type='text' name='zipCode' value={zipCode}
          onChange={e => setZipCode(e.target.value)}></input>

          <label>City</label>
          <input type='text' name='city' value={city}
          onChange={e => setCity(e.target.value)}></input>

          <br></br>

          <label>State</label>
          <input type='text' name='state' value={state}
          onChange={e => setState(e.target.value)}></input>
        </div>

      </div>
    </>
  )
}

export default App
