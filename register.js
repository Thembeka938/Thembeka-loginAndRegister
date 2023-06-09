var users = JSON.parse(localStorage.getItem('users')) || [];

    function Register() {
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      var confirmPassword = document.getElementById('confirm-password').value;

      
      if (password !== confirmPassword) {
        alert('Password and Confirm Password do not match.');
        return;
      }

    
      var userExists = users.some(function (user) {
        return user.emailAddress === email;
      });

      if (userExists) {
        alert('Email already registered.');
        return;
      }

  
      var user = {
        name: name,
        emailAddress: email,
        password: password
      };

      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));

    
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('password').value = '';
      document.getElementById('confirm-password').value = '';

      alert('You are registered.');

      
      window.location.href = './login.html';
    }