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

// Const Object
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
constObj();
