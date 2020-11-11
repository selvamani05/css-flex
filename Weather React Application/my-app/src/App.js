import React,{useState} from "react";
import "./index.css";

function App() {
const [values,setvalues] = useState({
  firstname: "",
  lastname: "",
  email: "",
});

const [submitted,setSubmitted] = useState(false);

const handleFirstNameInputChange = (event) => {
  setvalues({
    ...values,firstname:event.target.value
  })
} 

const handleLastNameInputChange = (event) => {
  setvalues({
    ...values,lastname:event.target.value
  })
} 

const handleEmailInputChange = (event) => {
  setvalues({
    ...values,email:event.target.value
  })
} 

const handleSubmit = (event) => {
  event.preventDefault();
  setSubmitted(true);
}

   return (
    <div class="form-container">
      <form onSubmit={handle Submit} class="register-form">
        {/* Uncomment the next line to show the success message */}
        {submitted ? <div class="success-message">Success! Thank you for registering</div> : null}
        <input value={values.firstname}
        onChange={handleFirstNameInputChange}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted ? }<span id="first-name-error">Please enter a first name</span>
        <input value={values.lastname}
        onChange={handleLastNameInputChange}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />  
        {/* Uncomment the next line to show the error message */}
        <span id="last-name-error">Please enter a last name</span>
        <input value={values.email}
        onChange={handleEmailInputChange}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {/* Uncomment the next line to show the error message */}
        <span id="email-error">Please enter an email address</span>
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App