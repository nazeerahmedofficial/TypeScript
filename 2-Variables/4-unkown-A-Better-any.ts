let variable1: any;
variable1 = "It is a string";
console.log(variable1.substr(0,2)) // Output "it"

//chagning type from any to unkown

let variable2: unknown;
variable2 = "It is a string";
console.log(variable2);
// console.log(typeof variable2)
// console.log(variable2.substr(0,2)) //variable type is unkown not complile


// the only way to access hidden properites or values is to explictiy tell TypeScript a variale's type

let variable3 : unknown;
variable3 = "it is a string";
let variable3string = variable3 as string;
console.log(variable3string.substr(0,2));

