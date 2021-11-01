console.log("Example of Global Scope");
var x = 10;
console.log("Here, variable x is global variable so it is accessible everywhere in the program");
function f1()
{
    console.log("Global Value of x = " +x);

}
f1();
console.log("Example of Local Scope");
function f2()
{
    var y = 9;
    console.log("Local value of y = "+y);
    console.log("Here, variable y is local variable so it is accessible only inside the function f1")
    console.log("Value of x = "+x);
}
f2();
