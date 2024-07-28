// Write your solution in this file!

const employee = {
  name: 'Sam'
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const updatedEmployee = { ...employee };
  updatedEmployee[key] = value;
  return updatedEmployee;
}

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway");

console.log(employee);
console.log(updatedEmployee);



function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  const streetAddress = {...'11 Broadway'};
  employee[key] = value;
  return employee;
}


function deleteFromEmployeeByKey(employee, key) {
  const updatedEmployee = {...employee}
  delete updatedEmployee[key];
  return updatedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

