// Your code here
// Implementing the createEmployeeRecord function
function createEmployeeRecord(array) {
    let employeeRecord = {
      firstName: array[0],
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  
    return employeeRecord;
  }
  
  // Implementing the createEmployeeRecords function
  function createEmployeeRecords(arrays) {
    let employeeRecords = arrays.map(array => createEmployeeRecord(array));
    
    return employeeRecords;
  }
  
  // Implementing the createTimeInEvent function
  function createTimeInEvent(employee, dateStamp) {
    let [date, hour] = dateStamp.split(' ');
    
    employee.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date: date
    });
    
    return employee;
  }
  
  // Implementing the createTimeOutEvent function
  function createTimeOutEvent(employee, dateStamp) {
    let [date, hour] = dateStamp.split(' ');
    
    employee.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date: date
    });
    
    return employee;
  }
  
  // Implementing the hoursWorkedOnDate function
  function hoursWorkedOnDate(employee, date) {
    let timeIn = employee.timeInEvents.find(event => event.date === date);
    let timeOut = employee.timeOutEvents.find(event => event.date === date);
    
    return (timeOut.hour - timeIn.hour) / 100;
  }
  
  // Implementing the wagesEarnedOnDate function
  function wagesEarnedOnDate(employee, date) {
    let hoursWorked = hoursWorkedOnDate(employee, date);
    let wagesEarned = hoursWorked * employee.payPerHour;
    
    return wagesEarned;
  }
  
  // Implementing the allWagesFor function
  function allWagesFor(employee) {
    let datesWorked = employee.timeInEvents.map(event => event.date);
    let totalWages = datesWorked.reduce((total, date) => total + wagesEarnedOnDate(employee, date), 0);
    
    return totalWages;
  }
  
  // Implementing the findEmployeeByFirstName function
  function findEmployeeByFirstName(employees, firstName) {
    return employees.find(employee => employee.firstName === firstName);
  }
  
  // Implementing the calculatePayroll function
  function calculatePayroll(employees) {
    let totalPayroll = employees.reduce((total, employee) => total + allWagesFor(employee), 0);
    
    return totalPayroll;
  }
  