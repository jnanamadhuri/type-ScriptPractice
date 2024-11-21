

// function parameter annotations

// function addOne(num:number) {
//     return num+1;
// }

// console.log(addOne(6));

// const multiply = (a:number,b:number) => a*b;

// console.log(multiply(12,13))



// Default parameter annotations

// const greet = (person:string="anonymous") => {
//     return `hello ${person}`
// }

// console.log(greet());


// Return annotations 

// function double(num:number):number {
//     return num*num
// }
// console.log(double(12));

// const square = (num:number):number =>  num*num;
// console.log(square(13));

// void function

function print(message:string="hello mr.kitty"):void {
    console.log(message);
}

print();
print("hello world")


// Never keyword
// // 1.
// function throwError(msg: string): never {
//     throw new Error(msg);
//   }

//   // 2.
//   function infiniteLoop(): never {
//     while (true) {}
//   }

//   // 3.
//   let x: never;

//   function neverReturns(): never {
//     while (true) {}
//   }

//   x = neverReturns();
