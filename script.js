// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  const employees = []; // init array to store employees 
  let addEmployee = true;
  while (addEmployee) { // init boolean to control loop
    const firstName = prompt("Enter employee's first name:");
    const lastName = prompt("Enter employee's last name:");
    let salary = prompt("Enter employee's salary:");
    while (isNaN(salary)) { // checks if input is a number
      salary = prompt("Invalid input. Please enter a valid salary:");
    }
    const employee = { // employee object to hold their info
      firstName: firstName,
      lastName: lastName,
      salary: Number(salary)
    };
    employees.push(employee);
    console.log(`Employee: ${employee.firstName} ${employee.lastName}`);
    // add employee to array and post roster
    console.log(`Employees: ${JSON.stringify(employees)}`);
    addEmployee = confirm("Do you want to add another employee?");
  }
  return employees;
};

// Display the average salary
const displayAverageSalary = function (employees) {
  console.log('employees:', employees)
  // TODO: Calculate and display the average salary
  let totalSalary = 0;
  for (let i = 0; i < employees.length; i++) {
    totalSalary += parseFloat(employees[i].salary);
  }
  const averageSalary = totalSalary / employees.length;
  console.log(`The average employee salary between our ${employees.length} employee(s) is $${averageSalary.toFixed(2)}.`);
  return averageSalary;
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  if (employeesArray.length === 0) {
    return console.log('No employees to select from.');
  };
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = {
    firstName: employeesArray[randomIndex].firstName,
    lastName: employeesArray[randomIndex].lastName,
    salary: employeesArray[randomIndex].salary
  };
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
  return randomEmployee;
};


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
