// type user ={
//     name: string,
//     age: number,
//     location:  string
// }

// const printInfo = (user:user)=>{
//     return `Name :${user.name} age:${user.age} location:${user.location} `
// }

// const res = printInfo({name: "Alex", age: 20, location: "USA"})

// console.log(res);

//optional properties

// type person = {
//     name: string;
//     readonly age: number;
//     email?: string;
//   };
 

// const alice: person = { name: "Alice", age: 30 };
// const bob: person = { name: "Bob", age: 25, email: "bob@example.com" };


//intersection types are sed to combine multiple types into single type that 
// includes all the property and methods of each constituent type

// type Person = {
//     name: string;
//     age: number;
//   };
  
//   type Employee = {
//     id: number;
//     title: string;
//   };

// type PersonAndEmployee = Person & Employee;

// const alice: PersonAndEmployee = {
//     id: 1,
//     title: "manager",
//     age: 20,
//     name: "alice"
// }

// console.log(alice);


// In TypeScript, unions are used to declare a type that can have one 
// of several possible types. Unions are useful when we want to allow a variable or parameter to accept multiple types.

// let myVar: number | string;

// function foo(param: string | string[]) {
//     // function body
//   }

//   interface MyInterface {
//     myProp: string | number;
//   }

//   let password: string | number = 20;

// type UserInfo = {
//   first: string;
//   last: string;
//   age: number;
// };

// type AccountDetails = {
//   email: string;
//   password: string;
// };

// let user: UserInfo | AccountDetails = {
//   first: "HuXn",
//   last: "WebDev",
//   age: 29,
// };

// console.log(user);

// const items: (number | string)[] = [1, 3, "hello"];
// console.log(items);

// literal types allow you to specify a value that can only be one specific literal value.
//  This means that a variable with a literal type can only have one specific value and no other.

let color : "blue" | "red"| "green";

color = "blue";
// color="yellow"; invalid

let isTrue: true;
isTrue = true; // valid
// isTrue = false;  invalid

let password: "secretPassword" = "secretPassword";
// password = "tryingAnotherPassword"; // Warning ⚠️
console.log(password);
