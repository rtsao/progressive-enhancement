function greet(person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

const greeting = greet({ firstName: "Ryan", lastName: "Tsao" });
console.log(greeting);
