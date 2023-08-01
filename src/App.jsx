// Import necessary modules and components
import { supabase } from "./supabaseClient"; // Supabase client for interacting with the backend
import { Formik, Form, Field, ErrorMessage } from "formik"; // Formik library for handling form state and validation
import * as Yup from "yup"; // Yup library for form validation
import "./App.css"; // CSS file for styling the app


const clearAllFields = () => {
  // Implement the logic to reset all state values


};
// Main function that represents the App component
function App() {


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
            gender: "",
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
                <Field as="select" id="applicant" name="applicant" required>
                  <option disabled value="">
                    -Choose option-
                  </option>
                  <option value="me" >Me, 18+</option>
                  <option value="other_adult" >Other Adult, 18+</option>
                  <option value="minor" >Minor, Under 18</option>
                </Field>
                <ErrorMessage name="applicant" component="div" />
              </div>
              <br />
              {/* Other form fields with input elements */}
              <div>
                <label htmlFor="firstName">First Name:</label>
                <Field
                  type="text"
                  name="firstName"
                  placeholder="Enter first name..."
                  required
                />
                <ErrorMessage name="firstName" component="div" />

                <label htmlFor="lastName">Last Name: </label>
                <Field
                  type="text"
                  name="lastName"
                  placeholder="Enter last name..."
                  required
                />
                <ErrorMessage name="lastName" component="div" />
                <br />

                <label htmlFor="emailAddress">Email Address: </label>
                <Field
                  type="text"
                  name="emailAddress"
                  placeholder="Enter your email..."
                  required
                />
                <ErrorMessage name="emailAddress" component="div" />

                <label htmlFor="confirmEmail">Confirm Email: </label>
                <Field
                  type="text"
                  name="confirmEmail"
                  required
                />
                <ErrorMessage name="confirmEmail" component="div" />
                <br />

                <label htmlFor="password">Create Password: </label>
                <Field
                  type="password"
                  name="password"
                  required
                />
                <ErrorMessage name="password" component="div" />

                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field
                  type="password"
                  name="confirmPassword"
                  required
                />
                <ErrorMessage name="confirmPassword" component="div" />
                <br />

                <label htmlFor="DOB">Date of Birth: </label>
                <Field
                  type="date"
                  name="DOB"
                  required
                />
                <ErrorMessage name="DOB" component="div" />

                <span>Gender: </span>

                <label htmlFor="gender">
                  <Field
                    type="radio"
                    name="gender"
                    id="male"
                    value='male'
                  />
                  Male
                </label>

                <label htmlFor="gender">
                  <Field
                    type='radio'
                    name="gender"
                    id='female'
                    value='female'
                  />
                  Female
                </label>
                <br />

                <label htmlFor="phone">Phone: </label>
                <Field
                  type="text"
                  name="phone"
                  placeholder="###-###-####"
                  required
                />
                <br />

                <label htmlFor="streetAddress">Street Address: </label>
                <Field
                  type="text"
                  name="streetAddress"
                  required
                />

                <label htmlFor="country">Country: </label>
                <Field
                  type="text"
                  name="country"
                  required
                />
                <br />

                <label htmlFor="zipCode">Zip Code: </label>
                <Field
                  type="text"
                  name="zipCode"
                  required
                />

                <label htmlFor="city">City: </label>
                <Field
                  type="text"
                  name="city"
                  required
                />
                <br />

                <label htmlFor="state">State: </label>
                <Field
                  type="text"
                  name="state"
                  required
                />
                <br />
                <h2>Choose Your Event</h2>
                {/* ... (other form fields) ... */}
                <div>
                  <label htmlFor="raceOption">
                    <Field
                      type='radio'
                      name='raceOption'
                      id="5K"
                      value="5K"
                    />
                    5K ($35.00 + $3.60 SignUp Fee)
                  </label>
                  <br />
                  <label htmlFor="raceOption">
                    <Field
                      type='radio'
                      name='raceOption'
                      id='5k-Virtual'
                      value="5k-Virtual"
                    />
                    5K Virtual ($35.00 + $3.60 SignUp Fee)
                  </label>
                </div>

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
