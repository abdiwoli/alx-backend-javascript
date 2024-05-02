interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: "Abdiwoli",
  lastName: "Hansem",
  age: 60,
  location: "Doha, Qatar",
};
const student2: Student = {
  firstName: "hanad",
  lastName: "hanasn",
  age: 60,
  location: "Doha, Qatar",
};

const arr = [student1, student2];

// Get the table element from the DOM
const table = document.createElement('table');

// Create table header
const headerRow = document.createElement('tr');
const headerFirstName = document.createElement('th');
headerFirstName.textContent = 'First Name';
const headerLocation = document.createElement('th');
headerLocation.textContent = 'Location';
headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);
table.appendChild(headerRow);


arr.forEach(student => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});


document.body.appendChild(table);
