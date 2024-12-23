// an interface is a way to define a contract for a specific shape of an object. It defines
// the properties and methods that an object should have in order to be considered compatible
// with that interface.

// interface Person {
//     firstName: string;
//     lastName: string;
//     age: number;
//     sayHello(): void;
//   }

// function greet(person:Person) {
//     console.log(`Hi ${person.firstName} ${person.lastName}`);
//     person.sayHello();
// }

// const John:Person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 20,
//     sayHello() {
//         console.log("hello sus!!");
//     }
// }

// greet(John);

// interface MathOperation {
//     (x: number, y:number): number;
// }

// const add:MathOperation = (a,b) => a+b;
// const sub:MathOperation = (a,b) => a-b;

// console.log(add(12,13));
// console.log(sub(12,7))

interface song {
    name: string;
    singer: string;
    sayHello(name: string,singer: string): string;
}

const album:song ={
    name: "chu lu",
    singer: "arjit singh",
    sayHello(name,singer){
        return `hello ${singer} your ${name} song is excellent `;
    }
}

console.log(album.sayHello("you" ,"meme"));
