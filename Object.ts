// const person1: { FName: string; Lname: string; Age: number } = {
//     FName: "john",
//     Lname: "doe",
//     Age: 20,
// };


// const person2: { FName: string; Lname:string; Age: number } = {
//     FName:"john",
//     Lname: "cena",
//     Age: 50,
// }

// function printUser(person:{
//     name:string;
//     age:number;
//     location:string
// } ) {
//     console.log(
//         `Name:${person.name}
//          Age:${person.age}
//          location:${person.location}`
//     );
// }

// printUser({name:"john",age:20,location:"USA"})

function PrintUser(person:{Name:string;age:number;location:string}) {
    return {
        name: "Madhuri",
        age: 19,
        location: "India"
    }
}
const john :{Name:string;age:number;location:string} = {
    Name: "john",
    age:20,
    location:"USA"
}

console.log(PrintUser(john));