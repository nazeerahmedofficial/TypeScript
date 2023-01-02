// Redefining the Variable using Var : issue
// var x;
function varFunction()
{
    var x =  "111"
    if(true)
    {
        var x = "999" // variable x redefined
    }
    console.log(x)
}
varFunction()
// console.log(x)

// Type Checking Erros -------------------------------

function varLetFunction()
{
    var myStringValuevar = "VarSting"; 
    let myStringValuelet = "LetSTring"; // let variable is local to scope
    if(true)
    {
        var myStringValuevar = 123; // error : b/c this var is same as above : so type error
        let myStringValuelet = 1234;

    }
}
// varLetFunction() 

// Scope if variable in a module

var myVarVariableOutSide = "I am outside";
let myLetVariableOutSide = "I am outside too";
function letOutsideFunction() {
    console.log(myVarVariableOutSide);
    console.log(myLetVariableOutSide);
}
letOutsideFunction();

// Const Object ---------------------------
function constObj()
{
    const user1 = {id:1,name:"name1"}
    const user2 = {id:2,name:"name2"}

    // user1 = user2 // Cannot assign a constant

    // you can set its name if a public member is available.
    user1.name = user2.name; //Legit!
    user1.id = 0;


    // const object value can be changed , but not reference 
    let obj1 = { p1: "p1value" };
    obj1 = { p1: "p1value changed" };

    const obj2 = { p2: "p2value" };
    obj2 = { p2: "Does not compile" };
    obj2.p2 = "Work!";

}
// constObj();

// Hoisting Variables ----------------------------
function HoistingVaiable()
{

    x = "not declared before assignment"; 
    var x = "declared after assignment  and all fine"; 
    console.log(x)

    y = "not declared before assignments"; // Doesn't compile 
    let y = "The line before forbid this line";; 
 
    z = "not declared before assignments"; // Doesn't compile 
    const z = "The line before forbid this line"; 
}
// HoistingVaiable()

// Scopes
// Shadowing Scope ------------------------
function f1(i: number) {
    console.log("Parameter value", i);
    let i: number = 10; 
}
// f1(0);

function f2() {
    let i: number = 10; 
    if(true){
        // console.log("Variable in IF before value:", i); // variable used before its declartion -> Hoisting
        let i: number = 100;
        console.log("Variable in IF after value:", i);
    }
    console.log("Variable value:", i);
}
f2();

// Capturing Scope ---------------------
function mainFunction() {
    let innerFunction;
    if (true) {
        // Environment for capturing start here
        let variableCapturedByTheInnerFunction = "AvailableToTheInnerFunction";
        innerFunction = function() {
            return variableCapturedByTheInnerFunction;
        }; // Environment for capturing stop here
    }
    return innerFunction();
}
console.log(mainFunction());

function mainFunction2() {
    let innerFunction;
    if (true) {
        // Environment for capturing start here
        let variableCapturedByTheInnerFunction = "AvailableToTheInnerFunction";
        innerFunction = function() {
            return variableCapturedByTheInnerFunction;
        }; // Environment for capturing stop here
        variableCapturedByTheInnerFunction = "Changed"
    }
    return innerFunction();
}
console.log(mainFunction2());

function mainFunction3() {
    let innerFunction;
    let listFunctions = [];
    for (let i = 10; i < 15; i++) {
        innerFunction = function(param1: number) {
            return param1;
        }
        // listFunctions.push(innerFunction(i));
    }
    for (let k = 0; k < 5; k++) {
        console.log(listFunctions[k]);
    }
}
mainFunction3();

// Declaring Scope ------------------
let x = 1;
console.log("Outside: " + x)
function myFunction(){
  // console.log("Inside before re-declaring: " + x)
  let x = 2;
  console.log("Inside after re-declaring: " + x)
  if (x == 2) {
    let x = 3;
    console.log("Inside IF : " + x)
    function mySecondFunction(){
      // console.log("Inside-Inside before: " + x)
      let x = 4;
      console.log("Inside-Inside after: " + x)
    }
    mySecondFunction();
  }
}
myFunction();


//// Switch Scope
function switchFunction(a: number): void {
    switch (a) {
        case 1:
            let variableInCase1 = "test";
            console.log(variableInCase1);
            break;
        case 2:
            let variableInCase2 = "test2";
            console.log(variableInCase2);
            break;
        default:
          console.log("Default");    
    }
}
switchFunction(1);
switchFunction(2);
switchFunction(3);


/// Number in TS ------------------------------------------------

const x: number = 10;
let z: number = 15;
var p: number = 123;
console.log("Here are 3 variables of type number", x, z, p);

// Number Base
let dec: number = 10;
let hex: number = 0x10;
let octo: number = 0o10;
let bin: number = 0b10;
console.log("Here are 4 numbers", dec, hex, octo, bin);


// seprator in number
const numericSeparator1 = 560000067;
const numericSeparator2 = 560_000_067;
const numericSeparator3 = 5_6_0_000_0_6_7;
const numericSeparator4 = Number(5_000);
const numericSeparator5 = Number("5_000"); // Nan 
const numericSeparator6 = parseInt("5_0001");  
const numericSeparator7 =  0xFAB_F00D; 
const numericSeparator8 =  0b1111_11111000_11110000_00001100;
console.log(numericSeparator1)
console.log(numericSeparator2)
console.log(numericSeparator3)
console.log(numericSeparator4)
console.log(numericSeparator5)
console.log(numericSeparator6)
console.log(numericSeparator7)
console.log(numericSeparator8)



// Bolean 
let number1 = 5;
let number2 = 5;
let number3 = 100;
let biggerThan: boolean = number1 > number3;
console.log(biggerThan); // False

let smallerThan: boolean = number1 < number3;
console.log(smallerThan); // True

let biggerOrEqualThan: boolean = number1 <= number2;
console.log(biggerOrEqualThan); // True

let beEqual: boolean = number3 === number3; 
console.log(beEqual); // True

let notBeEqual: boolean = number1 !== number3; 
console.log(notBeEqual); // True


// type which act as a bolean

let x1 = undefined;
let x2 = null
let x3 = -0
let x4 = 0
let x5 = NaN
let x6 = {}
let x7:any[]=[]

function printTrueOrFalse(b:any | any[]):void {
    if(b)
    {
        console.log(`The value ${b} is true`); 
    }
    else
    {
        console.log(`The value ${b} is false`); 
    }
}
printTrueOrFalse(x1);
printTrueOrFalse(x2);
printTrueOrFalse(x3);
printTrueOrFalse(x4);
printTrueOrFalse(x5);
printTrueOrFalse(x6);
printTrueOrFalse(x7);

// any 
let x: any = "string";
x = true;
x = { title: "Object with a string member" };
x = [1, 2, 3];
x = 1;


//Mutable and Immutable Arrays
function arrayMutableAndImmutable()
{
    let a: number[];
    let usingArraySyntax : Array<number>=[1,2,3];
    let multipleTyeArrayexplicti : (number | boolean)[] = [1,true,3];
    


}
arrayMutableAndImmutable();
