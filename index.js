// Write your solution in this file!
const employee = {
    name: "Gideon Kirui",
    streetAddress: "123 Main St"
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = { ...employee };
    updatedEmployee[key] = value;
    return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

console.log("Before update:", employee);

destructivelyUpdateEmployeeWithKeyAndValue(employee, "position", "Senior Manager");
console.log("After update:", employee);


function deleteFromEmployeeByKey(employee, key) {
    const clonedEmployee = Object.assign({}, employee);
    delete clonedEmployee[key];
    return clonedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

