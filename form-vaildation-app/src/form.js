import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
    setNameError(validateName(value));
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setEmailError(validateEmail(value));
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    setPasswordError(validatePassword(value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nameValidationResult = validateName(name);
    const emailValidationResult = validateEmail(email);
    const passwordValidationResult = validatePassword(password);

    if (nameValidationResult || emailValidationResult || passwordValidationResult) {
      setNameError(nameValidationResult);
      setEmailError(emailValidationResult);
      setPasswordError(passwordValidationResult);
      setSuccessMessage('');
      setErrorMessage('Please fix the form errors.');
    } else {
     
      setSuccessMessage('Form submitted successfully!');
      setErrorMessage('');
      setName('');
      setEmail('');
      setPassword('');
      setNameError('');
      setEmailError('');
      setPasswordError('');
    }
  };

  const validateName = (value) => {
    if (value.trim() === '') {
      return 'Name is required.';
    }
    return '';
  };

  const validateEmail = (value) => {
    if (value.trim() === '') {
      return 'Email is required.';
    } else if (!isValidEmail(value)) {
      return 'Invalid email address.';
    }
    return '';
  };

  const isValidEmail = (email) => {
    
    const atIndex = email.indexOf('@');
    const dotIndex = email.lastIndexOf('.');
    return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
  };

  const validatePassword = (value) => {
    if (value.length < 6) {
      return 'Password must be at least 6 characters long.';
    }
    return '';
  };

  return (
    <div>
      {successMessage && <div>{successMessage}</div>}
      {errorMessage && <div>{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
          {nameError && <div>{nameError}</div>}
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
          {emailError && <div>{emailError}</div>}
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
          {passwordError && <div>{passwordError}</div>}
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;


