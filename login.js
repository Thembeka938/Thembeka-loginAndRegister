function Login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Perform form validation
  if (username.trim() === '' || password.trim() === '') {
      alert('Please enter both username and password.');
      return;
  }

  // Store the information in local storage
  var user = {
      username: username,
      password: password
  };
  localStorage.setItem('user', JSON.stringify(user));

  
  window.location.href = 'table.html';
   

  alert('Logged in successfully!');

  // Clear the form fields
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
}

function handleFormInputChange() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var loginButton = document.getElementById('loginButton');

  // Enable the Login button if both fields are filled
  if (username.trim() !== '' && password.trim() !== '') {
      loginButton.disabled = false;
  } else {
      loginButton.disabled = true;
  }
}

document.getElementById('username').addEventListener('input', handleFormInputChange);
document.getElementById('password').addEventListener('input', handleFormInputChange);
