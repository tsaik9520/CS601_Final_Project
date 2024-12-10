import React, { useState } from 'react';
import './Contact.css';

//set form states
const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  //set error states
  const [errors, setErrors] = useState({
    invalidName1: '',
    invalidName2: '',
    invalidEmail: '',
  });

  const [output, setOutput] = useState('');

  //handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //check if all errors are cleared
  const areAllErrorsCleared = () => {
    return (
      errors.invalidName1 === '' &&
      errors.invalidName2 === '' &&
      errors.invalidEmail === ''
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear previous error messages
    setErrors({
      invalidName1: '',
      invalidName2: '',
      invalidEmail: '',
    });
    setOutput('');

    let hasErrors = false;

    // Validate first name
    if (formData.firstName.length < 2) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        invalidName1: 'First name must be at least 2 characters long.',
      }));
      hasErrors = true;
    } else if (!/^[a-zA-Z]+$/.test(formData.firstName)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        invalidName1: 'First name must only contain alpha characters.',
      }));
      hasErrors = true;
    }

    // Validate last name
    if (formData.lastName.length < 2) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        invalidName2: 'Last name must be at least 2 characters long.',
      }));
      hasErrors = true;
    } else if (!/^[a-zA-Z]+$/.test(formData.lastName)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        invalidName2: 'Last name must only contain alpha characters.',
      }));
      hasErrors = true;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.length > 0 && !emailPattern.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        invalidEmail: 'Invalid email address.',
      }));
      hasErrors = true;
    }

    // If no errors, submit form
    if (!hasErrors && areAllErrorsCleared()) {
      setOutput(`Thank you, ${formData.firstName} ${formData.lastName}, your inquiry has been sent.`);
    }
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input type="text" id="fname" name="firstName" value={formData.firstName} onChange={handleChange} />
        <div id="invalidName1" className="error">{errors.invalidName1}</div>
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" id="lname" name="lastName" value={formData.lastName} onChange={handleChange} />
        <div id="invalidName2" className="error">{errors.invalidName2}</div>
      </div>
      <div>
        <label>Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        <div id="invalidEmail" className="error">{errors.invalidEmail}</div>
      </div>
      <button type="submit">Submit</button>
      <div id="output">{output}</div>
    </form>
  );
};

export default ContactForm;