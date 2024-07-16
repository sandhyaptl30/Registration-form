const form = document.getElementById('registration-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const experience = document.getElementById('experience').value;
  const skills = document.getElementById('skills').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  // Name validation
  if (name === '') {
    document.getElementById('name-error').innerHTML = 'Please enter your name';
  } else if (!name.match(/^[a-zA-Z ]+$/)) {
    document.getElementById('name-error').innerHTML = 'Please enter a valid name (only letters and spaces allowed)';
  } else {
    document.getElementById('name-error').innerHTML = '';
  }

  // Email validation
  if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    document.getElementById('email-error').innerHTML = 'Please enter a valid email address';
  } else {
    document.getElementById('email-error').innerHTML = '';
  }

  // Phone number validation
  if (!phone.match(/^\d{10}$/)) {
    document.getElementById('phone-error').innerHTML = 'Please enter a valid phone number';
  } else {
    document.getElementById('phone-error').innerHTML = '';
  }

  // Experience validation
  if (experience < 0 || experience > 100) {
    document.getElementById('experience-error').innerHTML = 'Please enter a valid experience range (0-100)';
  } else {
    document.getElementById('experience-error').innerHTML = '';
  }

  // Skills validation
  if (skills === '') {
    document.getElementById('skills-error').innerHTML = 'Please enter your skills';
  } else {
    document.getElementById('skills-error').innerHTML = '';
  }


  // Password validation
  if (password.length < 8) {
    document.getElementById('password-error').innerHTML = 'Please enter a password with at least 8 characters';
  } else {
    document.getElementById('password-error').innerHTML = '';
  }

  // Confirm password validation
  if (password!== confirmPassword) {
    document.getElementById('confirm-password-error').innerHTML = 'Passwords do not match';
  } else {
    document.getElementById('confirm-password-error').innerHTML = '';
  }

  // If all validations pass, submit the form
  if (document.getElementById('name-error').innerHTML === '' &&
      document.getElementById('email-error').innerHTML === '' &&
      document.getElementById('phone-error').innerHTML === '' &&
      document.getElementById('experience-error').innerHTML === '' &&
      document.getElementById('skills-error').innerHTML === '' &&
      document.getElementById('password-error').innerHTML === '' &&
      document.getElementById('confirm-password-error').innerHTML === '') {
    form.submit();
  }
});