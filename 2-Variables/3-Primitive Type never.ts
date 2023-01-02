function functionThrow() : never
{
 throw new Error("This function return never");
}
// functionThrow();

// In the code below, there is an enum with two items. TypeScript knows that only two cases are possible and the default (else) case cannot occur. This insight of TypeScript is perfect since the function return type only accepts a string and does not accept never. If in the future you add a new item from enum, (for example, a ChoiceC, without adding a new case in the switch statement), then, the code can call the unhandledChoice function which returns never.

enum EnumWithChoice {
    ChoiceA,
    ChoiceB,
    ChoiceC
}

function functionReturnStringFromEnum(c:EnumWithChoice): string{

    switch(c)
    {
        case EnumWithChoice.ChoiceA:
            return "A";
        case EnumWithChoice.ChoiceB:
            return "B";
        default:
            return unhandledChoiceFromEnum(c)

    }

}
function unhandledChoiceFromEnum(x:never):never{
        throw new Error("choice is not defined")
}

// For example, 'never' is subtype of everytype but it cannot be a subtype of any type other than itself.

function functionReturnNever():never{
  throw new Error("Error Message");
}

let s : string = "A string";
// let n : never = s; // A string is not substype of never
let n : never;
try{
    n = functionReturnNever();
    s = n; // assigned b/c never is subtype of string
}
catch(e)
{
    console.log(e.Message)
}

// In cases where TypeScript is unable to logically identify a variable as a specific type, it will set the value to never.

// read only code

declare function ajaxCall() : number | boolean;

let data : number | boolean = ajaxCall();
console.log(data)
if (typeof data == "number"){
    console.log(`The data is a number type: ${typeof data}`);
  } else if (typeof data == "boolean"){
    console.log(`The data is a boolean type: ${typeof data}`);
  } else{
    console.log(`Impossible ELSE case: ${typeof data}`); // Hover data here
  }

  //