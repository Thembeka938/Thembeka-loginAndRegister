var users = [];


var tableBody = document.querySelector('#userTable tbody');


function populateUserTable() {
  
  tableBody.innerHTML = '';

  
  users.forEach(function(user, index) {
    var row = document.createElement('tr');

    
    var nameCell = document.createElement('td');
    nameCell.textContent = user.name;
    row.appendChild(nameCell);

    
    var emailCell = document.createElement('td');
    emailCell.textContent = user.emailAddress;
    row.appendChild(emailCell);

    
    var actionCell = document.createElement('td');
    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove User';
    removeButton.classList.add('remove-button');
    removeButton.addEventListener('click', function() {
      removeUser(index);
    });
    actionCell.appendChild(removeButton);
    row.appendChild(actionCell);

    
    tableBody.appendChild(row);
  });
}


function removeUser(index) {
  
  users.splice(index, 1);

  
  populateUserTable();
}


