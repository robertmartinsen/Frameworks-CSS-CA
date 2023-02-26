import { register } from './urls.js'

const signupForm = document.getElementById('signup-form')
signupForm.addEventListener('signup-btn', async (event) => {
    event.preventDefault();
    


    const name = document.getElementById('email-input').value;
    const email = document.getElementById('name-input').value;
    const password = document.getElementById('password-input').value;

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

  if (isValid) {
    // Submit the form
  }

    const userRegistration = {
        email,
        name,
        password,
    };

    try {
        const response = await fetch(`${register}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userRegistration)
        });
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
});