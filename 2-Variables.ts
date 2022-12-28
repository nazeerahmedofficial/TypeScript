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