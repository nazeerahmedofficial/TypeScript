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

// Type Checking Erros

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