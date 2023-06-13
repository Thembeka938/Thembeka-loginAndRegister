let users = JSON.parse(localStorage.getItem('users')) || [];

    function Register() {
      let name = document.getElementById('name').value;
      let surname = document.getElementById('surname').value;
      let email = document.getElementById('email').value;
      let contact = document.getElementById('contact').value;
      let password = document.getElementById('password').value;
      let confirmPassword = document.getElementById('confirm-password').value;

      
      if (password !== confirmPassword) {
        alert('Password and Confirm Password do not match.');
        return;
      }

    
      let userExists = users.some(function (user) {
        return user.emailAddress === email;
      });

      if (userExists) {
        alert('Email already registered.');
        return;
      }

  
      let user = {
        name: name,
        email: email,
        surname: surname,
        contact: contact,
        password:password
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