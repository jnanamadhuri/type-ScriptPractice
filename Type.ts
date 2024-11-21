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

type person = {
    name: string;
    age: number;
    email?: string;
  };

const alice: person = { name: "Alice", age: 30 };
const bob: person = { name: "Bob", age: 25, email: "bob@example.com" };