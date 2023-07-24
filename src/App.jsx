import { useState } from 'react'
import './App.css'

function App() {
  const [] = useState("")
  const [registering, setRegistering] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [emailAddress, setEmailAdress] = useState("")
  const [confirmEmail, setConfirmEmail] = useState("")
  const [createPassword, setCreatePassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [DOB, setDOB] = useState("")
  const [selectedOption, setSelectedOption] = useState('');
  const [phone, setPhone] = useState("")
  const [streetAddress, setStreetAddress] = useState("")
  const [country, setCountry] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [raceOption, setRaceOption] = useState("");


  function clearAllFields() {

    setRegistering("")
    setFirstName("");
    setLastName("");
    setEmailAdress("");
    setConfirmEmail("");
    setCreatePassword("");
    setConfirmPassword("");
    setDOB("");
    setSelectedOption(''); //state for gender 
    setPhone("");
    setStreetAddress("");
    setCountry("");
    setZipCode("");
    setCity("");
    setState("");
    setRaceOption(""); // state for Race Choice
  }


  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleRaceChange = (event) => {
    setRaceOption(event.target.value);
  };

  return (
    <>
      <div style={{ width: "620px", height: "800px", border: "1px solid gray" }}>
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
          <select id='applicant' value={registering}
            onChange={e => setRegistering(e.target.value)} required>
            <option disabled={true} value="">-Choose option-</option>

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

          <label>Email Address: 
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

          <span>Gender: </span>
          <label>
            <input id="male" type="radio"
              name="answer" value='male'
              checked={selectedOption === 'male'}
              onChange={handleOptionChange} required></input>
            Male
          </label>

          <label>
            <input id="female" type="radio"
              name="answer" value='female'
              checked={selectedOption === 'female'}
              onChange={handleOptionChange} required></input>
            Female
          </label>

          <br></br>
          <br></br>

          <label>Phone: </label>
          <input type='text' name='phone' value={phone}
            onChange={e => setPhone(e.target.value)}></input> Format: ###-###-####
        </div>
        <br></br>
        <div>
          <label>Street Address: </label>
          <input type='text' name='street_address' value={streetAddress}
            onChange={e => setStreetAddress(e.target.value)}></input>

          <label>Country: </label>
          <input type='text' name='country' value={country}
            onChange={e => setCountry(e.target.value)}></input>

          <br></br>

          <label>Zip Code: </label>
          <input type='text' name='zipCode' value={zipCode}
            onChange={e => setZipCode(e.target.value)}></input>

          <label>City: </label>
          <input type='text' name='city' value={city}
            onChange={e => setCity(e.target.value)}></input>

          <br></br>

          <label>State: </label>
          <input type='text' name='state' value={state}
            onChange={e => setState(e.target.value)}></input>
        </div>
        <div>
          <h2>Choose Your Event</h2>
        </div>
        <div>
          <label>
            <input id="5K" type="radio"
              name="race" value="5K"
              checked={raceOption === '5K'}
              onChange={handleRaceChange} required></input>
            5K ($35.00 + $3.60 SignUp Fee)
          </label>
          <br></br>
          <label>
            <input id="5K-Virtual" type='radio'
              name='race' value='5K-Virtual'
              checked={raceOption === '5K-Virtual'}
              onChange={handleRaceChange} required></input>
            5K Virtual ($35.00 + $3.60 SignUp Fee)
          </label>
        </div>
        <br></br>
        <button>Add Another Registrant</button>
        <br></br>
        <button>Continue</button>
      </div>

    </>
  )
}

export default App
