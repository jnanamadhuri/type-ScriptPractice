// tuples basically represent an array with fixed number of elements.each element can be
// different type  the order of types in tuples in def are equal to order of value types
// in actual array. Tuples are similar to arrays, but they have a specific structure and
// can be used to model finite sequences with known lengths.

// let myTuple: [string, number] = ["hello", 42];
// console.log(myTuple[0]);
// console.log(myTuple[1]);

// const products : (number|string)[] = [1, 2,"hello world"]
// console.log(products);

// const games: [string, string, string] = ["Game 1", "Game 2", "Game 3"];
// console.log(games);

// an enum is a way to define a set of named constants. 
// Enums allow you to define a collection of related values that can be used interchangeably 
// in your code.

enum WeatherConditions {
    Sunny,
    Cloudy,
    Rainy,
    Snowy,
  }

const currentWeather = WeatherConditions.Sunny;
console.log(`The current weather is ${currentWeather}`);

enum WeatherCondition {
    Sunny="sunny",
    Cloudy="cloudy",
    Rainy="rainy",
    Snowy="snowy",
  }

 const CurrentWeather = WeatherCondition.Sunny;
console.log(`The current weather is ${CurrentWeather}`);