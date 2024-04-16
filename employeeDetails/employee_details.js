const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    { id: 4, name: 'Jane Goodall', age: 93, department: 'Zookeeper', salary: 110000 },
    //... More employee records can be added here
];

 // Function to display all employees
function displayEmployees() {
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name} (age ${employee.age}) &ndash; ${employee.department} &ndash; $${employee.salary}/year</p>`).join('');

    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

// acc is the "accumulator" value
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name} (age ${employee.age}) &ndash; ${employee.department} &ndash; $${employee.salary}</p>`).join('');

    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

// findEmployeeById
function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);

    if (foundEmployee) {
        // const showFoundEmployee = foundEmployee.map((employee, index) => `<p>${employee.id}: ${employee.name} (age ${employee.age}) &ndash; ${employee.department} &ndash; $${employee.salary}</p>`).join('');

        // document.getElementById('employeesDetails').innerHTML = showFoundEmployee;

        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name} (age ${foundEmployee.age}) &ndash; ${foundEmployee.department} &ndash; $${foundEmployee.salary}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = 'No employee has been found with that ID.';
    }
}
