// @flow

/*::
type Person = {
  firstName: string,
  lastName: string
};
*/

function greet(person /*: Person */) /*: string */ {
  return "Hello, " + person.firstName + " " + person.lastName;
}

const greeting = greet({ firstName: "Ryan", lastName: "Tsao" });
console.log(greeting);
