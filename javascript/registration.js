//registration.js

import { register } from './data.js'

const signupForm = document.getElementById('signup-form')
signupForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    


    const nameInput = document.getElementById('name-input');
    const emailInput = document.getElementById('email-input');
    const passwordInput = document.getElementById('password-input');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    let isValid = true;

  if (!name) {
    document.getElementById('name-error').textContent = 'Name is required';
    isValid = false;
  }

  if (!email) {
    document.getElementById('email-error').textContent = 'Email is required';
    isValid = false;
  } else if (!email.endsWith('@noroff.no') && !email.endsWith('@stud.noroff.no')) {
    document.getElementById('email-error').textContent = 'Please use a valid noroff.no or stud.noroff.no email address';
    isValid = false;
  }

  if (!password) {
    document.getElementById('password-error').textContent = 'Password is required';
    isValid = false;
  } else if (password.length < 8) {
    document.getElementById('password-error').textContent = 'Password must be at least 8 characters long';
    isValid = false;
  }
  
  try {
    await register({ name, email, password });
    signupForm.reset();
    window.location.href = '/html/login.html';
  } catch (error) {
    console.error(error);
  }

});