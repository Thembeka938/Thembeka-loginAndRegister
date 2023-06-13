function Login() {
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  
  if (username.trim() === '' || password.trim() === '') {
      alert('Please enter both username and password.');
      return;
  }

  
  let user = {
      username: username,
      password: password
  };
  localStorage.setItem('user', JSON.stringify(user));

  
  window.location.href = 'table.html';
   

  alert('Logged in successfully!');

  
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
}

function handleFormInputChange() {
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  let loginButton = document.getElementById('loginButton');

  
  if (username.trim() !== '' && password.trim() !== '') {
      loginButton.disabled = false;
  } else {
      loginButton.disabled = true;
  }
}

document.getElementById('username').addEventListener('input', handleFormInputChange);
document.getElementById('password').addEventListener('input', handleFormInputChange);
