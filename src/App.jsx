// Import necessary modules and components
import { supabase } from "./supabaseClient"; // Supabase client for interacting with the backend
import { Formik, Form, Field, ErrorMessage } from "formik"; // Formik library for handling form state and validation
import * as Yup from "yup"; // Yup library for form validation
import "./App.css"; // CSS file for styling the app

// Main function that represents the App component
function App() {
  // Function to clear all form fields (currently empty, needs to be implemented)
  const clearAllFields = () => {
    // Implement the logic to reset all state values

  };

  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name cannot be empty."),
    lastName: Yup.string().required("Last Name cannot be empty."),
    emailAddress: Yup.string()
      .email("Invalid email address")
      .required("Email Address cannot be empty."),
    password: Yup.string().min(
      8,
      "Password must be at least 8 characters long."
    ),
    // TODO: Add the rest of the validations, go to https://formik.org/docs/guides/validation for more details.
  });

  // Function to handle form submission
  const handleRequest = async (values, { setSubmitting }) => {
    // Call the "submit-form-edge" function on the backend using Supabase client
    await supabase.functions.invoke("submit-form-edge", {
      body: values, // Pass the form values as the body of the request
    });
    setSubmitting(false); // Set isSubmitting to false after the form submission is complete
  };

  // The return statement contains the JSX that renders the component
  return (
    <>
      <div
        style={{ width: "620px", height: "800px", border: "1px solid gray" }}
      >
        {/* Use Formik to manage form state and validation */}
        <Formik
          initialValues={{
            // Initial values for the form fields
            registering: "",
            firstName: "",
            lastName: "",
            emailAddress: "",
            confirmEmail: "",
            password: "",
            confirmPassword: "",
            DOB: "",
            selectedOption: "",
            phone: "",
            streetAddress: "",
            country: "",
            zipCode: "",
            city: "",
            state: "",
            raceOption: "",
          }}
          validationSchema={validationSchema} // Apply the defined validation schema
          onSubmit={handleRequest} // Handle form submission on submit button click
        >
          {/* Render the form */}
          {({ isSubmitting }) => (
            <Form>
              <div className="formHead">
                {/* Form header */}
                <h2 className="registrant-title">
                  Registrant #<span className="registrantNum">1</span>
                </h2>
                <div>
                  {/* Button to clear all form fields */}
                  <button type="button" onClick={clearAllFields}>
                    Clear all fields
                  </button>
                </div>
              </div>
              <button type="button">Sign In</button>
              <label>Login with your RunSignup account.</label>
              <br />
              <br />
              {/* Form fields */}
              <div>
                {/* Select field to choose the registrant */}
                <label htmlFor="applicant">Who are you registering: </label>
                <Field as="select" id="applicant" name="registering" required>
                  <option disabled value="">
                    -Choose option-
                  </option>
                  <option value="me">Me, 18+</option>
                  <option value="other_adult">Other Adult, 18+</option>
                  <option value="minor">Minor, Under 18</option>
                </Field>
                <ErrorMessage name="registering" component="div" />
              </div>
              <br />
              {/* Other form fields with input elements */}
              <div>
                <label>First Name:</label>
                <Field
                  type="text"
                  name="firstName"
                  placeholder="Enter first name..."
                  required
                />
                <ErrorMessage name="firstName" component="div" />

                <label>Last Name: </label>
                <Field
                  type="text"
                  name="lastName"
                  placeholder="Enter last name..."
                  required
                />
                <ErrorMessage name="lastName" component="div" />
                <br />

                <label>Email Address: </label>
                <Field
                  type="text"
                  name="emailAddress"
                  placeholder="Enter your email..."
                  required
                />
                <ErrorMessage name="emailAddress" component="div" />

                <label>Confirm Email: </label>
                <Field 
                  type="text"
                  name="confirmEmail"
                  required
                />
                <ErrorMessage name="confirmEmail" component="div" />
                <br />

                <label>Create Password: </label>
                <Field 
                  type="password"
                  name="password"
                  required
                />
                <ErrorMessage name="password" component="div" />

                <label>Confirm Password</label>
                <Field 
                type="password"
                name="confirmPassword"
                required
                />
                <ErrorMessage name="confirmPassword" component="div" />
                <br />
                
                <label>Date of Birth: </label>
                <Field 
                  type="date"
                  name="DOB"
                  required
                />
                <ErrorMessage name="DOB" component="div" />

                <span>Gender: </span>

                <label>
                  <Field 
                  type="radio"
                  id="male"
                  name="gender"
                  required
                  />
                  Male
                </label>

                <label>
                  <Field 
                    type='radio'
                    id='female'
                    name='gender'
                    required
                  />
                  Female
                </label>
                <br />

                <label>Phone  
                  <Field 
                    type="text"
                    name="phone_Number"
                    placeholder="###-###-####"
                    required
                  />
                </label>
                <br />

                <label>Street Address: </label>
                <Field 
                  type="text"
                  name="streetAddress"
                  required
                />

                <label>Country: </label>
                <Field 
                  type="text"
                  name="country"
                  required
                />
                <br />

                <label>Zip Code: </label>
                <Field
                  type="text"
                  name="zipCode"
                  required
                />

                <label>City: </label>
                <Field
                  type="text"
                  name="city"
                  required
                />
                <br />

                <label>State: </label>
                <Field
                  type="text"
                  name="state"
                  required
                />


                {/* ... (other form fields) ... */}

                <br />
                <br />

                {/* Form submission button */}
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default App;
