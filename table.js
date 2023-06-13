let users = JSON.parse(localStorage.getItem('users')) || [];
function populateUserTable() {
  let tableBody = document.querySelector('#userTable tbody');

  tableBody.innerHTML = '';

  users.forEach(function(user, index) {
    let row = document.createElement('tr');

    let nameCell = document.createElement('th');
    nameCell.textContent = user.name;
    row.appendChild(nameCell);

    let surnameCell = document.createElement('th');
    surnameCell.textContent = user.surname;
    row.appendChild(surnameCell);

    let emailCell = document.createElement('th');
    emailCell.textContent = user.email;
    row.appendChild(emailCell);

    let contactCell = document.createElement('th');
    contactCell.textContent = user.contact;
    row.appendChild(contactCell);

    

        
        tableBody.appendChild(row);
      });
    }

    
    populateUserTable();

    
    function removeUser(index) {      
      users.splice(index, 1);      
      localStorage.setItem('users', JSON.stringify(users));  

      populateUserTable();
    }
    

   


