import { useState } from 'react'
import { supabase } from "./supabaseClient";
import './App.css'

//--------------------
console.log({ supabase });

const testingOnly = async () => {
  let { data, error } = await supabase.from("registrants").insert(
    [
      {
        Name: "Testing",
        Age: "99",
      },
    ],
    {
      returning: "minimal", //prevent errors when inserting with RLS on
    }
  );
  console.log({ data, error });
};
testingOnly();

function App() {
  const [] = useState("")
  const [registering, setRegistering] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [emailAddress, setEmailAdress] = useState("")
  const [confirmEmail, setConfirmEmail] = useState("")
  const [password, setPassword] = useState("")
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
    setPassword("");
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

  function validateForm() {

    return

    if (firstName.length == 0) {
      alert('Invalid Form. First Name can not be empty.')
      return
    }
    if (lastName.length == 0) {
      alert('Invalid Form, Last Name can not be empty.')
      return
    }
    if (emailAddress == 0) {
      alert('Invalid Form, Email Address can not be empty.')
      return
    }
    if (password < 8) {
      alert('Invalid Form, Password must contain greater than or equal to 8 characters.')
      return
    }
    //count upper case characters in the password
    let countUpperCase = 0
    //count lower case characters in password
    let countLowerCase = 0
    //count digit characters in password
    let countDigit = 0
    //count special characters in password
    let countSpecialCharacters = 0
    for (let i = 0; i < password.length; i++) {
      const specialChars = [
        '!',
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '(',
        ')',
        '_',
        '-',
        '+',
        '=',
        '[',
        '{',
        ']',
        '}',
        ':',
        ';',
        '<',
        '>',
      ]
      if (specialChars.includes(password[i])) {
        countSpecialCharacters++
      } else if (!isNaN(password[i] * i)) {
        countDigit++
      } else {
        if (password[i] == password[i].toUpperCase()) {
          countUpperCase++
        }
        if (password[i] == password[i].toLowerCase()) {
          countLowerCase++
        }
      }
    }
    if (countLowerCase == 0) {
      alert('Invalid Form, 0 lower case characters in password.')
      return
    }
    if (countUpperCase == 0) {
      alert('Invalid Form, 0 upper case characters in password.')
      return
    }
    if (countDigit == 0) {
      alert('Invalid Form, 0 digit characters in password.')
      return
    }
    if (countSpecialCharacters == 0) {
      alert('Invalid Form, 0 special characters in password.')
      return
    }
    if (emailAddress !== confirmEmail) {
      alert('Invalid Form, emails fo not match.')
      return
    }
    if (password !== confirmPassword) {
      alert('Invalid Form, passwords do not match.')
      return
    }
  }

  /*

  const { error } = await supabase
    .from('countries')
    .insert({ id: 1, Name: {firstName} + {lastName}, DOB: {DOB}   })

  */

  return (
    <>

      <div style={{ width: "620px", height: "800px", border: "1px solid gray" }}>
        <form >
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
              <input
                type='text'
                name='first_Name'
                value={firstName}
                placeholder='Enter first name...'
                onChange={e => setFirstName(e.target.value)}
              />
            </label>

            <label>Last Name:
              <input
                type='text'
                name='last_Name'
                placeholder='Enter last name...'
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </label>

            <br></br>
            <br></br>

            <label htmlFor='email'>Email Address:
              <input
                type='text'
                id='email'
                name='email_address'
                placeholder='Type your email...'
                value={emailAddress}
                onChange={e => setEmailAdress(e.target.value)}
              />
            </label>

            <label>Confirm Email:
              <input
                type='text'
                name='confirm_email'
                value={confirmEmail}
                onChange={e => setConfirmEmail(e.target.value)}></input>
            </label>

            <br></br>
            <br></br>

            <label>Create Password:
              <input type='password' name='create_password' value={password}
                onChange={e => setPassword(e.target.value)}></input>
            </label>

            <label>Confirm Password:
              <input type='password' name='confirm_password' value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}></input>
            </label>

            <br></br>
          </div>
          <br></br>
          <div>
            <label>Date of Birth:
              <input type="date" name='d.o.b.' value={DOB}
                onChange={e => setDOB(e.target.value)} required></input>
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
            <input
              type='text'
              name='phone'
              placeholder='###-###-####'
              value={phone}
              onChange={e => setPhone(e.target.value)} required></input>
          </div>

          <br></br>

          <div>
            <label>Street Address: </label>
            <input
              type='text'
              name='street_address'
              value={streetAddress}
              onChange={e => setStreetAddress(e.target.value)}
              required></input>

            <label>Country: </label>
            <input
              type='text'
              name='country'
              value={country}
              onChange={e => setCountry(e.target.value)}
              required></input>

            <br></br>

            <label>Zip Code: </label>
            <input
              type='text'
              name='zipCode'
              value={zipCode}
              onChange={e => setZipCode(e.target.value)}
              required></input>

            <label>City: </label>
            <input type='text' name='city' value={city}
              onChange={e => setCity(e.target.value)} required></input>

            <br></br>

            <label>State: </label>
            <input type='text' name='state' value={state}
              onChange={e => setState(e.target.value)} required></input>
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
          <button
            type='submit'
            onClick={() => { validateForm() }}>
            Continue
          </button>
        </form>
      </div>

    </>
  )
}

export default App
