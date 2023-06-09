var users = JSON.parse(localStorage.getItem('users')) || [];

function populateUserTable() {
  var tableBody = document.querySelector('#userTable tbody');
  tableBody.innerHTML = '';

  users.forEach(function(user, index) {
    var rowHtml = '<tr>' +
      '<td>' + user.name + '</td>' +
      '<td>' + user.surname + '</td>' +
      '<td>' + user.email + '</td>' +
      '<td>' + user.contactNo + '</td>' +
      '<td><button onclick="removeUser(' + index + ')">Remove</button></td>' +
      '</tr>';

    tableBody.innerHTML += rowHtml;
  });
}

function addUser() {
  var name = prompt('Enter the name:');
  var surname = prompt('Enter the surname:');
  var email = prompt('Enter the email address:');
  var contactNo = prompt('Enter the contact number:');
  
  var user = {
    name: name,
    surname: surname,
    email: email,
    contactNo: contactNo
  };
  
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
  populateUserTable();
}

function removeUser(index) {
  users.splice(index, 1);
  localStorage.setItem('users', JSON.stringify(users));
  populateUserTable();
}

document.getElementById('addUserBtn').addEventListener('click', addUser);

populateUserTable();
