function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

function Employee(name, age, jobTitle) {
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

function personGreet() {
  const name = document.getElementById('nameInput').value;
  const age = Number(document.getElementById('ageInput').value);

  const person = new Person(name, age);
  person.greet();
}

function employeeGreet() {
  const name = document.getElementById('empNameInput').value;
  const age = Number(document.getElementById('empAgeInput').value);
  const jobTitle = document.getElementById('jobTitleInput').value;

  const employee = new Employee(name, age, jobTitle);
  employee.jobGreet();
}
