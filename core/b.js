
function details(fname, lname) 

{
    this.fname = fname;
    this.lname = lname;


};


var tomegathericon_details = new details("Abhishek", "Kapoor");

function write_details()

{
    document.write("The Name Is " +tomegathericon_details.fname +" " +tomegathericon_details.lname);
};



//var tomegathericon_array = {fname:"Abhishek", lname: "Kapoor", age: prompt("Fucking Age Man","")};


function create_html() 

{
    document.getElementById('test').innerHTML = '<p>HELLO</p>';
}



function api_call()

{
    var api = new XMLHttpRequest();
    api.open("POST", "http://vsolutionsurvey.online/api/auth", false);
    api.setRequestHeader("Content-type", "application/json");
    api.send(JSON.stringify({"username":prompt("Enter Your UserName"), "password":prompt("Enter Your Password")}));

    console.log(api.status);
    console.log(api.statusText);
    console.log(api.readyState);
    console.log(api.responseText);

}
