let users = JSON.parse(localStorage.getItem('users')) || [];

function populateUserTable() {
  let tableBody = document.querySelector('#userTableBody');

  tableBody.innerHTML = '';

  users.forEach(function(user, index) {
    let row = document.createElement('tr');

    let nameCell = document.createElement('td');
    nameCell.textContent = user.name;
    row.appendChild(nameCell);

    let surnameCell = document.createElement('td');
    surnameCell.textContent = user.surname;
    row.appendChild(surnameCell);

    let emailCell = document.createElement('td');
    emailCell.textContent = user.email;
    row.appendChild(emailCell);

    let contactCell = document.createElement('td');
    contactCell.textContent = user.contact;
    row.appendChild(contactCell);

    row.setAttribute('data-index', index);

    tableBody.appendChild(row);
  });
}

populateUserTable();

function removeUser(index) {
  users.splice(index, 1);
  localStorage.setItem('users', JSON.stringify(users));
  populateUserTable();
}

function removeUsers() {
  users = [];
  localStorage.removeItem('users');
  populateUserTable();
}


    

   


