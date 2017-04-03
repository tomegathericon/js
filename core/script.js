var linebreak = "<br />";

function sayHello() {
   alert("Hello World")
    
}

function createHello() {
document.write(linebreak);
document.write("Tomegathericon")
}

function static_variables() {
    var a;
    var b;

    a = 1;
    b = 2;

    var c = a+b;

    document.write(linebreak); 
    document.write(c);

}

/*function get_variables() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = a+b;
    console.log(a);
    console.log(b);
    console.log(c);
    alert("The Sum is ");
}*/


function get_variables() {
    var a = parseInt(prompt("Enter the first number","0"));
    var b = parseInt(prompt("Enter the second number","0"));
    var c = a+b;
    console.log(a);
    console.log(b);
    console.log(c);
    alert("The Sum of the numbers entered is: " +c);
}

function math_operations() {


function sum() {
    var a = parseInt(prompt("Enter the first number","0"));
    var b = parseInt(prompt("Enter the second number","0"));
    var c = a+b;
    console.log(a);
    console.log(b);
    console.log(c);
    alert("The Sum of the numbers entered is: " +c);
};


function subtract() {
    var a = parseInt(prompt("Enter the first number","0"));
    var b = parseInt(prompt("Enter the second number","0"));
    var c = a+b;
    console.log(a);
    console.log(b);
    console.log(c);
    alert("The Difference of the numbers entered is: " +c);
};



function multiply() {
    var a = parseInt(prompt("Enter the first number","0"));
    var b = parseInt(prompt("Enter the second number","0"));
    var c = a+b;
    console.log(a);
    console.log(b);
    console.log(c);
    alert("The Multiplication of the numbers entered is: " +c);
};


function division() {
    var a = parseInt(prompt("Enter the first number","0"));
    var b = parseInt(prompt("Enter the second number","0"));
    var c = a+b;
    console.log(a);
    console.log(b);
    console.log(c);
    alert("The Division of the numbers entered is: " +c);
};

function case_value(a) {

switch(a)
{
case 'Sum';
sum();
break;
}
}
document.write('<h1>Chose from the following operations: </h1>');
document.write(linebreak);
document.write('<input type="button" value="Sum" onclick="case_value(this.value)" />');
document.write('<input type="button" value="Diff" onclick="case_value=this.value" />');
document.write('<input type="button" value="Mult" onclick="case_value=this.value" />');
document.write('<input type="button" value="Div" onclick="case_value=this.value" />');

}
